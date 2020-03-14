说一说javascript中的事件循环(event-loop?event-loop为什么这么设计?和node中的事件循环有什么区别?

event-loop是一个执行模式,不同的地方有不同的实现浏览器与node



- 浏览器的event-loop

执行流程:

1. 全局script代码进入
2. 遇到不同的任务源 分别添加到不同的任务队列中(setTimeout, setInterval,http异步(ajax))
3. 清空此次宏任务中的所有微任务
4. 如果执行微任务的过程中又有微任务则添加至队尾,也会在这个周期中被调用
5. 取出下一个宏任务继续类似处理
6. 直至宏任务队列被清空

- nodejs的event-loop

- timers阶段：这个阶段执行setTimeout和setInterval预定的callback
- I/O callback阶段：执行除了close事件的callbacks、被timers设定的callbacks、- - - setImmediate()
- poll阶段：获取新的I/O事件，适当的条件下node将阻塞在这里
- check阶段：执行setImmediate()设定的callbacks
- close callbacks阶段：执行socket.on('close', ....)这些callbacks