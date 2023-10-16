import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyKhoaHocService } from "services";
import { GhiDanhKhoaHoc } from "types";
import { sleep } from "utils";

export const layDanhSachKhoaHocThunk = createAsyncThunk(
    'layDanhSachKhoaHoc',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyKhoaHocService.laydanhsachkhoahoc("GP06")
            await sleep()
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const ghiDanhKhoaHocThunk = createAsyncThunk(
    'ghiDanhKhoaHoc',
    async (payload: GhiDanhKhoaHoc, { rejectWithValue }) => {
        try {
            const data = await quanLyKhoaHocService.ghiDanhKhoaHoc(payload)
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const huyGhiDanhThunk = createAsyncThunk(
    'huyGhiDanh',
    async (payload: GhiDanhKhoaHoc, { rejectWithValue }) => {
        try {
            const data = await quanLyKhoaHocService.huyGhiDanh(payload)
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const layDanhMucKhoaHocThunk = createAsyncThunk(
    'LayDanhMucKhoaHoc',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyKhoaHocService.layDanhMucKhoaHoc()
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)
export const xoaKhoaHocThunk = createAsyncThunk(
    'xoaKhoaHoc',
    async (payload: string, { rejectWithValue }) => {
        console.log('payload', payload)
        try {
            const data = await quanLyKhoaHocService.xoaKhoaHoc(payload)
            return data.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)