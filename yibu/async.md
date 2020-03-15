 async就是generator的语法糖

``` javascript
let fs = require('fs').promises;

let p1 = fs.readFile('./test1.txt', 'utf-8');
let p2 = fs.readFile('./test2.txt', 'utf-8');
let p3 = fs.readFile('./test3.txt', 'utf-8');
```

 将*替换成async,将yiled替换成await
``` js
function* g() {
  let x = yield p1;
  // x.then(data => console.log(data));
  let y = yield p2;
  // y.then(y => console.log(y));
  let z = yield p3;
  return x + y + z;
}
let it = g();
```


 generator分步执行,执行到yield停止,上面的x接收到的应该是下一个next的参数v2

 y应该接受的是v3那个next的参数

可以看出第一个next的参数没有任何意义

可以看出可以根据promise + generator模拟 async + await

``` js
let v1 = it.next();
let v2 = it.next(v1.value);
let v3 = it.next(v2.value);
let v4 = it.next(v3.value);
```


async函数返回值是promise,可以看作多个异步操作包装成一个promise

使用递归取每一个next返回值的done来判断是否走完,走完resolve(value)

没走完的话就继续递归将value作为值传入next中

generator函数需要一个执行器 co库
``` js
// 模拟执行器
function run (g) {
 // 返回promise
 return new Promise((resolve, reject) => {
   let it = g();
   let iterator = null;
   start();
   function start(value) {
     iterator = it.next(value);
     if (iterator.done) {
      return resolve(iterator.value);
     } else {
      iterator.value.then(data => start(data));
     }
   }
 }) 
}

let p = run(g);
p.then(data => console.log(data));