ES6浅拷贝和深拷贝的区别是什么？分别手写实现。es6中浅拷贝和深拷贝分别有哪些应用场景?

浅拷贝只拷贝一层对象不会拷贝,深拷贝对象也会接着拷贝

浅拷贝: Object.assign();


深拷贝: 
 
 1. JSON.stringfity();
 2. 递归拷贝
``` javascript
let deepClone = (obj) => {
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== 'object') return obj;
  // 是个对象了
  let newObj = obj.constructor();
  for (let key in obj) {
    if (typeof obj[key] !== 'object') {
       newObj[key] = obj[key];
    } else {
       newObj[key] = deepClone(obj[key]); 
    }
  }
  return newObj;
}
let obj = {
  key1: '1',
  key2: {
    smile: 'everyDay'
  }
}
let obj2 = deepClone(obj);
obj.key1 = '2'; obj.key2.smile = 'hhh';
console.log(obj2);
console.log(obj);
```