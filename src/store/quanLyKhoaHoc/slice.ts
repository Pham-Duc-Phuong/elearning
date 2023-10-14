import { createSlice } from "@reduxjs/toolkit"
import { layDanhMucKhoaHocThunk, layDanhSachKhoaHocThunk } from "."
import { LayDanhMucKhoaHoc, layDanhSachKhoaHoc } from "types"

type quanLyKhoaHocInitialState = {
    KhoaHocList?: layDanhSachKhoaHoc[]
    DanhMucKhoaHoc?: LayDanhMucKhoaHoc[]
}
const initialState: quanLyKhoaHocInitialState = {
}
const quanLyKhoaHocSlice = createSlice({
    name: 'quanLyKhoaHoc',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(layDanhSachKhoaHocThunk.fulfilled, (state, { payload }) => {
            state.KhoaHocList = payload
        })
        builder.addCase(layDanhMucKhoaHocThunk.fulfilled, (state, { payload }) => {
            state.DanhMucKhoaHoc = payload
        })
    },
})
export const { actions: quanLyKhoaHocAction, reducer: quanLyKhoaHocReducer } = quanLyKhoaHocSlice