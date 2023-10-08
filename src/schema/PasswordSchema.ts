import { z } from "zod";

export const PasswordSchema = z.object({
  matKhau: z.string().nonempty('Vui lòng nhập mật khấu'),
  matKhauChange1: z.string().nonempty('Vui lòng nhập mật khấu mới'),
  matKhauChange2: z.string().nonempty('Vui lòng nhập mật khấu mới'),

  
})
export type PasswordSchemaType = z.infer<typeof PasswordSchema>
