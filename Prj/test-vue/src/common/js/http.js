import axios from 'axios'
axios.defaults.baseURL = process.env.VUE_APP_API_ROOT
axios.defaults.timeout = 30000
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded; charset=utf-8'
axios.interceptors.request.use((config) => { // 请求拦截
  // TODO: 如判断是否存在token，如果存在的话，则每个http header都加上token
  return config
}, (error) => {
  return Promise.reject(error)
})
axios.interceptors.response.use((res) => { // 响应拦截
  // TODO: 接口请求响应拦截，如需添加 可在此添加拦截内容
  return res
}, (error) => {
  return Promise.reject(error)
})

// 返回一个Promise发送post请求
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then((response) => {
      resolve(response.data) // 请求结果
    }).catch((error) => { reject(error) })
  })
}
// 返回一个Promise发送get请求
export function get (url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then((response) => {
      resolve(response.data)
    }).catch((error) => { reject(error) })
  })
}
