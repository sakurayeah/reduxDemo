import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { store } = this.props;
    return (
      <div>
        <h3>计数器</h3>
        {/* 当前时刻的 State，可以通过 store.getState() 拿到 */}
        <p>{store.getState().counter}</p>
        {/* store.dispatch 接受一个 Action 对象作为参数，将它发送出去 */}
        <button onClick={() => store.dispatch({type: 'ADD'})}>+</button>
        <button onClick={() => store.dispatch({type: 'SUBTRACT'})}>-</button>
      </div>
    )
  }
}

export default Counter;