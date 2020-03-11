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
// 动物类
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (distance) {
        if (distance === void 0) { distance = 0; }
        console.log(this.name + "moved " + distance);
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(name) {
        return _super.call(this, name) || this;
    }
    Cat.prototype.move = function (distance) {
        if (distance === void 0) { distance = 50; }
        _super.prototype.move.call(this, distance);
    };
    return Cat;
}(Animal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (distance) {
        if (distance === void 0) { distance = 45; }
        _super.prototype.move.call(this, distance);
    };
    return Dog;
}(Animal));
var c1 = new Cat('小黑');
var d1 = new Dog("小白");
// c1.move();
// d1.move();
// 公共，私有与受保护的修饰符 private:不能在声明它的类的外部使用 protected可以在派生类中使用
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    /**
     * show
     */
    Person.prototype.show = function () {
        console.log(this.name);
        return '11';
    };
    return Person;
}());
var p = new Person('smile');
console.log(p.show());
