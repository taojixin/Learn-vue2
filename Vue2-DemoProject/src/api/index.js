// 当前这个模块：API进行统一管理
import requests from "./request";
import mockRequest from './mockRequest'

// 三级联动的接口
// /api/product/getBaseCategoryList get 无参数





// 发请求:axios发请求返回的结果Promise对象
export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

// 获取banner（home首页轮播图接口）
export const reqGetBannerList = () => mockRequest.get('/banner');