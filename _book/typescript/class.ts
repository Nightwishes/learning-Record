// 动物类
class Animal {
  name: string
  constructor(name: string) {
    this.name = name;
  }
  move(distance: number = 0) {
    console.log(`${this.name}moved ${distance}`)
  }
}

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance: number = 50) {
    super.move(distance);
  }
}

class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distance: number = 45) {
    super.move(distance);
  }
}

let c1 = new Cat('小黑');
let d1 = new Dog("小白");

// c1.move();
// d1.move();


// 公共，私有与受保护的修饰符 private:不能在声明它的类的外部使用 protected可以在派生类中使用

class Person {
  private readonly name;
  constructor(name: string) {
    this.name = name;
  }
  /**
   * show
   */
  public show() {
    console.log(this.name);
  }
}

let p = new Person('smile');
console.log(p.show());

// 类的 存储器
let GlobalPass = '123321';
class Employee {
  private _empArray: string[];
  get empArray() {
    return this._empArray;
  }
  set empArray(newEmployee: string) {
    if (GlobalPass && GlobalPass === '123321') {
      this._empArray.push(newEmployee);
    }
  }
}

// 抽象类  作为其他派生类的基类使用，一般不会直接被实例化， 不同于接口，抽象类可以包含成员的实现细节

abstract class Department {
  constructor (public name: string) {}
  printName(): void {
    console.log('Department name:' + this.name)
  };
  abstract printMeeting () : void;
}

class Account extends Department {
  constructor () {
    super('wwwww');
  }
  printMeeting():void {
    console.log('meeting at 10 a.m');
  }
}

