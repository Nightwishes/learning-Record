for (var i = 0; i < 5; i++) {
  console.log(i);
}
for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100 * i);
}

let arr = [1 ,2 ,3, 4];
console.log(arr.reverse());
