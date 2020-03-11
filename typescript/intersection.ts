// 高级类型 联合类型和交叉类型

// 交叉类型 多个类型合并为一个类型

function extend <T, U>(first: T, second: U) : T & U {
  let result = <T & U> {};
  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}

class People <T>{
  public name;
  constructor (name: T) {
    this.name = name;
  }
}
interface student {
  homeWork(): void;
}

class Xiaoxue implements student{
  homeWork () {
    console.log('55555');
  }
}
let e1 = extend(new People<string>('hhh'), new Xiaoxue());
// console.log(e1.name)
// e1.homeWork();

// 联合类型 -- 众多类型的其中一种

function numberOrStr (value: number, val: string | number) : string | number {
  if (typeof val === 'number') {
    return value + val;
  }
  if (typeof val === 'string') {
    return  value + val
  }
}
console.log(numberOrStr(3, 5));
// 编译成功但是运行出错, 所以不能用any 要用联合
// console.log(numberOrStr(3, true));


// 如果一个值为联合类型，我们只能访问此联合类型里的共同成员

interface Bird {
  layEgg () : void;
  fly () : void;
}

interface BianFu {
  fly () : void;
  run () : void;
}

function getSmallPet() : Bird | BianFu {
  return 
}

let g1 = getSmallPet();
// g1.fly();
// g1.layEgg() // error

// 类型保护与区分类型


// 1. 用户自定义的类型保护 定义一个函数 返回值是一个 类型谓语
function isFish (arg: BianFu | Bird) : arg is BianFu {
  return (<BianFu>arg).run !== undefined;
}

// arg is BianFu就是类型谓词 parameterName is Type 这种形式 parameterName 必须是来自当前函数签名里的一个参数名


// 2.typeof 类型保护 typescript将typeof识别为一个类型保护 两种形式 typeof v === 'typeofname'  typeof v !== 'typeofname' 
// 必须是string number boolean symbol

// 3. instanceof 类型保护


// 默认情况下null和undefined可以赋值给任何类型 --strictNullChecks 当你申明一个变量时，它不会自动地包含null或undefine'/
console.log(sn);

// 使用了--stirctNullChecks 可选参数与可选属性会自动加上|undefined
