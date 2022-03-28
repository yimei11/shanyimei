import axios from 'axios'

let instance = axios.create({
    baseURL:"/api",
    timeout:2000
})
// 请求拦截
instance.interceptors.request.use(function(config){
    return config
})
// 响应拦截
instance.interceptors.response.use(function(config){
    return config
})

export default instance