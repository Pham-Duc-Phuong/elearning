import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginSchemaType } from 'schema/LoginSchema'
import { quanLyNguoiDungService } from 'services'
import { sleep } from 'utils'
export const loginThunk = createAsyncThunk(
    'quanLyNguoiDung/DangNhap',
    async (payload: LoginSchemaType, { rejectWithValue }) => {
        try {
            const data = await quanLyNguoiDungService.login(payload)
            await sleep()
            return data.data.content
        } catch(err) {
            return rejectWithValue(err)
        }
}

)