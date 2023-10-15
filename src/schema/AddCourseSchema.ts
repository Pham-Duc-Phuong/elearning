import z from 'zod'
export const AddCourseSchema = z.object({
    maKhoaHoc: z.string().nonempty('Vui lòng nhập mã khóa học'),
    biDanh: z.string().nonempty('Vui lòng nhập bí danh'),
    tenKhoaHoc: z.string().nonempty('Vui lòng nhập tên khóa học'),
    moTa: z.string().nonempty('Vui lòng nhập mô tả'),
    luotXem: z.coerce.number(),
    danhGia: z.coerce.number(),
    hinhAnh: z.string().nonempty('Vui lòng nhập hình ảnh'),
    maNhom: z.string().nonempty('Vui lòng nhập mã nhóm'),
    ngayTao: z.string().nonempty('Vui lòng nhập ngày tạo'),
    maDanhMucKhoaHoc: z.string().nonempty('Vui lòng chọn mã danh mục khóa học'),
    taiKhoanNguoiTao: z.string().nonempty('Vui lòng nhập tài khoản'),
})
export type AddCourseSchemaType = z.infer<typeof AddCourseSchema>