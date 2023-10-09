import { createSlice } from "@reduxjs/toolkit"
import { layDanhSachKhoaHocThunk } from "."
import { layDanhSachKhoaHoc } from "types"

type quanLyKhoaHocInitialState = {
    KhoaHocList: layDanhSachKhoaHoc[]
}
const initialState:quanLyKhoaHocInitialState = {
    KhoaHocList: []
}
const quanLyKhoaHocSlice = createSlice({
    name: 'quanLyKhoaHoc',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(layDanhSachKhoaHocThunk.fulfilled, (state, {payload}) => {
           state.KhoaHocList = payload
        })
    },
})
export const {actions: quanLyKhoaHocAction, reducer: quanLyKhoaHocReducer} = quanLyKhoaHocSlice