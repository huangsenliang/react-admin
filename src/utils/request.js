import axios from "axios";

// 创建服务
const service = axios.create({
    baseURL: "",
    timeout: 5000,
});

// 第二步：请求拦截
service.interceptors.request.use(
    function (config) {
        // 在发送请求之前做些什么
        return config
    },
    function(error){
        // 对请求错误做些什么
        return Promise.reject(error)
    }
);

// 第三步：相应拦截
service.interceptors.response.use(
    function(response){
        return response
    },
    function(error){
        return Promise.reject(error)
    }
)

export default service;