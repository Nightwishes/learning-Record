# Vue核心应用(二)

## 一.v-model的使用
### 1.1 select
```html
<select v-model="select">
    <option 
        v-for="fruit in fruits"
        :value="fruit">
            {{fruit}}
    </option>
</select>
```
### 1.2 radio
```html
 <input type="radio" v-model="value"  value="男">
 <input type="radio" v-model="value"  value="女">
```
### 1.3 checkbox
```html
<input type="checkbox" v-model="checks" value="游泳" >
<input type="checkbox" v-model="checks" value="健身">
```
### 1.4 修饰符应用 .number .lazy .trim
```html
<input type="text" v-model.number="value">
<input type="text" v-model.trim="value">
```

## 二.自定义指令
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


## 三.watch和computed
为什么总有面试问他们的区别? 先说watch 和 computed内部调用的都是`new Watcher` 

### 3.1 watch (监控)
先来看下`watch`

```javascript
let vm = new Vue({
    el: '#app',
    data: { name: 'zf' }
});
function initWatch(key,handler){
    vm.$watch(key,handler);
}
initWatch('name',function(newValue){
    console.log(newValue)
});
vm.name = 'jw'; // 数据变化会执行对应的handler
```

> 当数据变化后会执行对应的处理函数


### 3.2.computed
```javascript
let dirty = true; // 内部有脏值检测系统
function initComputed(key,handler) {
    Object.defineProperty(vm, key, {
        get() {
            if (dirty) { // 取值后会将dirty 变成false
                value = handler();
                dirty = false;
            }
            return value
        }
    })
}
initComputed('age', function () {
    console.log('取值一次')
    return vm.name
});
console.log(vm.age);
console.log(vm.age);
vm.name = 'hello'; // 当依赖的值变化 会将dirty重新改成true,保证获取最新值
dirty = true;
console.log(vm.age);
```
源代码中通过,`watcher` 来实现脏值检测的

```javascript
function initComputed(key,handler) {
        // 源码中dirty 是通过watcher中来实现自动更新dirty的值
    let watcher = new Watcher(vm,handler,function(){},{lazy:true});
    Object.defineProperty(vm, key, {
        get() {
            if (watcher.dirty) { // 取值后会将dirty 变成false
                value = handler();
                watcher.dirty = false;
            }
            return value
        }
    });
}
```

## 四.动画
元素的显示隐藏都可以增加动画效果`v-if`、`v-show`、`v-for`、路由切换等操作。  

常见的增加动画的方式有  `animation` 、 `transition` 、 `js编写动画`
### 4.1 css3动画
![](https://cn.vuejs.org/images/transition.png)

我们先要具体掌握一下每个样式的触发阶段
```html
<div @click="show()">显示/隐藏</div>
<transition>
    <div class="content" v-if="isShow"></div>
</transition>
```

```css
.content{
    width: 100px;height: 100px;background: red;;;
}
.v-enter{ /*进入前*/
    background: blue;
    opacity: 0;
}
.v-enter-active{ /*进入中*/
    transition: all 2s linear;
}
.v-enter-to{ /*目标*/
    background: black;
}
/* 回到默认效果 红色 */
.v-leave{ /*开始离开*/
    background: yellow;
}
.v-leave-active{ /*离开中*/
    transition: all 2s linear;
}
.v-leave-to{ /*目标*/
    background: green;
}
/*元素隐藏*/ 
```

> 我们可以使用`name属性来更改默认v-前缀`

**配合`animate.css`使用**

安装`animate.css`
```bash
npm install animate.css
```

```css
<link rel="stylesheet" href="node_modules/animate.css/animate.css">
<style >
    .content{
        background: red;width: 100px;height: 100px;
    }
    .v-enter-active{
        animation:bounceIn 1s ease-in;
    }
    .v-leave-active{
        animation:bounceOut 1s ease-in ;
    }
</style>
```

也可以采用直接指定样式的方式
```html
<transition enter-active-class="bounceIn" leave-active-class="bounceOut">
    <div class="content animated" v-if="isShow"></div>
</transition>
```

### 4.2 js编写动画
**常用的钩子**
- before-enter 触发enter之前
- before-leave 触发leave之前
- enter 进入动画过程
- leave 离开动画过程
- after-enter 进入动画结束
- after-leave 离开动画结束


添加购物车的例子:
```html
<ul>
    <li v-for="(list,index) in lists" ref="lists">
        <div class="cover">
            <img :src="list.cover">
        </div>
        <button @click="addCart(index)">加入购物车</button>
    </li>
    <!-- 实现动画 -->
    <transition @enter="enter" @after-enter="afterEnter" >
        <span class="animate" v-if="showAnimate"></span>
    </transition>
</ul>
<div class="cart" ref="cart">快进来!!!</div>
```
我们可以借助 `v-if`来实现动画效果
```javascript
let vm = new Vue({
    el: '#app',
    methods:{
        enter(el,done){ // 进入时会触发此函数
            // 将当前点击项的背景图赋予给动画元素
            el.style.background = `url(${this.lists[this.currentIndex].cover})`;
            // 设置元素背景
            el.style.backgroundSize = `100% 100%`;
            // 将动画元素放到指定位置 
            let {x,y} = this.$refs.lists[this.currentIndex].getBoundingClientRect();
            el.style.left = x +'px';
            el.style.top = y + 'px';
            el.style.transformOrigin = `center center`;

            // 获取动画目标位置
            let {x:a,y:b} = this.$refs.cart.getBoundingClientRect();
            el.style.transform = `translate3d(${a-x}px,${b-y}px,0) scale(0,0)`;
            el.addEventListener('transitionend',done); // 动画结束后触发 done 方法
        },
        afterEnter(){ // 结束后重置动画
            this.showAnimate = false; // 直接隐藏
        },
        addCart(index){
            // 加入购物车 
            this.currentIndex = index; // 当前点击的那一项
            this.showAnimate = true;
        }
    },
    data() {
        return {
            showAnimate:false,
            currentIndex:-1,
            lists: [{
                    cover: 'http://www.javascriptpeixun.cn/files/course/2019/10-13/20510264fa40871768.png',
                    id: 1,
                },
                {
                    cover: 'http://www.javascriptpeixun.cn/files/course/2019/10-13/21114956089d654633.png',
                    id: 2,
                },
                {
                    cover:'http://www.javascriptpeixun.cn/files/course/2019/10-13/2048331a9c5a183234.png',
                    id:3,
                }
            ]
        }
    }
})
```

### 4.3 多元素动画
如果动画遇到`v-for`就需要使用`transition-group`,而且每个元素必须增加`key`属性
```html
<div class="nav-list" ref="box">
    <transition-group>
        <div class="nav-item" v-for="i in count" v-show="isShow" :key="i">{{i}}</div>
    </transition-group>
</div>
<div class="nav" @click="show()">导航</div>
<script>
    let vm = new Vue({
        el: '#app',
        methods:{ // 控制是否显示
            show(){this.isShow = !this.isShow}
        },
        data() {
            return {
                isShow: false, count:6 // 循环六个导航
            }
        }
    })
</script>
```

```css
.nav-list .v-enter{ /*进入前的状态*/
    opacity: 0;
    transform: translate(0,0);
}
.v-enter-active,.v-leave-active{ /*运动中的效果*/
    transition: all .5s linear;
} 
.nav-list .v-leave-to{ /*离开后的目标*/
    transform: translate(0,0);
    opacity: 0;
}
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
- computed和watch有什么区别?
- Vue的生命周期,每个生命周期具体适合哪些场景
- Vue中ref是什么?
- Vue动画的生命周期?
- Vue如何编写自定义指令?