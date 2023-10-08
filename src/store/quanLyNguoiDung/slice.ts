import { createSlice } from '@reduxjs/toolkit'
import { GetUserByAccessToken, UpdateUser, UserLogin } from 'types'
import { GetUserByAccessTokenThunk, UpdateUserThunk, loginThunk } from '.'
import { getAccessToken } from 'utils/getAccessToken'

type quanLyNguoiDungInitialState = {
    accessToken?: string
    UserLogin?: UserLogin | UpdateUser | GetUserByAccessToken
    UserUpdate?: UpdateUser
    isFetchLoading?: boolean
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
        }
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
            .addCase(GetUserByAccessTokenThunk.fulfilled, (state, { payload }) => {
                state.UserLogin = payload
                state.UserUpdate = payload
            })
            .addCase(UpdateUserThunk.fulfilled, (state, { payload }) => {
                state.UserLogin = payload
            })
    },
})

export const { reducer: quanLyNguoiDungReducer, actions: quanLyNguoiDungActions } = quanLyNguoiDungSlice