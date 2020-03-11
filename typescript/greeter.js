function Greeter(smile) {
    return "hello" + smile;
}
console.log(Greeter('yinghua'));
// tuple types 
var smile = ['xjh', false];
// enum 
var Color;
(function (Color) {
    Color[Color["XU"] = 1] = "XU";
    Color[Color["JIAN"] = 3] = "JIAN";
    Color[Color["HOME"] = 4] = "HOME";
})(Color || (Color = {}));
var colorName = Color[4];
console.log(colorName); // HOME
console.log(Color[2]); //undefined
var someValue = "there is a string";
var strLength = someValue.length;
console.log(strLength);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
var p1 = { x: 10, y: 100 };
p1.x = 11; // 
console.log(p1);
var Clock = /** @class */ (function () {
    function Clock() {
    }
    Clock.prototype.setDate = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
// 传递参数个数必须与函数期望的一致，参数名旁边使用？实现可选参数的功能，可选参数必须跟在必选参数后面
var add = function (x, y) {
    return x + y;
};
console.log(add(1)); // NAN
console.log(add(1, 2, 3)); // 参数超过
console.log(add(1, 2)); // correct
// 剩余参数--把所有参数放在一个变量里
var add1 = function (x, y) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    var sum = 0;
    for (var i = 0; i < rest.length; i++) {
        sum += rest[i];
    }
    sum = sum + x + y;
    return sum;
};
console.log(add1(1, 2, 3, 4, 5));
// 指定了this类型后,调用方法必须在Handle实例上调用
var Handler = /** @class */ (function () {
    function Handler() {
    }
    Handler.prototype.onClicked = function (e) {
        this.info = e.target;
    };
    return Handler;
}());
var h = new Handler();
// 使用一种方法使返回值的类型与传入参数的类型是相同的 类型变量 泛型函数
function identity(arg) {
    console.log(arg); // 任意类型,数字没有length
    return arg;
}
// 
function loggingIdentity(arg) {
    return;
}
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var stringGen = new GenericNumber();
stringGen.zoro = "11";
console.log(stringGen);
var numberGen = new GenericNumber();
numberGen.zoro = 1;
// numberGen.add(1,2);
// 泛型约束
// 枚举
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["DOWN"] = 3] = "DOWN";
})(Direction || (Direction = {}));
console.log(Direction.DOWN);
console.log(Direction.LEFT);
var E1;
(function (E1) {
    E1[E1["X"] = 0] = "X";
    E1[E1["Y"] = 1] = "Y";
    E1[E1["Z"] = 2] = "Z";
})(E1 || (E1 = {}));
var E2;
(function (E2) {
    E2[E2["A"] = 1024] = "A";
    E2[E2["B"] = 1025] = "B";
    E2[E2["C"] = 1026] = "C";
})(E2 || (E2 = {}));
console.log(E1.X, E1.Y, E2.B);
var arr4 = [1, '2', 3];
var arr5 = arr4.reverse();
arr5[0] = '1';
console.log(arr5);
