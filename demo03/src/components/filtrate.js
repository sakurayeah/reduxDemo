import React from 'react';
import * as action from '../actions/filtrate';

class Filtrate extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { store } = this.props;
    const { title = '', list = [] } = store.getState().filtrate;
    return (
      <div>
        <h3>{title}</h3>
        <button onClick={() => store.dispatch(action.showEn(list))}>只显示英文</button>
        {
          list.map((v, i) => (
            <div key={i}>{`${i+1}、${v.desc}`}</div>
          ))
        }
      </div>
    )
  }
}

export default Filtrate;