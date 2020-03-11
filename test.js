// createStore 接受一个reducer返回一个store对象，包含disptch,subcribe

let createStore = (reducer) => {
  let state;
  let listens = [];

  let disptch = (action) => {
    state = reducer (action);
    // 返回新的state之后应该通知view层进行更新
    listens.forEach(l =>  l());
  }

  let subscribe = (listen) => {
    listens.push(listen);
    return () => {
      listens.filter(listen => listen != listen);
    }
  }
  return {subscribe, disptch,}
}
// react 三大原则 1.单一数据源 只有一个state,flux有多个store,各自管理各自的数据 2.纯函数 flux可能不是纯函数 3.state只读的,flux可能的

// flux与react都是单项数据流

let newFuc  = (fn, ...args) => {
    // Object.create() 创建一个把__proto__指向传入对象的对象
    let obj = Object.create(fn.prototype);
    let result = fn.apply(obj, args);
    return typeof result === 'object' ? result : obj;
}

// react 中的key 

// 为了比较diff算法中同级比较的速度,比较一个列表的前后差异,如果列表里每一项都有唯一key值,
// 那么列表前后可以很快速的比较多了谁缺少了谁


// 防抖与节流

// 防抖 如果有高频函数被触发,n秒内如果有高频函数再次被触发重新计算时间

let debounce = (fn) => {
  let timer = null;
  return (...args) => {
    clearTimeout(timer);
    setTimeout(() => {
      fn.apply(null, args);
    }, 500);
  }
}

// 节流 n秒内高频函数只执行一次

let throttle = (fn) => {
  // 用来判断是否执行高频函数
  let canRun = true;
  return function () {
   if (!canRun) {
     
   } 
  }
}

// 二分搜索

let binarySearch = (arr, target) => {
  arr = arr.sort((a, b) => a-b);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = parseInt(start + (end -start) / 2);
    if (arr[mid] == target) {
      return mid;
    } else {
      if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
  }
  let binarySearch3 = (arr, target) => {
    arr = arr.sort((a, b) => a - b);
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
      let mid = parseInt(start + (end - start) / 2);
      if (arr[mid] == target) {
        return mid;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  }
let arr = [2, 4, 7,23, 1, 54, 65, 34];

let binarySearch1 = (arr, target) => {
  arr = arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = parseInt(start + (end - start) / 2);
    if (arr[mid] == target) {
      return mid;
    } else if (arr[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
}
                         14*-
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  };
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

let arr1 = [2,56,7,34,21,43,53,44,88,99,13];

// console.log(quickSort(arr1));


function bubbleSort(arr) {
  var len = arr.length;

  for (var i = 0; i < len - 1; i++) {
    var n = 0;
    for (var j = 0; j < len - i; j++) {

      if (arr[j] < arr[j - 1]) {
        n++;
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }

    }
    if (n < 1) {

      break;
    }
  }
  return arr;
}
function bubbleSort1 (arr) {
  var len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort1(arr1));
