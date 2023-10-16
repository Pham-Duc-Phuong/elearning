import { apiInstance } from "constant";
import { AddCourseSchemaType } from "schema";
import { GhiDanhKhoaHoc, LayDanhMucKhoaHoc, layDanhSachKhoaHoc } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_KHOA_HOC_API
})
export const quanLyKhoaHocService = {
    laydanhsachkhoahoc: (query: string) => api.get<layDanhSachKhoaHoc[]>(`/LayDanhSachKhoaHoc?MaNhom=${query}`),
    ghiDanhKhoaHoc: (data: GhiDanhKhoaHoc) => api.post('/DangKyKhoaHoc', data),
    huyGhiDanh: (data: GhiDanhKhoaHoc) => api.post('/HuyGhiDanh', data),
    layDanhMucKhoaHoc: () => api.get<LayDanhMucKhoaHoc[]>('/LayDanhMucKhoaHoc'),
    themKhoaHoc: (data: AddCourseSchemaType) => api.post('/ThemKhoaHoc', data),
    capNhatKhoaHoc: (data: AddCourseSchemaType) => api.put('/CapNhatKhoaHoc', data),
    xoaKhoaHoc: (query: string) => api.delete(`/XoaKhoaHoc?MaKhoaHoc=${query}`),
}