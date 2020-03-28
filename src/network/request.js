import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL : 'http://106.54.54.237:8000/api/h3',
    // baseURL : 'http://123.207.32.32:8000/api/h3',
    // baseURL : 'http://152.136.185.210:8000/api/h3',
    timeout : 5000
  })
  //请求拦截
  instance.interceptors.request.use(config => {
    return config
  },error => {
    console.log(error);
  })
  //响应拦截
  instance.interceptors.response.use(config => {

    return config.data
  },error => {
    console.log(error);
  })
  return instance(config)
}
