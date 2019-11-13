###  1.TCP连接为什么是三次握手,不是2次或4次？

- tcp是可靠传输控制协议,既要保证数据可靠传输。又要提高传输的效率。而三次刚好能满足以上两方面的需求
- tcp的可靠连接是靠seq(sequence  number 序列号)来达成的
- tcp连接发送的每一个包都有一个sequence number。而因为每个包都有sequence number。所以都能被确认送到这些包
- sequence number 都是累加的所以对于X序列号前面的包都是可以确定的
- 因为sequence number不是全局的时钟所以不能知道最后一个包的sequence number.例如，连接断开再重输的时候怎么知道这个包是这次的连接？还是上次的连接？又或者是上上次的连接?所以双方需要沟通彼此的syn(同步信号)来确定彼此是可靠的

四次握手过程:

 ISN(初始序列号)-一个新连接建立时，初始序列号生成(32位)

1. A发送同步信号SYN + A‘s initial sequence number  
2. B确认收到A的同步信号,并记录A的ISN到本地,命名B's ACK suquence number
3. B发送同步信号SYN + B's initial sequence number
4. A确认收到B的同步信号，并记录B的ISN到本地,命名A’s ACK suquence number

2,3可以合并所以是三次,如果A向B发送的SYN中途丢失,A会周期性超时重传直到接受到B的ACK为止

### 2.如何复用tcp连接?

tcp连接复用是负载均衡设备的特有。一个客户端连接时,tcp连接采用三次握手四次挥手,负载均衡设备在发送完FIN ACK后并不断开与服务器(server)的TCP连接,在下一个客户端的TCP连接时,负载均衡设备直接使用这条连接服务器的TCP连接
与HTTP连接复用不同的是,HTTP连接复用是一个客户端的多个http请求通过一个TCP连接处理。
TCP连接复用是,多个客户端的HTTP请求连接到一个服务器

### 3.TCP四次挥手的过程是咋样的?
