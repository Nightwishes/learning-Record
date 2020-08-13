// vue的数据双向绑定原理  数据劫持 + 发出订阅者模式

// new Vue($data)使用Object.definePropoerty来对对象的
// 属性进行setter,getter重写,
// 在getter的过程中会进行收集依赖{{this.value}}

// 依赖收集 并不是一个值改变所有的视图都要更新，仅依赖这个值的视图需更新

// 有两个类,一个是Dep类，一个是Watch类,Dep中会有存放watch的
// 数组subs  setter -> dep.notify -> patch -> update

