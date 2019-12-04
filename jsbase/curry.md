函数柯里化

是指一个函数(curry)接受了一个函数A作为参数 返回一个函数B。函数B能够继续处理A的剩余参数。

> 利用fn.length原函数的形参长度和收集的实参数组进行对比 判断返回继续收集参数的函数还是执行返回结果

```javascript

function curry (fn, _args = []) {
  let len = fn.length;
  return (...args) => {
    _args = _args.concat(args);
    if (len > _args.length) {
      return curry(fn, _args);
    } else {
      return fn.apply(null, [..._args]);
    }
  }
}

let add = (a, b, c, d, e) => {
  return a + b + c + d + e;
}

let addCurry = curry(add);

console.log(addCurry(1)(2)(3, 4, 5));
```
