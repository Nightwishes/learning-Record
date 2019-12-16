## 路漫漫其修远兮，吾将上下而求索(●'◡'●)

### 数据结构

- [队列](https://github.com/Nightwishes/learning-Record/blob/master/dataStructure/queue.js)
- [栈](https://github.com/Nightwishes/learning-Record/blob/master/dataStructure/strack.js)
- [链表](https://github.com/Nightwishes/learning-Record/blob/master/dataStructure/list.js)
- [集合](https://github.com/Nightwishes/learning-Record/blob/master/dataStructure/set.js)
- [二叉树](https://github.com/Nightwishes/learning-Record/blob/master/dataStructure/binaryTree.js)

### 算法

1. [反转链表（#206）](https://github.com/Nightwishes/learning-Record/blob/master/leetCode/206.js)
2. [两数之和（#1)](https://github.com/Nightwishes/learning-Record/blob/master/leetCode/twoSum.js)
3. [三数之和（#15）](https://github.com/Nightwishes/learning-Record/blob/master/leetCode/15.treeSum.js)
4. 多数元素（#169）
5. 环形链表（#141）
6. 有效括号（#20）
7. 设计双端队列（#641）
8. 两两交换链表节点（#24）
9. 链表中间节点（#876）
10. 数组中重复的数（#442）

### Promise,generator异步相关
- [promise的实现,promise解决什么问题,promise的问题](https://github.com/Nightwishes/learning-Record/blob/master/yibu/promise.js)
- [promise.all,promise.race](https://github.com/Nightwishes/learning-Record/blob/master/yibu/allRace.js)
- [如何中断一个promise](https://github.com/Nightwishes/learning-Record/blob/master/yibu/break.js)
- [generator,iterator](https://github.com/Nightwishes/learning-Record/blob/master/yibu/generator.js)
- [利用promise+generator模拟async+await](https://github.com/Nightwishes/learning-Record/blob/master/yibu/async.js)
### 大杂烩

  - [实现一个new](https://github.com/Nightwishes/learning-Record/blob/master/interview/new.js)
 - [深度优先与广度优先](https://github.com/Nightwishes/learning-Record/blob/master/interview/dTraversal.js)
 - [redux,flux,vuex等状态集中管理仓库](https://github.com/Nightwishes/learning-Record/blob/master/interview/redux.md)

 ### 浏览器
 - [从输入URL到浏览器显示页面，中间经历过什么过程?](https://github.com/Nightwishes/learning-Record/blob/master/browser/smile.png)
 - [强缓存与协商缓存](https://github.com/Nightwishes/learning-Record/blob/master/browser/1.md)
 - [xss攻击是什么？](https://github.com/Nightwishes/learning-Record/blob/master/browser/xss.md)
    - 原理
    - 如何避免
 - [CSRF攻击是什么?](https://github.com/Nightwishes/learning-Record/blob/master/browser/csrf.md)
   - 原理
   - 如何避免
 - [跨域](https://github.com/Nightwishes/learning-Record/blob/master/browser/cors.md)
   - 跨域是什么
   - 为什么有跨域
   - 解决跨域的办法
 - [浏览器加载CSS/JS/图片/音频等文件的过程/优先级/限制是什么样的?]()(待整理)
   - 涉及到可能优化的点
   - js的加载/执行是否会阻碍浏览器的渲染？
   - 中间涉及到那些缓存环节?
   - js是否会同时加载?是否会按加载顺序执行?
   - js的async/defer是什么?适用那些场景？
   - 如何突破浏览器的下载限制?
 - [cookie是什么]()(待整理)
   - 涉及到的优化的点？
   - cookie有那些属性,相关属性用途，限制?
   - 手写cookie?
   - 设置cookie的多种方式?

### 网络篇
- [TCP](https://github.com/Nightwishes/learning-Record/blob/master/network/TCP.md)
  - TCP连接为什么是三次握手,不是2次或4次？
  - 如何复用TCP连接？
  - TCP四次挥手流程是咋样的？为什么?
  - TCP 拥塞控制是什么？怎么工作的？TCP是如何保证传输正确的?
  - TCP和UDP的区别？
  - .一个 TCP 连接可以对应几个 HTTP 请求？
  - 一个 TCP 连接中 HTTP 请求发送可以一起发送么（比如一起发三个请求，再三个响应一起接收）？
- [http](https://github.com/Nightwishes/learning-Record/blob/master/network/HTTP.md)
  - HTTP 常见的请求头，用途？
  - HTTP报文结构体是什么结构？
  - HTTP 200、206、301、302、304、307、401、403、404、500状态码分别代表什么？用途？
  - 307和302区别是什么？
  - XHR 的各种data类型对应的content-type header是什么？
- [HTTP2,HTTPS](https://github.com/Nightwishes/learning-Record/blob/master/network/http2.md)
  - HTTPS加密算法是什么？
  - HTTPS建立连接的过程是什么？
  -中间人攻击是什么？如何避免？数字证书又是什么？作用？如何保证安全性的？
  - HTTP2和HTTP1.1的区别？
  - HTTP2中的流、数据帧、多路复用是什么？
  - 为什么有的时候刷新页面不需要重新建立 SSL 连接？

  ### JS基础篇
  - [es5中的原型链是什么?继承的实现方式有哪些?各个方式的优劣?子类如何向父类传递参数?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/prototype.md)
  - [es5及es6中类的区别是什么?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/class.md)
  - [javascript中,执行上下文及执行上下文栈是什么?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/context.md)
  - [javascript中,==和===的区别是什么？描述一下判断中间的比较过程?都有哪些隐式转换规则?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/equal.md)
  -[如何判断javascript中的this,为什么vue中的methods的this都是vm实例?如何改变this？](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/this.md)
  - [call,apply的区别?谁性能更好?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/call.md)
  - [手写bind函数?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/bind.md)
  - [ES6中的箭头函数有什么特性？和普通函数有什么区别?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/arrows.md)
  - [ES6浅拷贝和深拷贝的区别是什么？分别手写实现。es6中浅拷贝和深拷贝分别有哪些应用场景?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/clone.md)
  - [手写柯里化函数?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/curry.md)
  - [手写数组的reduce函数?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/reduce.md)
  - 0.1 + .2 == .3? 为什么?
    > 0.1的二进制格式是无线循环小数,为了节约内存舍弃精度,所以0.1并不是精确的
  - [说一说javascript中的事件循环(event-loop?event-loop为什么这么设计?和node中的事件循环有什么区别?](https://github.com/Nightwishes/learning-Record/blob/master/jsbase/eventLoop.md)

  - es6代码如何转换成es5的？
  > 利用babel 转换1. 将代码字符串转换成AST语法树2. 将AST语法树进行转换,ES6转为ES53. 将AST转换成代码字符串

  - [0,1,2].map(parseInt)的输出是什么?为什么?
  > [0, NAN, NAN] parsetInt(stirng, radix) radix范围为 2-36 第二项不在范围,第三项表示二进制的数但是二进制只有0,1
  - input如何处理中文输入?打拼音的时候,有时候其实不需要触发change,直到文字填进去才要
  - 分别实现DFS和BFS
  - 使用javascript Proxy实现简单的数据绑定
  - 观察者模式和订阅-发布模式有什么区别,各自使用于什么场景?
  - 啥是event loop,有哪些macrotask有哪些microtask?浏览器中的event loop和node中有啥不一样?
  - 啥是装饰器?啥是高阶函数?啥是高阶组件?
  - 什么是事件代理?是先冒泡还是先捕获?如何实现事件代理?Vue和React有没有事件代理?如果没有如何实现?
  - es6的class继承为何一定要写super()?
  - 手写一个发布订阅