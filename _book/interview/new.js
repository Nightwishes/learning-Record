
// 接受两个参数 1.fn和2.参数

function _new (fn, ...args) {
  //1. 使用Object.create(obj)创建一个把__proto__指向fn.prototype的新对象
  let newObj = Object.create(fn.prototype);
  //2. 执行构造函数并且传递参数 并且把this指向newObj
  let ret = fn.apply(newObj, ...args);
  return ret instanceof Object ? ret : newObj;
}