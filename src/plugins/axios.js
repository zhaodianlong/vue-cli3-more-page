import axios from "axios";

// let textDele = '您的公司组织关系有变动，请重新登录'
axios.defaults.timeout = 50000;

// -----------end----------------
// http请求拦截器
axios.interceptors.request.use(
  config => {
    // 添加请求头
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  data => {},
  error => {
    // 错误处理

    return Promise.reject(error);
  }
);
export default axios;
