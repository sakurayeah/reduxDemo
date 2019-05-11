export const showEn = (list) => {
  let arr = [];
  list.map((v) => {
    if (v.language === 'EN') {
      arr.push(v)
    }
  })
  return {
    type: 'BUILD_LIST',
    payload: arr,
  }
}

export const filtrateInit = (params) => {
  return {
    type: 'FILTRATE_INIT',
    payload: params
  }
}
