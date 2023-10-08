import { createSlice } from '@reduxjs/toolkit'
import { UserLogin } from 'types'
import { loginThunk } from '.'

type quanLyNguoiDungInitialState = {
    accessToken?: string
    UserLogin?: UserLogin
    isFetchLoading?: boolean
}

const initialState: quanLyNguoiDungInitialState = {
    accessToken: localStorage.getItem('accessToken')
}

export const quanLyNguoiDungSlice = createSlice({
    name: 'quanLyNguoiDung',
    initialState,
    reducers: {

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
    },
})

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = quanLyNguoiDungSlice