//axios二次封装
import axios from "axios";

const request = axios.create({
    baseURL:'/api',
    timeout:8000
})
//响应拦截器
request.interceptors.response.use(function (response) {
    let res = response.data
    //前端和后台商量好的，成功的状态码为0
    if (res.status == 0) {
        return res.data
        //状态码为10表示未登录
    } else if (res.status == 10) {
        window.location.href = '/#/login'
    } else {
        alert(res.msg)
    }
})
export default request