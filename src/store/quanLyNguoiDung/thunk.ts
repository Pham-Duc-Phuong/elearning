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
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    })
export const GetUserByAccessTokenThunk = createAsyncThunk(
    'GetUserByAccessToken',
    async (_, { rejectWithValue }) => {
        try {
            const data = await quanLyNguoiDungService.getUserByAccessToken()
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)