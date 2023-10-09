import { apiInstance } from "constant";
import { layDanhSachKhoaHoc } from "types";

const api = apiInstance({
    baseURL: import.meta.env.VITE_QUAN_LY_KHOA_HOC_API
})
export const quanLyKhoaHocService = {
    laydanhsachkhoahoc: (query: string) => api.get<layDanhSachKhoaHoc[]>(`/LayDanhSachKhoaHoc?MaNhom=${query}`)
}