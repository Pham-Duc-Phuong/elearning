import { z } from 'zod'
export const ControlAccountSchema = z.object({
    taiKhoan: z.string().nonempty('Vui lòng nhập tài khoản'),
    matKhau: z.string().nonempty('Vui lòng nhập mật khấu'),
    hoTen: z.string().nonempty('Vui lòng nhập họ tên'),
    soDt: z.string().nonempty('Vui lòng nhập số điện thoại'),
    tenLoaiNguoiDung: z.string().nonempty('Vui lòng nhập tên loại người dùng'),
    email: z.string().nonempty('Vui lòng nhập email'),
    maLoaiNguoiDung: z.string().nonempty('Vui lòng nhập mã loại người dùng')
})
export type ControlAccountSchemaType = z.infer<typeof ControlAccountSchema>