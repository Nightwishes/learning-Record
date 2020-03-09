# review
## 数组方法reduce
- compose方法 (组合)
- reduce  数组不能为空 如果指定了prev数组里只有一项可以直接把当前prev返回
- map(可以映射成一个新的数组)  
- filter 过滤如果返回false会将这一项过滤掉
- some 如果返回的值有true 就返回true ,every
- find 如果返回true 就会把当前项返回,如果无法找到返回undefined

## 数据结构
- 队列(事件环) 、栈（代码执行） 
- 链表（查找快 删除和添加非常方便，双向链表）
- 集合、hash表（set  map（取的速度快））
- 树（二叉树）树的遍历、图

## 装饰器的应用  @class 修饰方法的时候
- 装饰模式：不改变原有状态，在访问原来函数之前做一一系列操作
- AOP
- 重写原型方法 
```javascript
let oldProto = Array.prototype; // 保留数组原有的原型
let proto = Object.create(oldProto); // 创建了一个新proto
['push','unshift','shift'].forEach(method=>{
    proto[method] = function(...args){
        update();
        oldProto[method].call(this,...args);
    }
})

function observer(obj){ // 只将我们传入的数组中的方法重写
    if(Array.isArray(obj)){
        obj.__proto__ = proto
    }
}
observer(arr);
arr.push(1);
console.log(arr);
[].push(4,5,6)
```

## 模板引擎实现原理 （最简单的正则替换）
- 1) with语法 2） new Function 将字符串转化成函数 3） 字符串拼接

## 浏览器事件环 & node事件环 （js执行的属性）
微任务： promise.then ，MutationObserver，process.nextTick

宏任务：script ，ajax ， 事件，requestFrameAnimation， setTimeout ，setInterval ，setImmediate （ie下），MessageChannel ，I/O ，UI rendering。

每执行一个宏任务 就会清空微任务队列

```
    ┌───────────────────────┐
┌─> │        timers         │ 本阶段执行setTimeout() 和 setInterval() 
│   └──────────┬────────────┘      ┌───────────────┐
│   ┌──────────┴────────────┐      │   incoming:   │
│   │poll    (可能会在某些时候进行阻塞)│  <───┤  connections, │ 获取新的 I/O 事件,查找已经到时的定时器
│   └──────────┬────────────┘      │   data, etc.  │
│   ┌──────────┴────────────┐      └───────────────┘
│───│        check          │ setImmediate()
    └───────────────────────┘
```

## node中的全局对象
- process process.argv / process.env / process.platform / process-nextTick
- Buffer  缓存 二进制数据
- setImmediate  立即
- require exports module __filename __dirname (每个文件外面都会增加函数)

## node中的模块 (debug源代码)
模块分类: ES6module 静态导入（import()）,commonjs规范 (动态导入) amd,cmd,umd

### commonjs规范
- 一个文件就是一个模块
- 如果模块想给别人使用 module.exports / exports 同一个对象但是最终导出的是module.exports
    - module.exports = {}
    - exports.a = 1;
    - module.exports.a = 1;
    - global
- 如果想使用这个模块 require

--inpsect-brk (chrome://inspect/#devices)
> 规范其实给exports赋值 默认获取到的就是exports结果

### node中模块的分类
- 核心模块  require('moduleName')
    - fs fs.readFileSync ReadFile fs.existsSync fs.access
    - vm vm.runInThisContext
    - path path.resolve() join extname basename dirname (process.cwd())
    - util util.inherits util.promisify (转化成promise) async + await
    - events on(addListener) once(绑定依次) off(关闭绑定) newListener emit
    - 发布订阅优势  解耦合
- 文件模块/自定义模块 (同步读取文件，包一个自执行函数，vm.runInthisContext,传入export对象，最终返回的是exports 对象，所以就可以拿到其他模块的内容)
- 第三方模块 module.paths
    - commander , chalk , mime 1.jpg 

> 如果文件和文件夹重名 先取文件，文件不能取到，找文件夹 package.json => main => index.js


## npm使用
### 安装
- 全局安装 (bin)
- 本地安装

### 版本问题
npm采用了semver规范作为依赖版本管理方案。semver 约定一个包的版本号必须包含3个数字

- MAJOR 对应大的版本号迭代，做了不兼容旧版的修改时要更新 MAJOR 版本号
- MINOR 对应小版本迭代，发生兼容旧版API的修改或功能更新时，更新MINOR版本号
- PATCH 对应修订版本号，一般针对修复 BUG 的版本号


| range           | 含义                                      | 例                                              |
| --------------- | ----------------------------------------- | ----------------------------------------------- |
| `^2.2.1`        | 指定的 MAJOR 版本号下, 所有更新的版本     | 匹配 `2.2.3`, `2.3.0`; 不匹配 `1.0.3`, `3.0.1`  |
| `~2.2.1`        | 指定 MAJOR.MINOR 版本号下，所有更新的版本 | 匹配 `2.2.3`, `2.2.9` ; 不匹配 `2.3.0`, `2.4.5` |
| `>=2.1`         | 版本号大于或等于 `2.1.0`                  | 匹配 `2.1.2`, `3.1`                             |
| `<=2.2`         | 版本号小于或等于 `2.2`                    | 匹配 `1.0.0`, `2.2.1`, `2.2.11`                 |
| `1.0.0 - 2.0.0` | 版本号从 1.0.0 (含) 到 2.0.0 (含)         | 匹配 `1.0.0`, `1.3.4`, `2.0.0`                  |

预发版：
- alpha(α)：预览版，或者叫内部测试版；一般不向外部发布，会有很多bug；一般只有测试人员使用。
- beta(β)：测试版，或者叫公开测试版；这个阶段的版本会一直加入新的功能；在alpha版之后推出。
- rc(release candidate)：最终测试版本；可能成为最终产品的候选版本，如果未出现问题则可发布成为正式版本。

### scripts
- 执行可执行命令 npm run

### npx
- 执行.bin目录文件

### 发布包
- npm publish


## 课程安排
- buffer
- fs 
- 流