###  1.TCP连接为什么是三次握手,不是2次或4次？

因为双方都要收到对方的同步信号,初始序列号以确定数据可靠.

- tcp是可靠传输控制协议,既要保证数据可靠传输。又要提高传输的效率。而三次刚好能满足以上两方面的需求
- tcp的可靠连接是靠seq(sequence  number 序列号)来达成的
- tcp连接发送的每一个包都有一个sequence number。而因为每个包都有sequence number。所以都能被确认送到这些包
- sequence number 都是累加的所以对于X序列号前面的包都是可以确定的
- 因为sequence number不是全局的时钟所以不能知道最后一个包的sequence number.例如，连接断开再重输的时候怎么知道这个包是这次的连接？还是上次的连接？又或者是上上次的连接?所以双方需要沟通彼此的syn(同步信号)来确定彼此是可靠的

四次握手过程:

 - ISN(初始序列号)-一个新连接建立时，初始序列号生成(32位)
 - seq(4位 序列号标志数据的顺序)
 - ack(4位 确认号)
 - ACK(确认 1位 ACK=1确认号有效,ACK=0确认号无效) 
 - SYN(同步,连接建立的同步信号,握手完成后被置为0)
 - FIN(终止,FIN=1表示数据发送完毕,释放运输连接)

1. A发送同步信号SYN + A‘s initial sequence number  
2. B确认收到A的同步信号,并记录A的ISN到本地,命名B's ACK suquence number
3. B发送同步信号SYN + B's initial sequence number
4. A确认收到B的同步信号，并记录B的ISN到本地,命名A’s ACK suquence number

> 2,3可以合并所以是三次,如果A向B发送的SYN中途丢失,A会周期性超时重传直到接受到B的ACK为止
！
### 2.如何复用tcp连接?

tcp连接复用是负载均衡设备的特有。一个客户端连接时,tcp连接采用三次握手四次挥手,负载均衡设备在发送完FIN ACK后并不断开与服务器(server)的TCP连接,在下一个客户端的TCP连接时,负载均衡设备直接使用这条连接服务器的TCP连接
与HTTP连接复用不同的是,HTTP连接复用是一个客户端的多个http请求通过一个TCP连接处理。
TCP连接复用是,多个客户端的HTTP请求连接到一个服务器

### 3.TCP四次挥手的过程是咋样的?

1. A(客服端)发送终止信号FIN+seq到服务端 客服端进入FIN_WAIT-1
2. B(服务端)发送ACK+seq到A,并且进入到CLOSE_WAIT(关闭等待),此时处于半关闭状态,客服端没有数据发送,服务端若发送数据,客服端接受
3. B(服务端)发送终止信号FIN + seq到客服端,客服端进入FIN_WAIT-2,服务器进入LAST-ACK(最后确认)状态
4. A(客服端)收到B的连接释放请求时,发出确认ACK=1 进入TIME_WAIT,此时TCP还未关闭,经过2MSL(最长报文段寿命时间)后确认无数据,客户端撤离TCP
5. 服务端收到客户端的确认,进入CLOSED状态.立即撤离TCP连接

### 4.TCP的拥塞控制？怎么样工作的?TCP是如何保证传输正确的?
[看不懂 = =!](https://blog.csdn.net/m0_37962600/article/details/79993310)

### 5.TCP与UDP的区别?
1. tcp面向连接(稳定)udp无连接
2. 对系统的开销。 udp信息包8个字节,tcp20个字节信息包
3. tcp保证数据正确性,udp可能丢包
4. tcp保证数据的顺序,udp不保证

### 6.一个tcp连接可以对应几个http请求?
在 http1.0中一次http请求后就关闭了tcp连接,这样每次重新请求都要重新tcp连接.
Connection: keep-alive.请求后不断开tcp连接这样达到http请求复用。SSL的开销可以避免

在http1.1中, Connection头写进标准,默认开启持久连接，除非请求中写明Connection: close。所以浏览器默认不会断开连接

### 7.一个tcp连接中，http请求可以多个一起发送一起接受吗?

单个tcp连接在同一时刻只能处理一个请求
<br>
任意两个http从开始到结束的时间在一个TCP里不能重叠
<br>
http1.1规范Pipelining来试图解决这个问题,浏览器中默认关闭

<br>
<br>
参考:

[为什么tcp握手是三次?](https://www.zhihu.com/question/24853633)

[tcp的三次握手与四次挥手](https://blog.csdn.net/qq_38950316/article/details/81087809)

[tcp与udp的区别!详细!](https://zhuanlan.zhihu.com/p/24860273)
