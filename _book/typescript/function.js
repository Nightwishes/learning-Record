// 函数类型 包括两部分： 参数类型和返回值类型
var myadd = function (x, y) {
    return x + y;
};
// 可选参数和默认参数  传递一个函数的参数的个数必须与函数期望的个数一致 可选参数必须放在必须参数后面
var youname = function (first, last) {
    if (last) {
        return first + last;
    }
    return first;
};
console.log(youname('xjh'));
console.log(youname('xjh', '123'));
// 剩余参数 把所有的参数放在一个变量里
function test(firstName) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    if (rest) {
        return firstName + rest.join('');
    }
    return firstName;
}
console.log(test('111', '333', '444'));
console.log(test('111', '222'));
