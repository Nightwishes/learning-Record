// 元组 表示一个已知元素数量和类型的数组,必须严格跟事先声明的类型一致
var x;
// x = ['hello', 3];
// x.push(3);
// 数字枚举
// 普通对象，枚举,数组，元组通通都是object类型
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["DOwn"] = 1] = "DOwn";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
b = Direction.Up;
b = Direction.Left;
var Animal1;
(function (Animal1) {
    Animal1[Animal1["Dog"] = 0] = "Dog";
})(Animal1 || (Animal1 = {}));
function calculateAreas(user) {
    var square = 100;
    if (user.name) {
        square = user.age1 * user.age1;
    }
    return { retUser: square };
}
var mySquare = calculateAreas({ widdth: 5, age1: 3 });
var s1 = {
    name: 'xjh',
    age: 24,
    isMale: false,
    phone: {
        qq: '1601124837'
    }
};
var add3 = function (a, b) { return a + b; };
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
function getLength(arg) {
    console.log(arg.length);
    return arg;
}
var Stack = /** @class */ (function () {
    function Stack() {
        this.arr = [];
    }
    Stack.prototype.push = function (item) {
        this.arr.push(item);
    };
    Stack.prototype.pop = function () {
        this.arr.pop();
    };
    return Stack;
}());
var cc = new Stack();
cc.push(1);
cc.push('23');
console.log(cc.arr);
