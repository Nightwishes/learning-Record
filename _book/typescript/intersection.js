// 高级类型 联合类型和交叉类型
// 交叉类型 多个类型合并为一个类型
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    return People;
}());
var Xiaoxue = /** @class */ (function () {
    function Xiaoxue() {
    }
    Xiaoxue.prototype.homeWork = function () {
        console.log('55555');
    };
    return Xiaoxue;
}());
var e1 = extend(new People('hhh'), new Xiaoxue());
// console.log(e1.name)
// e1.homeWork();
// 联合类型 -- 众多类型的其中一种
function numberOrStr(value, val) {
    if (typeof val === 'number') {
        return value + val;
    }
    if (typeof val === 'string') {
        return value + val;
    }
}
console.log(numberOrStr(3, 5));
function getSmallPet() {
    return;
}
var g1 = getSmallPet();
// g1.fly();
// g1.layEgg() // error
// 类型保护与区分类型
// 1. 用户自定义的类型保护 定义一个函数 返回值是一个 类型谓语
function isFish(arg) {
    return arg.run !== undefined;
}
// arg is BianFu就是类型谓词 parameterName is Type 这种形式 parameterName 必须是来自当前函数签名里的一个参数名
// 2.typeof 类型保护 typescript将typeof识别为一个类型保护 两种形式 typeof v === 'typeofname'  typeof v !== 'typeofname' 
// 必须是string number boolean symbol
// 3. instanceof 类型保护
// 默认情况下null和undefined可以赋值给任何类型 --strictNullChecks 当你申明一个变量时，它不会自动地包含null或undefined
var sn = 123;
sn = null;
console.log(sn);
