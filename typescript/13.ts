// 交叉类型 从两个对象中创建一个新对象
interface  IAnyObj {
  [prop: string]: any
}

function minxins<T extends IAnyObj, U extends IAnyObj>(first: T, second: U) : T & U {
  let contail = <T & U>{};
  for (let i in first) {
    (<T>contail)[i] = first[i]; 
  }
  for (let id in second) {
    if (!contail.hasOwnProperty(id)) {
      (<U>contail)[id] = second[id];
    }
  }
  return contail;
}

type strings = string | string[];

function formatString(arg: strings) : string {
  if (typeof arg === 'string') {
    return arg + 'string'
  } else {
    return arg.join(',');
  }
}

