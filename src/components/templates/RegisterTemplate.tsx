import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "components"
import { SubmitHandler, useForm } from 'react-hook-form'
import { RegisterSchema, RegisterSchemaType } from "schema"
import { quanLyNguoiDungService } from "services"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { PATH } from "constant"

export const RegisterTemplate = () => {
  const navigate = useNavigate()
  const { handleSubmit, register, formState: { errors } } = useForm<RegisterSchemaType>({
    mode: "onChange",
    resolver: zodResolver(RegisterSchema)
  })
  const setSubmit: SubmitHandler<RegisterSchemaType> = async (values) => {
    try {
      await quanLyNguoiDungService.register(values)
      toast.success('Đăng ký thành công')
      navigate(PATH.login)
    } catch (err) {
      toast.error(err.response.data)
    }
  }
  return (
    <form noValidate action="" onSubmit={handleSubmit(setSubmit)}>
      <h1 className="title">Đăng ký tài khoản</h1>
      <Input className="input" label="Tài khoản" placeholder="Tài khoản" id="taiKhoan" error={errors?.taiKhoan?.message} register={register} />
      <Input className="input" label="Mật khẩu" placeholder="Mật khẩu" id="matKhau" error={errors?.matKhau?.message} register={register} />
      <Input className="input" label="Họ tên" placeholder="Họ tên" id="hoTen" error={errors?.hoTen?.message} register={register} />
      <Input className="input" label="Số điện thoại" placeholder="Số điện thoại" id="soDT" error={errors?.soDT?.message} register={register} />
      <Input className="input" label="Mã nhóm" placeholder="Mã nhóm ( GP01, GP02, ..., GP13)" id="maNhom" error={errors?.maNhom?.message} register={register} />
      <Input className="input" label="Email" placeholder="Email" id="email" error={errors?.email?.message} register={register} />
      <Button htmlType="submit" className="btn-register">Đăng ký</Button>
      <div className="flex justify-center">
        <span className="text-white ml-[15px] cursor-pointer underline" onClick={() => { navigate(PATH.login) }}>Đã có tài khoản !!!</span>
      </div>
    </form>
  )
}
