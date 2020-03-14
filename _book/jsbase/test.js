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