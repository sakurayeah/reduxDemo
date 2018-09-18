import $ from 'jquery';

// 只展示英文
export const showEn = (list) => {
  let arr = [];
  list.map((v) => {
    if(v.language === 'EN') {
      arr.push(v)
    }
  })
  return {
    type: 'BUILD_LIST',
    payload: arr,
  }
}

// 初始化请求
export const filtrateInit = () => (dispatch, getState) => {
  $.ajax({
    url: 'filtrateInit.json',
    success: (data = {}) => {
      dispatch(filtrateInitOK(data))
    },
    error: () => {
      // 请求失败的处理
    }
  })
}

// 请求成功处理
export const filtrateInitOK = (data) => {
  const { list } = data;
  return {
    type: 'BUILD_LIST',
    payload: list,
  }
}