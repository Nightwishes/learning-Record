## 1.什么是执行上下文?

当javascript代码时候所处的环境分为三种

1. 全局上下文
2. 函数上下文
3. eval上下文
> 全局上下文对应全局作用域,函数上下文对应局部作用域

## 什么是执行上下文栈?

因为javascript解释器是单线程的,所以只能串行处理事件,行为。其他事件行为只能处在执行上下文栈中等待被处理。

栈->先进后出

所以应该 全局上下文->函数上下文->当前函数上下文

```javascript
function a () {
  b ();
  console.log('a');
}
function b () {
  c();
  console.log('b');
}
function c () {
  console.log('c');
}

a();
console.log('全局');
// c
// b
// a
// 全局
```
可以看到全局的最后出栈.c是最后进栈的但是先出了