import { z } from 'zod'
export const AddAccountSchema = z.object({
    taiKhoan: z.string().nonempty('Vui lòng nhập tài khoản'),
    matKhau: z.string().nonempty('Vui lòng nhập mật khấu'),
    hoTen: z.string().nonempty('Vui lòng nhập họ tên'),
    soDT: z.string().nonempty('Vui lòng nhập số điện thoại'),
    maNhom: z.string().nonempty('Vui lòng nhập mã nhóm'),
    email: z.string().nonempty('Vui lòng nhập email'),
    maLoaiNguoiDung: z.string().nonempty('Vui lòng nhập mã loại người dùng')
})
export type AddAccountSchemaType = z.infer<typeof AddAccountSchema>