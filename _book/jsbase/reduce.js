Array.prototype.myReduce = function (f, value = 0)  {
  for (let i = 0; i < this.length; i++) {
    value = f(this[i], value);
  }
  return value;
}

let arr = [1, 2, 3, 4];
let reslut = arr.myReduce(function (a, b) {
  return a + b;
})
console.log(reslut); // 10
