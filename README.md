## 路漫漫其修远兮，吾将上下而求索(●'◡'●)

### 数据结构

- [队列](https://github.com/Nightwishes/learning-Record/blob/master/dataStructure/queue.js)
- [栈](https://github.com/Nightwishes/learning-Record/blob/master/dataStructure/strack.js)
- [链表](https://github.com/Nightwishes/learning-Record/blob/master/dataStructure/list.js)
- [集合](https://github.com/Nightwishes/learning-Record/blob/master/dataStructure/set.js)
- [二叉树](https://github.com/Nightwishes/learning-Record/blob/master/dataStructure/binaryTree.js)

### Promise,generator异步相关
- [promise的实现,promise解决什么问题,promise的问题](https://github.com/Nightwishes/learning-Record/blob/master/yibu/promise.js)
- [promise.all,promise.race](https://github.com/Nightwishes/learning-Record/blob/master/yibu/allRace.js)
- [如何中断一个promise](https://github.com/Nightwishes/learning-Record/blob/master/yibu/break.js)
- [generator,iterator](https://github.com/Nightwishes/learning-Record/blob/master/yibu/generator.js)
- [利用promise+generator模拟async+await](https://github.com/Nightwishes/learning-Record/blob/master/yibu/async.js)
### 面试集合

  - [实现一个new](https://github.com/Nightwishes/learning-Record/blob/master/interview/new.js)
 - [深度优先与广度优先](https://github.com/Nightwishes/learning-Record/blob/master/interview/dTraversal.js)


 ### 浏览器
 - [从输入URL到浏览器显示页面，中间经历过什么过程?](https://github.com/Nightwishes/learning-Record/blob/master/browser/smile.png)
 - [强缓存与协商缓存](https://github.com/Nightwishes/learning-Record/blob/master/browser/1.md)
 - [xss攻击是什么？]() (待整理)
    - 原理
    - 如何避免
 - [CSRF攻击是什么?]()(待整理)
   - 原理
   - 如何避免
 - [跨域]()(待整理)
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