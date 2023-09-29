import { apiInstance } from "constant"
import { RegisterSchemaType } from "schema"
import { LoginSchemaType } from "schema/LoginSchema"

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API
})

export const quanLyUserService = {
    register: (data: RegisterSchemaType) => api.post('/DangKy', data),
    login : (data: LoginSchemaType) => api.post('DangNhap', data)
}