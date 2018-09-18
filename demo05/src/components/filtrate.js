import React from 'react';
import { connect } from 'react-redux'
import * as action from '../actions/filtrate';

class Filtrate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { filtrate, dispatch } = this.props;
    const { title = '', list = [] } = filtrate;
    return (
      <div>
        <h3>{title}</h3>
        <button onClick={() => dispatch(action.showEn(list))}>只显示英文</button>
        {
          list.map((v, i) => (
            <div key={i}>{`${i+1}、${v.desc}`}</div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // 这里的 state 就相当于是上面案例里写的 store.getState()，在这个案例里
  // mapStateToProps 这个回调函数返回的对象，相当于是 store.getState().filtrate
  return {
    filtrate: state.filtrate
  }
}
// mapStateToProps 函数返回的对象 和组件 Filtrate 的 props 合并后，可以直接通过 this.props.filtrate 取出
export default connect(mapStateToProps)(Filtrate);