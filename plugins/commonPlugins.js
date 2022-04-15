export default function(context, inject) {
  // 配列内のオブジェクトにインデックスIDを振る
  const numberIndex = (array) => {
    let result = array.map(item => ({...item}))
    result.map((item, i) => {
      item.id = i
      return item
    })
    return result
  }
  inject('numberIndex', numberIndex)
}
