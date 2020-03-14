## javascript中,==和===的区别是什么？描述一下判断中间的比较过程?都有哪些隐式转换规则?

javascript中==与===的区别是: === 是精确相等,不仅要对比值还要对比对象的地址。==具有隐式转换。

在比较前将两个被比较的值转换为相同类型。如果不是对象则直接判断或者隐shi转换数值是否相等，如果是对象则会尝试调用valueOf()和toString()方法转换为原始值



```javascript
  null == false  // false
  undefined == false // false
  NAN == NAN // false
  "foo" == NAN // false
  0 == NAN // false
  0 == null // false
 //相同值不同地址的对象也不等
 // 其他情况为true
```
