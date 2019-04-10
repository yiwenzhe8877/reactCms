import {createApi} from './axios';

//列表

export const fetchCityList = createApi('/city/list','get') // 城市列表
export const addCity = createApi('/city','post') // 新增城市
export const updateCity = createApi('/city','post') // 更新城市
export const deleteCity = createApi('/city/delete','post') // 删除城市
