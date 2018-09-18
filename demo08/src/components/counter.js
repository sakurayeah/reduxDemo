import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { counter, addClick, subtractClick } = this.props;
    return (
      <div>
        <h3>计数器</h3>
        <p>{counter}</p>
        <button onClick={() => addClick()}>+</button>
        <button onClick={() => subtractClick()}>-</button>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}

// function 写法
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addClick: () => {
      dispatch({type: 'ADD'})
    },
    subtractClick: () => {
      dispatch({type: 'SUBTRACT'})
    }
  }
}


// 对象 写法
// const mapDispatchToProps = {
//   addClick: () => ({
//     type: 'ADD'
//   }),
//   subtractClick: () => ({
//     type: 'SUBTRACT'
//   })
// }

export default connect(mapStateToProps, mapDispatchToProps)(Counter);