import { apiInstance } from "constant";
import { GhiDanhKhoaHoc, LayDanhMucKhoaHoc, ThemKhoaHoc, layDanhSachKhoaHoc } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_KHOA_HOC_API
})
export const quanLyKhoaHocService = {
    laydanhsachkhoahoc: (query: string) => api.get<layDanhSachKhoaHoc[]>(`/LayDanhSachKhoaHoc?MaNhom=${query}`),
    ghiDanhKhoaHoc: (data: GhiDanhKhoaHoc) => api.post('/DangKyKhoaHoc', data),
    huyGhiDanh: (data: GhiDanhKhoaHoc) => api.post('/HuyGhiDanh', data),
    layDanhMucKhoaHoc: () => api.get<LayDanhMucKhoaHoc[]>('/LayDanhMucKhoaHoc'),
    themKhoaHoc: (data: ThemKhoaHoc) => api.post('/ThemKhoaHoc', data),
}