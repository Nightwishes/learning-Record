// 用户可以以自己的数据类型来使用组件，因此我们需要一种方法使返回值的类型与传入参数的类型是相同的 ---- 类型变量 特殊的变量只用来表示类型而不是值
interface  GenericIdentity<T> {
  (arg: T) : T;
}
function identity<T>(arg: T) : T {
  return arg;
}
let numIdent : GenericIdentity<number> = identity;
let strIdent : GenericIdentity<string> = identity;

console.log(numIdent(3));
console.log(strIdent('234'))

// 类有两部分 实例部分与静态部分  静态部分不可以使用泛型类 泛型类

// 泛型类
class GenericNumber <T> {
  zeroValue: T;
  constructor (value: T) {
    this.zeroValue = value;
  }
  add: (x: T, y: T) => T
}
let g1 = new GenericNumber<string>('23');
console.log(g1.zeroValue);
g1.add = function (x, y) {
  return x + y;
}
console.log(g1.add('123', '345'));

interface addType {
  first: number,
  last?: string
}
class Utility {
  reverse<T>(items: T[]) : T[] {
    const toreturn = [];
    for (let i = 0; i < items.length; i++) {
      toreturn.push(items[i]);
    }
    return toreturn;
  }

}
let u1 = new Utility();
console.log(u1.reverse([1,2,3]));


// 泛型约束

interface LengthWise {
  length: number;
}
function loggingIden<T extends LengthWise> (arg: T) : T{
  console.log(arg.length);
  return arg;
}

