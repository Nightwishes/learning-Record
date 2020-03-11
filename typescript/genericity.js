function identity(arg) {
    return arg;
}
var numIdent = identity;
var strIdent = identity;
console.log(numIdent(3));
console.log(strIdent('234'));
// 类有两部分 实例部分与静态部分  静态部分不可以使用泛型类 泛型类
// 泛型类
var GenericNumber = /** @class */ (function () {
    function GenericNumber(value) {
        this.zeroValue = value;
    }
    return GenericNumber;
}());
var g1 = new GenericNumber('23');
console.log(g1.zeroValue);
g1.add = function (x, y) {
    return x + y;
};
console.log(g1.add('123', '345'));
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.prototype.reverse = function (items) {
        var toreturn = [];
        for (var i = 0; i < items.length; i++) {
            toreturn.push(items[i]);
        }
        return toreturn;
    };
    Utility.prototype.showStr = function (x, y) {
        return x;
    };
    return Utility;
}());
var u1 = new Utility();
console.log(u1.reverse([1, 2, 3]));
console.log(u1.showStr('333', ''));
function loggingIden(arg) {
    console.log(arg.length);
    return arg;
}
