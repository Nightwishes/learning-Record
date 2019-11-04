// promise是标准,为了解决回调地狱的问题
// 回调地狱,因为javascript是单线程，异步是基于回调函数的，例如在读取A的条件
// 下再去读取B。类似这样就有可能造成回调地狱

 //每一个promise都有三种可能的状态
 //  1. 成功态(furfilled)  2.失败态(rejected 3.挂起等待态(pendding)
 // 每个promise都只能从pendding转为成功与失败,不可逆。Promise类接受一个执行器(excutor)
 // excutor就是我们要完成的任务可能失败或者成功,excutor为立即执行的. 每个实例都应该有resolve,reject方法修改成成功或者失败态
 // 每个实例都应该有保存成功或者失败的回调函数的数组

const FURFLILLED = 'FURFILLED';
const REJECTED = 'REJECTED';
const PENDDING = 'PENDDING';
 


// 用来解析promise的方法,判断promise的方法-对象或者函数并且有then方法



let resolvePromise = (p2, x, resolve, reject) => {
  // 如果p2与x相等, 循环引用
  if (p2 === x) {
    return reject(new TypeError('循环引用'));
  }

  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    if (x.then && typeof x.then === 'function') {
      let then = x.then;
      then.call(x1, y => {resolve(y)}, r => {reject(r)});
    } else {
      resolve(x1);
    }
  } else {
    return resolve(x)
  }
}
 class Promise {
   constructor (excutor) {
     this.value = null;
     this.reason = null;
     this.status = PENDDING;
     this.onResolvedCallBack = [];
     this.onRejectedCallBack = [];
     let resolve = value => {
       // 当前实例不为pendding则结束
       if (this.status !== PENDDING) return;
       this.value = value;
       this.status = FURFLILLED;
       this.onResolvedCallBack.forEach(item => item(this.value));
     }
     let reject = reason => {
       this.reason = reason;
       this.status = REJECTED;
       this.onRejectedCallBack.forEach(item => item(this.reason));
     }
     // 执行器可能会出错
     try {
       excutor(resolve, reject);
     } catch (error) {
       reject(error);
     }
   }
   then (onResolved, onRejected) {
     // 如果onResolved为函数则不变,如果为常量继续传递
     onResolved = typeof onResolved === 'function' ? onResolved : val => val;
     onRejected = typeof onRejected === 'function' ? onRejected : err =>  err;
     let p2 = new Promise((resolve, reject) => {
       // 如果当前状态为成功
       if (this.status === FURFLILLED) {
         this.onResolvedCallBack.push(() => {
           // 判断执行完成功回调的值是什么？(Promise?常量?)
           // 此时p2还未new完 包裹在setTimeout里
           setTimeout(() => {
            let x = onResolved(this.value);
            resolvePromise(p2, x, resolve, reject); 
           });
         })
       }
       if (this.status === REJECTED) {
         this.onRejectedCallBack.push(() => {
           setTimeout(() => {
            let x  = onRejected(this.reason);
            resolvePromise(p2, x, resolve, reject);
           });
         })
       }
       if (this.status === PENDDING) {
         this.onRejectedCallBack.push(() => {
           let x = onRejected(this.reason);
           resolvePromise(p2, x, resolve, reject);
         })
         this.onResolvedCallBack.push(() => {
           let x = onResolved(this.value);
           resolvePromise(p2, x, resolve, reject);
         })
       }
     })
     return p2;
    }
 }

 
 // 每一个promise实例都有then方法,then方法返回一个promise,then方法有两个参数

// 1. promise实例成功的回调, 2.promise失败的回调

let fs = require('fs');
let p1 = new Promise((resolve, reject) => {
  fs.readFile('../README.md', 'utf8', (err, data) => {
    if (!err) resolve(data);
    reject(err);
  })
})
p1.then(data => {
  console.log(data);
  return 77777777777;
}).then(data => {
  setTimeout(() => {
    console.log(data);
  }, 1000);
})