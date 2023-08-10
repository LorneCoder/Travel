import Mock from 'mockjs'
import homeJson from './mockData/home.json'
import aiHomeJson from './mockData/aiHomeData.json'
import detailJson from './mockData/detail.json'

//定义mock请求拦截
Mock.mock('/api/mock/home', homeJson)
Mock.mock('/mock/home', aiHomeJson)
Mock.mock('/mock/detail', detailJson)