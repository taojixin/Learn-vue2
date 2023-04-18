// 对axios精进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
// start: 进度条开始 done: 进度条结束
// 引入进度条样式(可以在该文件中修改样式，如修改进度条颜色)
import 'nprogress/nprogress.css';

// 1.利用axios对象的create方法（自定义create实例）创建一个axios实例
// 2.request就是axios，只是需要自定义一些配置
const requests = axios.create({
  baseURL: '/api',
  // 超时时间，超过5秒请求未成功结束请求
  timeout: 5000,
})

// 请求拦截器：在发请求之前，请求拦截器可以检测到，可以在请求发送之前做一些事情
requests.interceptors.request.use((config) => {
  // config 是配置对象，对象里面有一个属性很重要，headers请求头
  // 进度条开始
  nprogress.start();
  return config;
});

// 响应拦截器
requests.interceptors.response.use((res) => {
  // 响应成功的回调：服务器响应数据回来以后，响应拦截器可以检测到，可以做一些事情
  // 进度条结束
  nprogress.done()
  return res.data;
},(error) => {
  // 响应失败的回调：
  return Promise.reject(new Error('faile'))
})






// 对外暴露
export default requests;