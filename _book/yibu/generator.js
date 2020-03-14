                      // iterator-遍历器

// iterator是一种机制,一种让不同数据结构提供相同的遍历机制,实现iterator接口
// fo...of...遍历

// 可迭代对象有一个next方法返回固定格式{value: any, done: Boolean};
let index= 0;
let obj1 = {
  0: 'wo',
  1: 'ai',
  2: 'zhw',
  length: 3,
  next: () => {
    if (index === obj1.length) return '已迭代完';
    ++index;
    console.log(index);
    
    return obj1.length > index ? {value: obj1[`${index - 1}`], done: false} : { value: obj1[`${index - 1}`], done: true}
  }
}

console.log(obj1.next());
console.log(obj1.next());
console.log(obj1.next());
console.log(obj1.next());
// 1
// { value: 'wo', done: false }
// 2
// { value: 'ai', done: false }
// 3
// { value: 'zhw', done: true }
// 已迭代完


// 原生默认可迭代对象 
// Array, Map, Set, String, TypeArray, NodeList, arguments

// 对于类数组对象可以将[Symbol.iterator]指向Array.prototype[Symbol.iterator]
let obj = {
  0: 'wo',
  1: 'ai',
  2: 'zhw',
  length: 1, // 没有length打印不出来,length不同打印的也不同
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

// console.log([...obj]);





                        //  generator

// generator是es6一种异步编程解决方案
// generator是一个状态机内部封装了多个状态
// generator返回一个可迭代对象,依次访问generator的状态

let fs = require('fs').promises;
let p1 = fs.readFile('./test1.txt', 'utf-8');
let p2 = fs.readFile('./test2.txt', 'utf-8');
let p3 = fs.readFile('./test3.txt', 'utf-8');
function *g () {
  let x = yield p1;
  x.then(data => console.log(data));
  let y = yield p2;
  y.then(y => console.log(y));
  let z = yield p3;
  return z.then(z => console.log(z))
}
let it = g();


// generator分步执行,执行到yield停止,上面的x接收到的应该是下一个next的参数v2
// y应该接受的是v3那个next的参数
// 可以看出第一个next的参数没有任何意义
// 可以看出可以根据promise + generator模拟 async + await
let v1 = it.next();
let v2 = it.next(v1.value);
let v3 = it.next(v2.value);
let v4 = it.next(v3.value);

// console.log(v3);

// console.log(v4);

// 可以使用co库配合generator
