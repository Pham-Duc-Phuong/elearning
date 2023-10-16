import { createSlice } from "@reduxjs/toolkit"
import { layDanhMucKhoaHocThunk, layDanhSachKhoaHocThunk } from "."
import { LayDanhMucKhoaHoc, layDanhSachKhoaHoc } from "types"

type quanLyKhoaHocInitialState = {
    KhoaHocList?: layDanhSachKhoaHoc[]
    DanhMucKhoaHoc?: LayDanhMucKhoaHoc[]
    isLoadingCourse?: boolean
    editKhoaHoc?: layDanhSachKhoaHoc
}
const initialState: quanLyKhoaHocInitialState = {
    editKhoaHoc: undefined
}
const quanLyKhoaHocSlice = createSlice({
    name: 'quanLyKhoaHoc',
    initialState,
    reducers: {
        timKhoaHoc: (state, {payload}) => {
            state.editKhoaHoc = payload
        }
    },
    extraReducers(builder) {
        builder.addCase(layDanhSachKhoaHocThunk.fulfilled, (state, { payload }) => {
            state.KhoaHocList = payload
            state.isLoadingCourse = false
        })
        builder.addCase(layDanhSachKhoaHocThunk.pending, (state) => {
            state.isLoadingCourse = true
        })
        builder.addCase(layDanhMucKhoaHocThunk.fulfilled, (state, { payload }) => {
            state.DanhMucKhoaHoc = payload
        })
    },
})
export const { actions: quanLyKhoaHocAction, reducer: quanLyKhoaHocReducer } = quanLyKhoaHocSlice