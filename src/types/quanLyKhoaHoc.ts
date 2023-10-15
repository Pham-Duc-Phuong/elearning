export type layDanhSachKhoaHoc = {
    maKhoaHoc: string
    biDanh: string
    tenKhoaHoc: string
    moTa: string
    luotXem: number
    hinhAnh: string
    maNhom: string
    ngayTao: string
    soLuongHocVien: number
    nguoiTao: {
        taiKhoan: string
        hoTen: string
        maLoaiNguoiDung: string
        tenLoaiNguoiDung: string
    }
    danhMucKhoaHoc: {
        maDanhMucKhoahoc: string
        tenDanhMucKhoaHoc: string
    }
}

export type GhiDanhKhoaHoc = {
    maKhoaHoc: string
    taiKhoan: string
}
export type LayDanhMucKhoaHoc = {
    maDanhMuc: string
    tenDanhMuc: string
}
export type ThemKhoaHoc = {
    maKhoaHoc: string
    biDanh: string
    tenKhoaHoc: string
    moTa: string
    luotXem: 0
    danhGia: 0
    hinhAnh: string
    maNhom: string
    ngayTao: string
    maDanhMucKhoaHoc: string
    taiKhoanNguoiTao: string
}