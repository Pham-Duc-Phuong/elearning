import {combineReducers} from '@reduxjs/toolkit'
import { quanLyNguoiDungReducer } from './quanLyNguoiDung/slice'
import { quanLyKhoaHocReducer } from './quanLyKhoaHoc'
export const rootReducer = combineReducers({
    quanLyNguoiDung: quanLyNguoiDungReducer,
    quanLyKhoaHoc: quanLyKhoaHocReducer,
    
})