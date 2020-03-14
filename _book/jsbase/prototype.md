1. 原型链是什么？

每个javascript对象在查找属性的时候不仅会查找本身实例上的,也会查找其原型,原型的原型直到查找到为止,或者到到链的尽头-null,此为原型链。

2.继承实现的方法有那些?
 1. 原型链继承
 > 子类的prototype指向父类的一个实例,缺点属性共用了
 ```javascript
 function Parent () {
   this.name = ['hello', 'world', 'smile'];
 }
 function Child () {};
 Child.prototype = new Parent();

 let c1 = new Child();
 let c2 = new Child();
 c1.name.push('everyday');
 console.log(c2.name); // [ 'hello', 'world', 'smile', 'everyday' ]
 ```
 2. 借用构造函数继承
 > 子类实例创建时每次，都会调用一次父类构造函数,这样属性就不共用了。
  
  优点
  
  - 解决了属性共用
  - 子类可以向父类传参

  缺点

  - 方法无法达到共用的效果
```javascript
 function Parent(name) {
   this.name = name
 }

 function Child(name) {
   Parent.call(this, name);
 };
 let c1 = new Child('smile');
 let c2 = new Child('everyDay');

 console.log(c1.name, c2.name); // smile everyDay
``` 
3. 组合继承(原型链继承＋构造函数继承)
> 方法用原型链继承 实例用构造函数继承
  
  优点
   
   - 解决方法不共用
  
  缺点
   
   - 调用了两次父类构造函数 
     1. Parent.call(this) 
     2. Child.prototype = new Parent();

```javascript
function Parent (name) {
  this.name = name
}
Parent.prototype.getName = function () {
  console.log(this.name);
}
function Child (name) {
  Parent.call(this, name);
}
Child.prototype = new Parent();
Child.prototype.construct = Child
```
4. 寄生组合方式-最理想的继承范式
 
> 组合方式 中两次调用父类构造函数 不使用Child.prototype = new Parent();间接的让Child.prototype访问到Parent.prototype

```javascript
function Parent (name) {
  this.name = name
}
Parent.prototype.getName = function () {
  console.log(this.name);
}
function Child (name) {
  Parent.call(this, name);
}
// 关键地方
  var F = function () {};
  F.prototype = Parent.prototype;
  Child.prototype = new F();
```