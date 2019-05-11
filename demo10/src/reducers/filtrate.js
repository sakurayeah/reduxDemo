// 整个应用的初始状态，可以作为 State 的默认值
const defaultState = {
  title: '筛选器',
  list: []
};

export default (state = defaultState, action = {}) => {
  // action 是一个对象，其中的type属性是必须的，表示 Action 的名称
  const { type, payload } = action;
  // 当 reducer 接受到不同类型的 action 时，会对 state 进行处理，返回一个新的 state 值
  switch (type) {
    case 'BUILD_LIST':
      return {
        ...state,
        list: payload
      };
    default: 
      return state;
  }
};