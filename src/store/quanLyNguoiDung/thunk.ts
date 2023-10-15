import { createAsyncThunk } from '@reduxjs/toolkit'
import { LoginSchemaType } from 'schema/LoginSchema'
import { quanLyNguoiDungService } from 'services'
import { UpdateUser } from 'types'
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
export const UpdateUserThunk = createAsyncThunk(
    'UpdateUser',
    async (payload: UpdateUser, {rejectWithValue}) => {
        try {
            const data = await quanLyNguoiDungService.updateUser(payload)
            return data.data
        } catch (err) {
            return rejectWithValue(err)
        }
    }
)