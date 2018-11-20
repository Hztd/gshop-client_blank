/*
包含N个请求函数模块
 */
import ajax from './ajax'
const BASE = '/api'

//[1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
export const reqAddress = (longitude,latitude) => ajax(BASE+ `/position/${latitude},${longitude}`)
//[2、获取食品分类列表](#2获取食品分类列表)<br/>
export const reqFoodCategorys = () => ajax(BASE+ '/index_category')
//[3、根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)<br/>
export const reqShops = (longitude,latitude) => ajax(BASE+ '/shops',{latitude,longitude})
//发送短信验证码
export const reqSendCode = (phone) => ajax(BASE + '/sendcode',{phone})
