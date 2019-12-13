// createStore 接受一个reducer返回一个store对象，包含disptch,subcribe

let createStore = (reducer) => {
  let state;
  let listens = [];

  let disptch = (action) => {
    state = reducer (action);
    // 返回新的state之后应该通知view层进行更新
    listens.forEach(l =>  l());
  }

  let subscribe = (listen) => {
    listens.push(listen);
    return () => {

    }
  }
}
// react 三大原则 1.单一数据源 只有一个state,flux有多个store,各自管理各自的数据 2.纯函数 flux可能不是纯函数 3.state只读的,flux可能的

// flux与react都是单项数据流