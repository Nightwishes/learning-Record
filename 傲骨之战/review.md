# 回顾 review
## 1 关于函数

- 什么是高阶函数?  

  把函数作为参数或者返回值的一类函数。

- 柯里化函数 （函数更加具体,核心像bind 可以保留参数）   =》 思考：反柯里化函数 (让函数的调用方式变大) 
  Object.prototype.toString.call

- AOP (装饰模式)   将函数进行包装 （代理模式）  before after

  AOP(面向切面编程)的主要作用是把一些跟核心业务逻辑模块无关的功能抽离出来，其实就是给原函数增加一层，不用管原函数内部实现

- 发布订阅模式  promise 一个promise 可以then多次、 观察者模式 (events on emit) 
  解耦合
  一种一对多的关系，发布者和订阅者是否有关联，观察者模式基于发布订阅模式

## 2 promise 
- promise 中的链式调用如何中断?
- Promise.finally实现原理?  
- promise有哪些缺点？ 
    优点 可以解决异步并发问题Promise.all 链式调用 
    缺点 还是基于回调 promise无法终止 new Promise 只能说抛弃这次的结果而已 fetch 无法中断的 xhr.abort()
- promise.race的原理

- 如何中断promise？
- generator &  co 
- async + await 语法糖

## 3 ES6
- let & const (1.没有变量提升 2.不会污染全局作用域 3.不能重复声明 4）拥有自己的作用域 let {} )  import 提升到当前代码的顶部
- Symbol 第六种基本数据类型  独一无二  11 种symbol的定义方式  元编程
- spread 深拷贝 数据类型判断 4种
- set & map (weakMap)  去重  （交集 并集  差集）  v8引擎的垃圾回收 公开视频
- defineProperty proxy、reflect (数据劫持 代理) 
- ES6中的模块化( 静态导入/动态导入) import  export

> 扩展js中的数据结构



## 课程继续
- es6中的类 (类的继承（公有 实例上的属性），静态属性，静态方法（static），super关键字,装饰器的应用)

- 装饰器的应用

- arrowfunc (没有this，没有arguments，没有原型)

- compose方法  reduce map filter some every find findIndex 应用

- 模板字符串 (模板引擎的实现原理)

- 浏览器事件环

  https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

- node核心概念&node事件环
- node的模块 commonjs规范



## 知识点
## node 是一个js 的运行时 js BOM DOM ECMASCRIPT => node中只有ECMASCRIPT + 模块
- import export babel-> commonjs mjs
- node 干什么？ 写些脚本 中间层 服务端渲染（vue react）可以实现前后端分离
- 实现高性能的web服务

### 1).宏任务微任务

- 微任务： promise.then ，MutationObserver，process.nextTick

- 宏任务：script ，ajax ， 事件，requestFrameAnimation， setTimeout ，setInterval ，setImmediate （ie下），MessageChannel ，I/O ，UI rendering。

>  微任务 会比宏任务快，js中会先执行script脚本



### 2).浏览器事件环和node事件环

v10+执行的效果是一样的。给每个宏任务对应的都配置了一个队列 timer poll check (每个执行完后清空一次微任务)




### 3).进程和线程的区别 (node中的进程) 多核 开启子进程 pm2

一个进程中可以有多个线程，比如渲染线程、JS 引擎线程、HTTP 请求线程等等

,进程表示一个程序，线程是进程中的单位  主线程只有一个 

1个进程可以占用1核cpu

- 多线程在单核cpu中其实也是顺序执行的，不过系统可以帮你切换那个执行而已，没有提高速度
- 多个cpu的话就可以在多个cpu中同时执行

> 单线程优点：解决切换上下文时间,锁的问题,节省内存 (多线程)

> node 主进程，在开多个子进程，里面包含着一个线程



### 4).node中的全局对象  (可以直接调用的)
- process，buffer
- process.cwd() 可以改变 process.nextTick process.pid **process.argv** commander **process.env** 环境变量
- require,exports,module,\_\_filename,\_\_dirname (可以直接在模块内部被访问)

  

### 5).node中的模块

- 模块分类 ES6module,commonjs规范 amd,cmd,umd
- commonjs规范  
  - 一个文件就是一个模块
  - 如果模块想给别人使用 module.exports  /  exports 同一个对象但是最终导出的是module.exports 
  - 如果想使用这个模块 require (同步读取文件，包一个自执行函数，vm.runInthisContext,传入export对象，最终返回的是exports 对象，所以就可以拿到其他模块的内容)
- 模块的查找规范
  	- 第三方模块 module.paths
  	- 如果文件和文件夹重名 先取文件，文件不能取到，找文件夹 package.json => main => index.js

### 6).node的内置模块

- vm runInThisContext 
- path模块
- fs模块