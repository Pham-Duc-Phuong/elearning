import { createSlice } from '@reduxjs/toolkit'
import { GetUserByAccessToken, UpdateUser, UserLogin } from 'types'
import { GetUserByAccessTokenThunk, TimKiemNguoiDungThunk, UpdateUserThunk, loginThunk } from '.'
import { getAccessToken } from 'utils/getAccessToken'
import { ControlAccountSchemaType } from 'schema'

type quanLyNguoiDungInitialState = {
    accessToken?: string
    UserLogin?: UserLogin | UpdateUser | GetUserByAccessToken
    UserUpdate?: UpdateUser
    UserGetThongTinKhoaHoc?: GetUserByAccessToken
    danhSachNguoiDung?: ControlAccountSchemaType[]
    isFetchLoading?: boolean
    controlAccount?: ControlAccountSchemaType
}

const initialState: quanLyNguoiDungInitialState = {
    accessToken: getAccessToken()
}

export const quanLyNguoiDungSlice = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    reducers: {
        logOut: (state) => {
            localStorage.removeItem('accessToken')
            state.accessToken = undefined
            state.UserLogin = undefined
        },
        timNguoiDung: (state, { payload }) => {
            state.controlAccount = payload
        }
    },
    extraReducers(builder) {
        builder
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                localStorage.setItem('accessToken', payload.accessToken)
                state.isFetchLoading = false
                state.UserLogin = payload
                state.accessToken = payload.accessToken
            })
            .addCase(loginThunk.pending, (state) => {
                state.isFetchLoading = true
            })
            .addCase(loginThunk.rejected, (state) => {
                state.isFetchLoading = false
            })
            .addCase(GetUserByAccessTokenThunk.fulfilled, (state, { payload }) => {
                state.UserLogin = payload
                state.UserUpdate = payload
                state.UserGetThongTinKhoaHoc = payload
            })
            .addCase(UpdateUserThunk.fulfilled, (state, { payload }) => {
                state.UserLogin = payload
            })
            .addCase(TimKiemNguoiDungThunk.fulfilled, (state, { payload }) => {
                state.danhSachNguoiDung = payload
            })
    },
})

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = quanLyNguoiDungSlice