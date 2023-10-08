export type UserLogin = {
    taiKhoan: string
    hoTen: string
    email: string
    soDT: string
    maNhom: string
    maLoaiNguoiDung: string
    accessToken: string
}
export type GetUserByAccessToken = Omit<UserLogin, 'accessToken'> & {
    matKhau: string
    chiTietKhoaHocGhiDanh:[]
}
export type UpdateUser = Omit<GetUserByAccessToken, 'chiTietKhoaHocGhiDanh'>