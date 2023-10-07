import { z } from "zod";

export const RegisterSchema = z.object({
  taiKhoan: z.string().nonempty('Vui lòng nhập tài khoản'),
  matKhau: z.string().nonempty('Vui lòng nhập mật khấu'),
  hoTen: z.string().nonempty('Vui lòng nhập họ tên'),
  soDT: z.string().nonempty('Vui lòng nhập số điện thoại'),
  maNhom: z.string().nonempty('Vui lòng nhập mã nhóm'),
  email: z.string().nonempty('Vui lòng nhập email')
})
export type RegisterSchemaType = z.infer<typeof RegisterSchema>
