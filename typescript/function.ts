// 函数类型 包括两部分： 参数类型和返回值类型

let myadd :(x: number, y: number) => number = function (x: number, y: number) : number {
  return x + y;
} 

// 可选参数和默认参数  传递一个函数的参数的个数必须与函数期望的个数一致 可选参数必须放在必须参数后面
let youname: (firstName: string, lastName ?: string) => string = function (first, last) : string {
  if (last) {
    return first + last;
  }
  return first;
}

console.log(youname('xjh'));
console.log(youname('xjh','123'));

// 剩余参数 把所有的参数放在一个变量里
function test (firstName: string, ...rest: string[]) : string {
  if (rest) {
    return firstName + rest.join('');
  }
  return firstName;
}
console.log(test('111', '333', '444'));
console.log(test('111', '222'));

// 函数重载,this

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number;} []) : number;
function pickCard(x: number) : {suit: string; card: number};

function pickCard(x) : any {
  if (typeof x === 'object') {
    return 
  }
}