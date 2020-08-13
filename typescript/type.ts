// 元组 表示一个已知元素数量和类型的数组,必须严格跟事先声明的类型一致
let x: [string, number];
// x = ['hello', 3];

// x.push(3);

// 数字枚举

// 普通对象，枚举,数组，元组通通都是object类型
enum Direction {
  Up,
  DOwn,
  Left,
  Right
}
declare let b: Direction;

b = Direction.Up;

b = Direction.Left;

enum Animal1 {
  Dog
}
// b = Animal1.Dog  Error

interface User {
  name?: string,
  age?: number,
  age1: number,
  [propName:string]: any,
  readonly isMele?: boolean,
  say?: (words: string) => string
}
function calculateAreas(user: User): {retUser: number} {
  let square = 100;
  if (user.name) {
    square = user.age1 * user.age1;
  }
  return {retUser: square};
}
let mySquare = calculateAreas({widdth: 5, age1: 3});

interface student1 {
  name: string,
  age ?: number,
  readonly isMale: boolean,
  phone: Phone
}
interface Phone {
  [propName: string]: string
}

let s1 : student1 = {
  name: 'xjh',
  age: 24,
  isMale: false,
  phone: {
    qq: '1601124837'
  }
}
// unknown与any的不同之处在于，虽然它们都可以是任何类型,但是unknown类型被确定是某个类型之前,它不能被进行任何操作比如实例化,getter，setter，函数执行等

const add3 = (a:number, b: string) => a + b;

function swap<T, U>(tuple: [T, U]) : [U,T] {
  return [tuple[1], tuple[0]];
}
function getLength<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

class Stack <T> {
  public arr: T[] = [];
  public push(item: T) {
    this.arr.push(item);
  }
  public pop() {
    this.arr.pop();
  }
}

let cc = new Stack();
cc.push(1);
cc.push('23');
console.log(cc.arr);
