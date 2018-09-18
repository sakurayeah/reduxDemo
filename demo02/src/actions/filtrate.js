export const showEn = (list) => {
  let arr = [];
  // 从数组里筛选出 language 为 'EN' 的部分
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