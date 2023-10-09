import { createAsyncThunk } from "@reduxjs/toolkit";
import { quanLyKhoaHocService } from "services";

export const layDanhSachKhoaHocThunk = createAsyncThunk(
    'layDanhSachKhoaHoc',
    async (_, {rejectWithValue}) => {
        try {
            const data = await quanLyKhoaHocService.laydanhsachkhoahoc("GP09")
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)