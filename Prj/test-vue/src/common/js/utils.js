/**
 * 获取当前日期 例如:2018-10-09
 */
export function getCurrentDate () {
  let time = new Date()
  let year = time.getFullYear()
  let month = time.getMonth() + 1
  let date = time.getDate()
  return `${year}-${month < 10 ? '0' + month : month}-${date < 10 ? '0' + date : date}`
}
