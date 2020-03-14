// 队列先进先出   事件队列 Event-loop

class Queue {
  constructor () {
    this.size = 0;
    this.queue = [];
  }
  // 添加操作
  put (element) {
    this.queue.push(element);
    ++this.size;
  }
  // 删除操作
  remove () {
    this.queue.shift();
    --this.size;
  }
  getSize () {
    return this.size;
  }
}

let q1 = new Queue();

q1.put(1);
q1.put(3);
q1.put(4);
console.log(q1);