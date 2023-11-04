import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { GetUserByAccessTokenThunk, loginThunk } from "./quanLyNguoiDung";

export const store  = configureStore({
    reducer: rootReducer
})

store.dispatch(loginThunk({taiKhoan: 'phuongporo803', matKhau: '123'}))
store.dispatch(GetUserByAccessTokenThunk())

// UseState in TypeScript
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector


// UseDispatch in TypeScript
export type AppDispatch = typeof store.dispatch
export const useAppDispatch : () => AppDispatch = useDispatch