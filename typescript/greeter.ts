function Greeter(smile:string) {
  return "hello" + smile
}

console.log(Greeter('yinghua'));

// 在构造函数的参数上使用public等同创建了同名的成员变量

interface Person {
  firstName: string,
  lastName:  string,
}

// tuple types 
let smile : [string, boolean] = ['xjh', false];

// enum 
enum Color { XU = 1, JIAN = 3, HOME}

let colorName : string = Color[4];

console.log(colorName); // HOME
console.log(Color[2]); //undefined
let someValue : any = "there is a string";

let strLength: number = (someValue as string).length;
console.log(strLength);

// 接口不一定要全部都实现，可选属性在名字定义的后面加一个？
interface SquareConfig {
  color ?: string,
  width ?: number
}
function createSquare(config: SquareConfig): {color:string;  area: number} {
  let newSquare = {color:"white", area: 100};
  if (config.color){
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width;
  }
  return newSquare;
}
// readOnly 只能在对象刚刚创建的时候修改值，

interface Point {
  readonly x : number,
  readonly y : number,
  readonly z ? : number;
}
let p1 : Point = {x: 10, y: 100};
p1.x = 11; // 
console.log(p1);

// 实现接口
interface ClockInterface {
  currentTime: Date,
  setDate?(d: Date)
}
class Clock implements ClockInterface {
  currentTime: Date;
  setDate(d: Date) {
    this.currentTime = d;
  }
}

// 传递参数个数必须与函数期望的一致，参数名旁边使用？实现可选参数的功能，可选参数必须跟在必选参数后面

let add: (x: number, y?: number) => number = function (x: number, y: number) {
  return x + y;
}
console.log(add(1)); // NAN
console.log(add(1,2,3)); // 参数超过
console.log(add(1,2)); // correct


// 剩余参数--把所有参数放在一个变量里
let add1: (x: number, y: number, ...rest: number []) => number = function (x:number, y: number, ...rest: number[]) {
  let sum = 0;
  for (let i = 0; i < rest.length; i++) {
    sum += rest[i];
  }
  sum = sum + x + y;
  return sum;
}
console.log(add1(1,2,3,4,5));

// 指定了this类型后,调用方法必须在Handle实例上调用
class Handler {
  info: object;
  onClicked(this: Handler, e: Event) {
    this.info = e.target;
  }
}
let h = new Handler();

// 使用一种方法使返回值的类型与传入参数的类型是相同的 类型变量 泛型函数
function identity<T>(arg: T) : T {
  console.log(arg); // 任意类型,数字没有length
  return arg;
}
// 
function loggingIdentity<T>(arg: T[]) : T[]{
  return 
}

// 泛型类
class GenericNumber<T>{
  zoro: T;
  add: (x: T, y: T) => T
}
let stringGen = new GenericNumber<string>();
stringGen.zoro = "11";
console.log(stringGen);

let numberGen = new GenericNumber<number>();
numberGen.zoro = 1;
// numberGen.add(1,2);

// 泛型约束


// 枚举

enum Direction {
  UP,
  Down,
  LEFT,
  DOWN
}

console.log(Direction.DOWN);
console.log(Direction.LEFT);

enum E1 {
  X, Y, Z
}
enum E2 {
  A = 1024,
  B,
  C
}
console.log(E1.X,E1.Y,E2.B);


// JavaScript的数组上已有reverse方法

interface Arrary<T> {
  reverse(): T[];
}
let arr4 = [1, '2', 3];
let arr5 = arr4.reverse();
arr5[0] = '1';
console.log(arr5);

type strOrNum = string | number;
let  sample: strOrNum;
sample = 123;
sample = '123';

interface Crazy {
  new (): {
    hello: number
  }
}
class CrazyClass implements Crazy {
  constructor () {
    return {
      hello: 123
    }
  }
}


window.onmousedown = function (mouseEvent) {
  console.log(mouseEvent.button);
}
