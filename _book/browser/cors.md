1. 跨域是什么？
2. 为什么有跨域?
3. 解决跨域的办法?


 当端口(port), 协议,还有Host不同的时候就会有跨域

 因为浏览器对文档有同源策略限制,外部的js不能直接操作dom。如果没有同源策略容易受到xss攻击还有csrf攻击。

 使用jsonp,cors,postMessage,websocket