export const showEn = (list) => {
  let arr = [];
  list.map((v) => {
    if(v.language === 'EN') {
      arr.push(v)
    }
  })
  return {
    type: 'SHOW_EN',
    payload: arr,
  }
}