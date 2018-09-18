import { combineReducers } from 'redux';
import counterReducer from './counter';
import filtrateReducer from './filtrate';

// 将 counterReducer 和 filtrateReducer 合并成一个大的 reducer
export default combineReducers({
  counter: counterReducer,
  filtrate: filtrateReducer,
})