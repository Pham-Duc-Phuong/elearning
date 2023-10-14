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
    chiTietKhoaHocGhiDanh: {
        biDanh: string
        danhGia: number
        hinhAnh: string
        luotXem: number
        maKhoaHoc: string
        moTa: string
        ngayTao: string
        tenKhoaHoc: string
    }[]
}
export type UpdateUser = Omit<GetUserByAccessToken, 'chiTietKhoaHocGhiDanh'>
