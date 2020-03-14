## 手写bind函数?

> 传入对象和函数,返回一个绑定了this的函数并且不执行

```javascript
var a = 'hello';
function bind (obj, fuc) {
  return (...args) => {
    obj.fuc = fuc;
    obj.fuc(...args);
  }
}

function say () {
  console.log(this.a);
}
let obj1 = {
  a: 'hi'
}
let say1 = bind(obj1, say);

say(); // hello
say1(); // hi
```