import { createSlice } from '@reduxjs/toolkit'
import { GetUserByAccessToken, UserLogin } from 'types'
import { GetUserByAccessTokenThunk, loginThunk } from '.'
import { getAccessToken } from 'utils/getAccessToken'

type quanLyNguoiDungInitialState = {
    accessToken?: string
    UserLogin?: UserLogin | GetUserByAccessToken
    isFetchLoading?: boolean
}

const initialState: quanLyNguoiDungInitialState = {
    accessToken: getAccessToken()
}

export const quanLyNguoiDungSlice = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                console.log('payload', payload)
                localStorage.setItem('accessToken', payload.accessToken)
                state.isFetchLoading = false
                state.UserLogin = payload
                state.accessToken = payload.accessToken
            })
            .addCase(loginThunk.pending, (state) => {
                state.isFetchLoading = true
            })
            .addCase(GetUserByAccessTokenThunk.fulfilled, (state, {payload}) => {
                state.UserLogin = payload
            })
    },
})

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = quanLyNguoiDungSlice