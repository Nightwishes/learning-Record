
redux是什么? redux三大原则(与flux作比较)? redux流程(reducer纯函数)?
store的createStore怎么实现的? redux的异步? redux的缺点?
## 中央状态集中管理仓库

将组件中需要共享的状态抽象出来集中管理,让状态变化可预测


## flux
flux是一种思想,类似mvvm，mvc,所有的框架都可以按照思想作一些实现

flux将整个应用拆成view,disptcher,action,store 四个部分

view -> action(addUser) -> Disptcher -> store -> view

flux 单向流动

flux缺陷有多个store可能还互相依赖

## redux

redux只有一个store, 整个应用的数据都放在一个store里,store里的state不能直接修改,每次都返回一个新的state

reactComponent -> action -> store -> reducers -> store -> reactComponent

action必须有一个type属性

redux中store集成了disptch, subscribe

store.disptch是view派发action的唯一办法

store.subscribe来监听view的更新函数,state发生就调用view的更新函数

reducer是纯函数,来处理事件,store收到action之后必须给出一个新的state,这种state的计算就叫做reducer,根据当前的状态跟action推出新的state

纯函数---没有副作用的函数

> 对于相同的输入永远对应相同的输出,不会受外部变量的影响,也不会影响外部变量


redux多个reducer对应多个state,可以将reducer整合成一个根reducer

异步 => 重写 disptch 加入中间件

```javascript
let next = store.disptch;
store.disptch = function (action) {
  // 中间操作 api
  console.log(state);
  next(action);
  console.log('next state', store.getStore());
}
```


``` javascript
let createStore = (reducer) => {
  // 存放更新view的监听函数
  let listens = [];
  let state;
  // 订阅view的监听函数
  let subscribe = (fn) => {
    listens.push(fn);
  }
  // disptch派发action
  let disptch = (action) => {
    let state = reducer(action);
    listens.forEach(l => l());
  }
  let getStore = state => state;
  return {
    subsribe,
    disptch,
    getStore
  }
}
```

redux的缺点就是

1. 子组建的状态必须由父组件中传递而来
2. 若子组件发生状态变化重新渲染则父组件也要重新渲染.可以使用componentShouldUpdate来优化,判断是否需要重新渲染