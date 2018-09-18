import React from 'react';
import Filtrate from './filtrate';
import Counter from './counter';

class Init extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { store } = this.props;
    return (
      <div>
        <Counter />
        <Filtrate />
      </div>
    )
  }
}

export default Init;