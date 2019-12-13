ES6中的箭头函数有什么特性？和普通函数有什么区别

> 普通函数的this是可变的,而箭头函数中的this是固定的,定义时的对象

1. 箭头函数中的this是定义时候的this而不是使用时,所在的对象
2. 不可以当作构造函数使用
3. 不可以使用arguments对象,可以使用rest参数代替
4. 不可使用yield,因此箭头函数不能当作generator
