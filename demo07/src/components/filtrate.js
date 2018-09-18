import React from 'react';
import { connect } from 'react-redux';
import * as action from '../actions/filtrate';

class Filtrate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { filtrate, btnClick } = this.props;
    const { title = '', list = [] } = filtrate;
    return (
      <div>
        <h3>{title}</h3>
        <button onClick={() => btnClick(list)}>只显示英文</button>
        {
          list.map((v, i) => (
            <div key={i}>{`${i+1}、${v.desc}`}</div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    filtrate: state.filtrate
  }
}

// 这里 mapDispatchToProps 是一个函数，有两个参数 dispatch 和 ownProps（容器组件的props对象
const mapDispatchToProps = (dispatch, ownProps) => {
  // 返回一个对象，该对象的每个键值对都是一个映射，定义了 UI 组件的参数怎样发出 Action
  return {
    btnClick: (list) => {
      dispatch(action.showEn(list))
    }
  }
}

// 这里是 mapDispatchToProps 为对象的写法
// const mapDispatchToProps = {
//   btnClick: (list) => action.showEn(list),
// }

export default connect(mapStateToProps, mapDispatchToProps)(Filtrate);