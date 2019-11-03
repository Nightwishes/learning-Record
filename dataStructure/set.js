// 集合 key与value相同且没有相同的项 
// set没有相同的项

class Set1 {
  constructor (arr) {
    this.set = {};
    if (!arr) return;
    arr.forEach(item => {
      this.add(item);
    })
    return this.set;
  }
  add (element) {
    if (!this.set.hasOwnProperty(element)) {
      this.set[element] = element;
    }
  }
  has (element) {
    return this.set.hasOwnProperty(element);
  }
}

let s1 = new Set1();
s1.add(1);
s1.add(3);
console.log(s1);
console.log(s1.has(3));

let s2 = new Set([1,2,3,3,4,4,5]);
let s3 = new Set([2,3,4,4,6,7,6]);

// ...运算符需要实现iterator

// 交集

let s4 = [...s2].filter(item => s3.has(item));

console.log(s4);

// 差集

let s5 = [...s2].filter(item => !s3.has(item));

console.log(s5);

// 并集

let s6 =  new Set([...s2, ...s3]);

console.log(s6);