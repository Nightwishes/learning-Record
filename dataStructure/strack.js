// 后进先出  函数调用栈 执行上下文
class Strack {
  constructor () {
    this.arr = [];
  }
  in (element) {
    this.arr.push(element);
  }
  out () {
    this.arr.pop();
  }
}
let s1 = new Strack();
s1.in(1);
s1.in(2);
s1.in('hi');
console.log(s1); // Strack { arr: [ 1, 2, 'hi' ] }
s1.out();
console.log(s1); // Strack { arr: [ 1, 2 ] }
