# Node.js中的进程与线程
- 进程（Process）是计算机中的程序关于某数据集合上的一次运行活动，是系统进行资源分配和调度的基本单位
- 线程（Thread）是操作系统能够进行运算调度的最小单位。它被包含在进程之中，是进程中的实际运作单位。

**Node特点主线程是单线程的**
一个进程只开一个主线程,基于事件驱动的、异步非阻塞I/O，可以应用于高并发场景

Nodejs中没有多线程，为了充分利用多核cpu,可以使用子进程实现内核的负载均衡

**那我们就要解决以下问题**

- Node.js 做耗时的计算时候阻塞问题
- Node.js如何开启多进程
- 开发过程中如何实现进程守护


## 1.先看问题
```javascript
const http = require('http');
http.createServer((req,res)=>{
    if(req.url === '/sum'){ // 求和
        let sum = 0;
        for(let i = 0 ; i < 10000000000 ;i++){
            sum+=i;
        }
        res.end(sum+'')
    }else{
        res.end('end');
    }
}).listen(3000);
// 这里我们先访问/sum，在新建一个浏览器页卡访问/ 
// 会发现要等待/sum路径处理后才能处理/路径 
```

## 2.开启进程
Node.js 进程创建，是通过child_process模块
- child_process.spawn(） 异步生成子进程
- child_process.fork() 产生一个新的Node.js进程，并使用建立的IPC通信通道调用指定的模块，该通道允许在父级和子级之间发送消息。
- child_process.exec() 产生一个shell并在该shell中运行命令
- child_process.execFile() 无需产生shell


### 2.1 spawn
`spawn`产卵，可以通过此方法创建一个子进程
```javascript
let { spawn } = require("child_process");
let path = require("path");
// 通过node命令执行sub_process.js文件
let childProcess = spawn("node",['sub_process.js'], {
  cwd: path.resolve(__dirname, "test"), // 找文件的目录是test目录下
  stdio: [0, 1, 2] 
});
// 监控错误
childProcess.on("error", function(err) {
  console.log(err);
});
// 监听关闭事件
childProcess.on("close", function() {
  console.log("close");
});
// 监听退出事件
childProcess.on("exit", function() {
  console.log("exit");
});
```

> `stdio`这个属性非常有特色，这里我们给了0,1,2 那么分别代表什么呢？

**stdio**
1) `0,1,2`分别对应当前主进程的`process.stdin`,`process.stdout`,`process.stderr`,意味着主进程和子进程共享标准输入和输出

```javascript
let childProcess = spawn("node",['sub_process.js'], {
  cwd: path.resolve(__dirname, "test"), // 找文件的目录是test目录下
  stdio: [0, 1, 2] 
});
```

> 可以在当前进程下打印 `sub_process.js` 执行结果

2) 默认不提供`stdio`参数时，默认值为 `stdio:['pipe']`，也就是只能通过流的方式实现进程之间的通信

```javascript
let { spawn } = require("child_process");
let path = require("path");
// 通过node命令执行sub_process.js文件
let childProcess = spawn("node",['sub_process.js'], {
  cwd: path.resolve(__dirname, "test"),
  stdio:['pipe'] // 通过流的方式
});
// 子进程读取写入的数据
childProcess.stdout.on('data',function(data){
    console.log(data);
});
// 子进程像标准输出中写入
process.stdout.write('hello');
```

3) 使用`ipc`方式通信,设置值为`stdio:['pipe','pipe','pipe','ipc']`,可以通过`on('message')`和`send`方法进行通信
```javascript
let { spawn } = require("child_process");
let path = require("path");
// 通过node命令执行sub_process.js文件
let childProcess = spawn("node",['sub_process.js'], {
  cwd: path.resolve(__dirname, "test"),
  stdio:['pipe','pipe','pipe','ipc'] // 通过流的方式
});
// 监听消息
childProcess.on('message',function(data){
    console.log(data);
});
// 发送消息
process.send('hello');
```

4) 还可以传入`ignore` 进行忽略 , 传入`inherit`表示默认共享父进程的标准输入和输出



**产生独立进程**
```javascript
let { spawn } = require("child_process");
let path = require("path");
// 通过node命令执行sub_process.js文件
let child = spawn('node',['sub_process.js'],{
    cwd:path.resolve(__dirname,'test'),
    stdio: 'ignore',
    detached:true // 独立的线程
});
child.unref(); // 放弃控制

```
### 2.2 fork
衍生新的进程,默认就可以通过`ipc`方式进行通信
```javascript
let { fork } = require("child_process");
let path = require("path");
// 通过node命令执行sub_process.js文件
let childProcess = fork('sub_process.js', {
  cwd: path.resolve(__dirname, "test"),
});
childProcess.on('message',function(data){
    console.log(data);
});
```

> `fork`是基于`spawn`的，可以多传入一个`silent`属性, 设置是否共享输入和输出

**fork原理**
```javascript
function fork(filename,options){
    let stdio = ['inherit','inherit','inherit']
    if(options.silent){ // 如果是安静的  就忽略子进程的输入和输出
        stdio = ['ignore','ignore','ignore']
    }
    stdio.push('ipc'); // 默认支持ipc的方式
    options.stdio = stdio
    return spawn('node',[filename],options)
}
```

写到这我们就可以解决开始的问题了

```javascript
const http = require('http');
const {fork} = require('child_process');
const path = require('path');
http.createServer((req,res)=>{
    if(req.url === '/sum'){
        let childProcess = fork('calc.js',{
            cwd:path.resolve(__dirname,'test')
        });
        childProcess.on('message',function(data){
            res.end(data+'');
        })
    }else{
        res.end('ok');
    }
}).listen(3000);
```


### 2.3 execFile
通过`node`命令,直接执行某个文件
```javascript
let childProcess = execFile("node",['./test/sub_process'],function(err,stdout,stdin){
    console.log(stdout); 
});
```

> 内部调用的是`spawn`方法

### 2.4 exec
```javascript
let childProcess = exec("node './test/sub_process'",function(err,stdout,stdin){
    console.log(stdout)
});
```

> 内部调用的是`execFile`,其实以上的三个方法都是基于`spawn`的

## 3.cluster
Node.js的单个实例在单个线程中运行。为了利用多核系统，用户有时会希望启动Node.js进程集群来处理负载。

自己通过进程来实现集群
```javascript
let { fork } = require("child_process");
let len = require("os").cpus().length;
let child = fork("server.js", {});

const http = require("http");
const path = require("path");
// 创建服务
let server = http
  .createServer((req, res) => {
    res.end(process.pid + ":process");
  })
  .listen(3000,function(){
      console.log('服务启动')
  });
for (let i = 0; i < len; i++) {
    let child = fork('server.js');
    child.send('server',server); // 让子进程监听同一个服务
}
```

使用cluster模块
```javascript
let cluster = require("cluster");
let http = require("http");
let cpus = require("os").cpus().length;
const workers = {};
if (cluster.isMaster) {
    cluster.on('exit',function(worker){
        console.log(worker.process.pid,'death')
        let w = cluster.fork();
        workers[w.pid] = w;
    })
  for (let i = 0; i < cpus; i++) {
    let worker = cluster.fork();
    workers[worker.pid] = worker;
  }
} else {
  http
    .createServer((req, res) => {
      res.end(process.pid+'','pid');
    })
    .listen(3000);
  console.log("server start",process.pid);
}
```


## 4. pm2应用
pm2可以把你的应用部署到服务器所有的CPU上,实现了多进程管理、监控、及负载均衡  

### 4.1 安装pm2
```bash
npm install pm2 -g # 安装pm2
pm2 start server.js --watch -i max # 启动进程
pm2 list # 显示进程状态
pm2 kill # 杀死全部进程
```

```bash
pm2 start npm -- run dev # 启动npm脚本
```

### 4.2 pm2配置文件
```bash
pm2 ecosystem
```

配置项目自动部署
```javascript
module.exports = {
  apps : [{
    name: 'my-project',
    script: 'server.js',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 2,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  deploy : {
    production : {
      user : 'root',
      host : '39.106.14.146',
      ref  : 'origin/master',
      repo : 'https://github.com/wakeupmypig/pm2-deploy.git',
      path : '/home',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
```


```bash
pm2 deploy ecosystem.config.js production setup # 执行git clone
pm2 deploy ecosystem.config.js production # 启动pm2
```