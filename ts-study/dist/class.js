"use strict";
// 1. 抽象类 作为其他派生类的基类， 不同于接口 抽象类可以包含成员的实现细节
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('anyOne move...');
        return 'moved';
    };
    return Animal;
}());
var Mouse = /** @class */ (function (_super) {
    __extends(Mouse, _super);
    function Mouse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mouse.prototype.makeSound = function () {
        console.log('zizizi');
    };
    return Mouse;
}(Animal));
var m1 = new Mouse();
m1.makeSound();
m1.move();
// 2.访问权限 TypeScript中有三类 public,private,protected
var add = function (a, b) { return a + b; };
var add1 = function (a, b) { return a + (b ? b : 0); }; // 参数b有undefined和0两种
var add2 = function (a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
};
var addRuduce = function (a, b) { return b.reduce(function (a, c) { return a + c; }, a); };
console.log(addRuduce(1, [2, 3, 4, 5, 6]));
