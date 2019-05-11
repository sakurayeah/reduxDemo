import fetch from 'fetch-ajax';
import { call, put, takeEvery } from 'redux-saga/effects';     // 引入相关函数

// 参数是action创建函数返回的action
function* filtrateInit(action) {
  const fn = function() {
    return fetch.get('filtrateInit.json', {
      dataType: 'json',
    }).then(res => {
      return res
    }).catch(err => {
      return err
    });
  }
  // 执行 fn 函数，返回值赋值给res
  const res = yield call(fn)    
  const { list = [] } = res;

  // dispatch一个action到reducer， payload是请求返回的数据
  yield put({
    type: 'BUILD_LIST',
    payload: list
  })
}

// 在store.js中，执行了 sagaMiddleware.run(rootSaga)
function* rootSaga() {
  // 如果有对应type的action触发，就执行filtrateInit()函数
  yield takeEvery('FILTRATE_INIT', filtrateInit) 
}

export default rootSaga;