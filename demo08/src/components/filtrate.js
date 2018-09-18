import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as action from '../actions/filtrate';

class Filtrate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { filtrate, btnClick, actions } = this.props;
    const { title = '', list = [] } = filtrate;
    return (
      <div>
        <h3>{title}</h3>
        <button onClick={() => actions.showEn(list)}>只显示英文</button>
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

function mapDispatchToProps(dispatch, ownProps) {
  // 返回值(Function or Object): 一个与原对象类似的对象，只不过这个对象的 value 都是会直接 dispatch 原 action creator 返回的结果的函数。如果传入一个单独的函数作为 actionCreators，那么返回的结果也是一个单独的函数。
  return {
    actions: bindActionCreators(action, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Filtrate);