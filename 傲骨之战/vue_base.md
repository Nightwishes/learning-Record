# Vue核心概念及特性 (一)
Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。
特点: 易用，灵活，高效 渐进式框架

![](https://www.fullstackjavascript.cn/vue.png)

> 可以随意组合需要用到的模块 vue + components + vue-router + vuex + vue-cli


## 一.Vue的概念和特性
### 1.什么是库，什么是框架?
- 库是将代码集合成一个产品,库是我们调用库中的方法实现自己的功能。  
- 框架则是为解决一类问题而开发的产品,框架是我们在指定的位置编写好代码，框架帮我们调用。  

框架与库之间最本质区别在于控制权：you call libs, frameworks call you

**Vue属于框架**


### 2.MVC模型 && MVVM模型
![](http://img.fullstackjavascript.cn/process.png?a=1)


在传统的mvc中除了model和view以外的逻辑都放在了controller中，导致controller逻辑复杂难以维护,在mvvm中view和model没有直接的关系，全部通过viewModel进行交互

**Vue是MVVM模式**

### 3.声明式和命令式
- 自己写for循环就是命令式 (命令其按照自己的方式得到结果)
- 声明式就是利用数组的方法forEach (我们想要的是循环，内部帮我们去做)


## 二.Vue的基本使用
### 1.mustache语法
允许开发者声明式地将 DOM 绑定至底层 Vue 实例的数据。在使用数据前需要先声明
- 编写三元表达式
- 获取返回值
- JavaScript 表达式

```javascript
<div id="app">
    {{ 1+1 }}
    {{ msg == 'hello'?'yes':'no' }}
    {{ {name:1} }}
</div>
<script src="./node_modules/vue/dist/vue.js"></script>
<script>
let vm = new Vue({
    el:'#app',
    data:{
        msg:'hello'
    }
})
</script>
```

### 2.响应式数据变化
Vue中使用`Object.defineProperty`重新将对象中的属性定义，如果是数组的话需要重写数组原型上的方法
```javascript
function notify() {
    console.log('视图更新')
}
let data = {
    name: 'jw',
    age: 18,
    arr: [1,2,3]
}
// 重写数组的方法
let oldProtoMehtods = Array.prototype;
let proto = Object.create(oldProtoMehtods);
['push', 'pop', 'shift', 'unshift'].forEach(method => {
    proto[method] = function (...args) {
        let inserted;
        switch (method) {
            case 'push':
            case 'unshift':
                inserted = args;
                break;
        }
        observerArray(inserted)
        notify();
        oldProtoMehtods[method].call(this, ...args)
    }
})
function observerArray(obj) { // 观察数组中的每一项
    for (let i = 0; i < obj.length; i++) {
        observer(obj[i]);
    }
}
function observer(obj) {
    if(typeof obj !== 'object'){
        return obj
    }
    if (Array.isArray(obj)) {
        obj.__proto__ = proto
        observerArray(obj);
    }else{
        for (let key in obj) {
            defineReactive(obj, key, obj[key]);
        }
    }
}
function defineReactive(obj, key, value) {
    observer(value); // 再一次循环value
    Object.defineProperty(obj, key, { // 不支持数组
        get() {
            return value;
        },
        set(val) {
            notify();
            observer(val);
            value = val;
        }
    });
}
observer(data);
data.arr.push({name:'jw'})
console.log(data.arr);
```

**缺陷**
- 不能通过通过长度，索引改变数组
- 不能给对象新增属性
- 需要通过`vm.$set`和`vm.$delete`方法强制添加/删除响应式数据

### 3.Vue实例上的方法
- vm.$el;  
- vm.$data;
- vm.$options;
- vm.$nextTick();
- vm.$mount();
- vm.$watch();
- vm.$set();

## 三.Vue中的指令
在vue中 指令 (Directives) 是带有 v- 前缀的特殊特性,主要的功能就是操作DOM
### 1.v-once
```html
<div v-once>{{state.count}} </div>
```

### 2.v-html
永远不要对用户输入使用v-html,可能会导致xss攻击
```html
<div v-html="text"></div>
```

### 3.v-bind
动态绑定属性需要使用`v-bind`进行绑定
```html
<img v-bind:src="src">
```

> 可以使用:来简写 `v-bind`

### 4.v-for
```html
<template v-for="(fruit,index) in fruits" >
    <li :key="`item_${index}`">{{fruit}}</li>
    <li :key="`fruit_${index}`">{{fruit}}</li>
</template>
```

> 多个元素循环时外层需要增加`template`标签,需要给真实元素增加`key`,而且`key`不能重复，尽量不要采用索引作为`key`的值

举个`key`值的例子:

![](http://img.fullstackjavascript.cn/k.png)

### 5.v-if/v-else/v-show
`v-if`可以切换`DOM`元素是否存在,并且`v-if`为`false`时内部指令不会被执行  
`v-show`可以控制元素的显示及隐藏，主要控制的是元素样式

### 6.v-on  
- 事件的绑定 v-on绑定事件
- 事件修饰符 (.stop .prevent) .capture .self .once .passive
  
### 7.v-model
双向数据绑定
```html
<input type="text" :value="value" @input="input">
<input type="text" v-model="value">
```
- select
```html
<select v-model="select">
    <option 
        v-for="fruit in fruits"
        :value="fruit">
            {{fruit}}
    </option>
</select>
```
- radio
```html
 <input type="radio" v-model="value"  value="男">
 <input type="radio" v-model="value"  value="女">
```
- checkbox
```html
<input type="checkbox" v-model="checks" value="游泳" >
<input type="checkbox" v-model="checks" value="健身">
```
- 修饰符应用 .number .lazy .trim
```html
<input type="text" v-model.number="value">
<input type="text" v-model.trim="value">
```
## 四.自定义指令
- 全局指令和局部指令
- 编写一个自定义指令
  - 钩子函数bind，inserted，update
    ```javascript
        <input type="text" v-focus.color="'red'">
        Vue.directive('focus',{
            inserted:(el,bindings)=>{
                let color = bindings.modifiers.color;
                if(color){
                    el.style.boxShadow = `1px 1px 2px ${bindings.value}`
                }   
                el.focus();
            }
        });
    ```
  - clickoutside指令
    ```html
        <div v-click-outside="change">
            <input type="text"  @focus="flag=true" >
            <div v-show="flag">
                contenter
            </div>
        </div>
        <script>
            let vm = new Vue({
                el:'#app',
                data:{
                    flag:false
                },
                methods:{
                    change(){
                        this.flag = false
                    }
                },
                directives:{
                    'click-outside'(el,bindings,vnode){
                        document.addEventListener('click',(e)=>{
                            if(!el.contains(e.target,vnode)){
                                let eventName = bindings.expression;
                                vnode.context[eventName]()
                            }
                        })
                    }
                }
            })
        </script>
    ```

## 五.Vue中的生命周期
- beforeCreate 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
- created 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。这里没有$el
- beforeMount 在挂载开始之前被调用：相关的 render 函数首次被调用。
- mounted el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
- beforeUpdate 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
- updated 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
- beforeDestroy 实例销毁之前调用。在这一步，实例仍然完全可用。
- destroyed Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。


### 钩子函数中该做的事情
- created 实例已经创建完成，因为它是最早触发的原因可以进行一些数据，资源的请求。
- mounted 实例已经挂载完成，可以进行一些DOM操作
- beforeUpdate 可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
- updated 可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。 该钩子在服务器端渲染期间不被调用。
- destroyed 可以执行一些优化操作,清空定时器，解除绑定事件


## 六.面试题环节
- 请说下对于MVVM的理解
- Vue实现数据双向绑定的原理
- Vue常用的指令有哪些?
- v-model的原理
- v-if 和 v-show 区别
- Vue中 key 值的作用
