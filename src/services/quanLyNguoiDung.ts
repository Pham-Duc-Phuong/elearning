import { apiInstance } from "constant"
import { AddAccountSchemaType, ControlAccountSchemaType, RegisterSchemaType } from "schema"
import { LoginSchemaType } from "schema/LoginSchema"
import { GetUserByAccessToken, UpdateUser, UserLogin } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API
})

export const quanLyNguoiDungService = {
    register: (data: RegisterSchemaType) => api.post('/DangKy', data),
    login: (data: LoginSchemaType) => api.post<UserLogin>('/DangNhap', data),
    getUserByAccessToken: () => api.post<GetUserByAccessToken>('/ThongTinNguoiDung'),
    updateUser: (data: UpdateUser) => api.put('/CapNhatThongTinNguoiDung', data),
    themNguoiDung: (data: AddAccountSchemaType) => api.post('/ThemNguoiDung', data),
    timKiemNguoiDung: (query:string) => api.get<ControlAccountSchemaType[]>(`/TimKiemNguoiDung?MaNhom=${query}`),
    xoaNguoiDung: (query: string) => api.delete(`/XoaNguoiDung?TaiKhoan=${query}`),
}

//  login : (data: LoginSchemaType) => api.post<ApiResponse<UserLogin>>('/DangNhap', data)
// LoginSchemaType: là kiểu dữ liệu cho data truyền vào acctionThunk
// <ApiResponce<UserLogin>> :  là kiểu dữ liệu mà response từ backend trả về
// !!! callAPI thành công xong backend sẽ trả về response 200 thì <UserLogin> được tạo ở file type hoặc schemaType phải khai báo y chang response đó