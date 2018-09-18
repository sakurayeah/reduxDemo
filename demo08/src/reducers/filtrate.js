// 整个应用的初始状态，可以作为 State 的默认值
const defaultState = {
  title: '筛选器',
  list: [
    {
      language: 'EN',
      desc: 'The forest was completely silent for a moment'
    },
    {
      language: 'CN',
      desc: '量小非君子，无度不丈夫'
    },
    {
      language: 'EN',
      desc: 'In the library it was very still'
    },
    {
      language: 'EN',
      desc: 'The living room is so quiet without guests.'
    },
    {
      language: 'CN',
      desc: '擒贼先擒王'
    }
  ]
};

export default (state = defaultState, action = {}) => {
  // action 是一个对象，其中的type属性是必须的，表示 Action 的名称
  const { type, payload } = action;
  // 当 reducer 接受到不同类型的 action 时，会对 state 进行处理，返回一个新的 state 值
  switch (type) {
    case 'SHOW_EN':
      return {
        ...state,
        list: payload
      };
    default: 
      return state;
  }
};