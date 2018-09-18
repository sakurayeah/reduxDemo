import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/counter';
import counterReducer from './reducers/counter';

// 通过 createStore 创建一个 Redux store 来存放应用中所有的 state , 应用中应有且仅有一个 store。
const store = createStore(counterReducer);

const render = () => {
  ReactDOM.render(
    <Counter store={store}/>,
    document.getElementById('root'),
  );
}

render();

// Store 允许使用 store.subscribe 方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
store.subscribe(render);