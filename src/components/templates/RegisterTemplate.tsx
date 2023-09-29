import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "components"
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterSchema, RegisterSchemaType } from "schema"
import { quanLyUserService } from "services"
import { toast } from "react-toastify"

export const RegisterTemplate = () => {
  const { handleSubmit, register, formState: { errors } } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema)
  })
  const setSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
    try {
      await quanLyUserService.register(values)
      toast.success('Đăng ký thành công')
    } catch (err) {
      toast.error(err?.response?.data?.content)
    }
  }
  return (
    <form noValidate action="" onSubmit={handleSubmit(setSubmit)}>
      <h1 className="title ">Đăng ký tài khoản</h1>
      <Input className="input" label="Tài khoản" placeholder="Tài khoản" id="taiKhoan" error={errors?.taiKhoan?.message} register={register} />
      <Input className="input" label="Mật khẩu" placeholder="Mật khẩu" id="matKhau" error={errors?.matKhau?.message} register={register} />
      <Input className="input" label="Họ tên" placeholder="Họ tên" id="hoTen" error={errors?.hoTen?.message} register={register} />
      <Input className="input" label="Số điện thoại" placeholder="Số điện thoại" id="soDt" error={errors?.soDt?.message} register={register} />
      <Input className="input" label="Mã nhóm" placeholder="Mã nhóm" id="maNhom" error={errors?.maNhom?.message} register={register} />
      <Input className="input" label="Email" placeholder="Email" id="email" error={errors?.email?.message} register={register} />
      <Button htmlType="submit" className="btn-register">Đăng ký</Button>
    </form>
  )
}
