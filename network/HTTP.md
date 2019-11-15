http是一种能够获取如HTML这样的网络资源的protocol(通讯协议)是一种clent-server协议<br>
http本质是无状态的可以使用cookies创建有状态的会话
### 1.http常见的请求头，用途? [mdn](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers)
  1. 用来说明浏览器,服务器或者报文主题的一些消息
  2. 每个请求都是由字段、[空格]、值组成
  3. 每个请求头都在结束的时候有CRLF

![](https://upload-images.jianshu.io/upload_images/310976-40f0e13165a53469.png?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp)
### 2.http报文结构是什么结构？
  http有两种报文
  1. 请求报文
  - 请求行 - 方法、[空格]、URL、[空格]、http版本
  - 请求首部行
  - 请求体
  2. 响应报文
  - 响应行 - HTTP版本、[空格]、状态码
  - 响应首部行
  - 响应体

  >1. HTTP有请求报文与响应报文两种 2. 两种报文都由三部分组成 开始行,首部行,内容主体 3. 每个首部行之间有CRLF 4.主体与最后一个首部行之间有CRLF
-----
### 3.HTTP 200、206、301、302、304、307、401、403、404、500状态码分别代表什么?用途?
 - 200 请求成功,成功的含义取决于htp方法
 - 206(Partial Content) 服务器成功处理部分get 
 > 实现断点续传将一个大文档分解为多个下载段。该请求必须包含Range头信息来指定客服端希望得到的内容范围
- 301(Moved Permanently) 该资源永久性移动新位置
- 302(Found) 临时重定向
> 目标资源临时移动到另一个URL上。由于重定向是临时发生所以，客户端之后的请求还应该使用原本的URL
- 304(Not Modified) 文档的内容并未改变
> 禁止包含消息主体 以消息头后的第一个空格结束
- 307 与302实际上是一致的
> 唯一的区别是307状态码不允许浏览器将原本为POST的请求重定向到GET请求上
- 401(Unauthorized) 当前请求需要用户验证
- 403(Forbidden) 服务器已经理解请求,但是拒绝执行
> 可以用实体描述拒绝的理由
- 404(Not Found) 请求资源未在服务器上发现 
- 405(Method Not Allowed) 请求行的方法不能用于请求的资源
- 500(Internet Server Error) 服务器遇到不知道怎么处理的问题
----
### 4.307和302区别是什么?
唯一的区别是307状态码不允许浏览器将原本为POST的请求重定向到GET请求上
### XHR的各种data类型对应的content-type header是什么?
1. Content-Type的默认值与具体发送的数据类型有关
2. setRequestHeader 必须在open()方法之后send()方法之前调用
3.setRequestHeader可以调用多次不会采用覆盖的方式而是采用append的方式
4. xhr.overrideMineType()是xhr.level1就有的方法,兼容性良好,用来重写response的Content-type

- application/x-www-form-urlencoded
> 最常见的Post提交数据的方式,浏览器的原生form表单如果不设置enctype属性则会以此方式提交
- multipart/form-data
> 使用表单上传文件时
- application/json
> 告诉服务器消息主体是JSON字符串

----
### http的方法?
1. GET 获取资源 1.0 1.1
2. POST传输实体主体 1.0 1.1
3. PUT 传输文件 1.0 1.1
4. HEAD 获得报文首部 1.0 1.1
5. DELETE 删除资源 1.0   1.1
6. OPTIONS 询问支持的方法 1.1
7. TRACE 追踪路径 1.1
8. CONNECT 由于代理服务器 1.1
----

### xhr的readyState的各种值？

  | 值| 状态| 描述 |
  | --- | :---: | :---: |
  | 0 | UNSENT(初始状态未打开)| xhr对象被构造还未调用open方法|
  | 1| OPENED(已打开,未发送) | open被调用,send还未调用 |
  |2| HEADERS_RECEIVED| send方法已发送,响应头响应状态已返回|
  |3| LOADING(正在下载响应体)|xhr.responese可能已有数据 |
  |4|DONE(整个数据传输过程结束)|过程结束,无论成功或者失败|
<br>
<em>参考</em>

[http报文结构](https://www.jianshu.com/p/a2c4ede32d11)