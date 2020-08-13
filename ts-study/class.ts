// 1. 抽象类 作为其他派生类的基类， 不同于接口 抽象类可以包含成员的实现细节

abstract class Animal {
  abstract makeSound() : void;
  move() : string {
    console.log('anyOne move...');
    return 'moved';
  }
}

class Mouse extends Animal {
  makeSound(): void {
    console.log('zizizi');
  }
}

let m1 = new Mouse();
m1.makeSound();
m1.move();

// 2.访问权限 TypeScript中有三类 public,private,protected

const add:(a: number, b: number) => number = (a: number, b: number) => a+b;
const add1 =(a: number, b?: number)=> a+(b ? b : 0) // 参数b有undefined和0两种
const add2 = (a: number, b = 10) => a+b;
const addRuduce = (a: number, b: number[]) => b.reduce((a, c) => a + c, a);
// console.log(addRuduce(1, [2, 3, 4, 5, 6]));

function swap<T,U>(a: T, b: U) : {b:U, a: T} {
  return {b, a};
};

function getArrayLength<T>(arg: Array<T>) {
    console.log(arg.length);
    return arg;
}
// 泛型接口
interface ReturnItem<T> {
  a: T,
  b: T
}
class Strack<T> {
  private arr: T[]= [];
  public push (item: T, ...args : T[]) {
    this.arr.push(item);
  }
  public pop() {
    this.arr.pop();
  }
}
let strack1 = new Strack<number>();
strack1.push(1, 2, 3);
