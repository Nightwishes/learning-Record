原理就是使用一个函数包裹,传入Promise.race竞争

 中断一个promise(p1)我们可以创建一个promise(p2)使用promise.race来与p1竞争

 调用p2的reject方法使得race进入失败态从而达到中断
```js
let stop = (p1) => {
  let fail = null;
  let p2 = new Promise((resolve, reject) => {
    fail = reject;
  })
  let p = Promise.race([p1, p2]);
  p.stop = fail;
  return p;
}

let test = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功！');
  }, 4000);
})

let p = stop(test);

// p.then(data => console.log(data)); // 成功

setTimeout(() => {
  p.stop();
}, 3000);

p.then(data => console.log(data)); // undefined
```