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
//手机号验证码登录
export const reqSmsLogin = (phone,code) => ajax(BASE +'/login_sms',{phone,code},'POST')
//用户名密码登录
export const reqPwdLogin = (phone,code,captcha) => ajax(BASE +'/login_pwd',{phone,code,captcha},'POST')
//获取当前用户信息
export const reqUserInfo = () => ajax(BASE + '/userinfo')
//退出登录
export const reqLogout = () => ajax(BASE + '/logout')

export const reqShopInfo = () => ajax(BASE + '/info')
export const reqShopGoods = () => ajax(BASE + '/goods')
export const reqShopRatins = () => ajax(BASE + '/ratings')


