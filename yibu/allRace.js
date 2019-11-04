
                         //Promise.all


// Promise.all 方法用于将多个promise对象(p1,p2,p3)包装成一个新的promise对象(p)
// 接受一个数组(具有iterator)如果不为promise则调用Promise.resolve方法转为promise实例


// p的状态由p1,p2,p3共同决定。如果都为furfilled则p为furfilled
// 如果其中一个为rejected则p为rejected第一个被rejected的值传给p

let fs = require('fs').promises;
let p1 = fs.readFile('./test1.txt', 'utf-8');
let p2 = fs.readFile('./test2.txt', 'utf-8');
let p3 = fs.readFile('./test3.txt', 'utf-8');

// let p = Promise.all([p1, 4, p2, p3]);

// p.then(data => console.log(data));

const isPromise = (test) => {
  if (typeof test === 'function' || (typeof test === 'object' && test !== null)) {
    if (typeof test.then === 'function') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

Promise.all = function (promises) {
  // promise.all返回一个promise 按顺序返回resolve的数组
  return new Promise((resolve, reject) => {
    let arr = [];
    let index = 0;
    // 循环promises数组
    for (let i = 0; i < promises.length; i++) {
      let current = promises[i];
      // 判断current是否是promise
      let pushed = (i, data) => {
        // 看数组的数据是否全部收集完全
        if (++index !== promises.length) {
          arr[i] = data;
        } else {
          resolve(arr);
        }
      }
      if (current) {
        if (isPromise(current)) {
          current.then(data => {
            pushed(i, data);
          }, err => reject(err));
        } else {
          pushed(i, current);
        }
      }
    }
  })
}

let p = Promise.all([p1,4, p2, p3, 5]);
// p.then(data => console.log(data));


//                    Promise.race

// race竞争关系 -- 谁先完成使用谁

let p4 = fs.readFile('./test1.txt', 'utf-8');
let p5 = fs.readFile('./test2.txt', 'utf-8');

// 因为promise的状态只能转换一次 所以谁先调用了resolve或者reject后则不可变了
Promise.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i].then(resolve, reject)
    }
  })
}
let p6 = Promise.race([p4, p5]);

p6.then(data => console.log(data));