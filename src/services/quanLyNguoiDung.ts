import { apiInstance } from "constant"
import { RegisterSchemaType } from "schema"
import { LoginSchemaType } from "schema/LoginSchema"
import { GetUserByAccessToken, UpdateUser, UserLogin } from "types"

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_NGUOI_DUNG_API
})

export const quanLyNguoiDungService = {
    register: (data: RegisterSchemaType) => api.post('/DangKy', data),
    login: (data: LoginSchemaType) => api.post<UserLogin>('/DangNhap', data),
    getUserByAccessToken: () => api.post<GetUserByAccessToken>('/ThongTinNguoiDung'),
    updateUser: (data: UpdateUser) => api.put('/CapNhatThongTinNguoiDung', data)
}

//  login : (data: LoginSchemaType) => api.post<ApiResponse<UserLogin>>('/DangNhap', data)
// LoginSchemaType: là kiểu dữ liệu cho data truyền vào acctionThunk
// <ApiResponce<UserLogin>> :  là kiểu dữ liệu mà response từ backend trả về
// !!! callAPI thành công xong backend sẽ trả về response 200 thì <abc> được tạo ở file type phải khai báo y chang response đó