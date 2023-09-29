import { Button } from "components"
import {useForm } from 'react-hook-form'

export const RegisterTemplate = () => {
  const {handleSubmit, register} = useForm()
  const setSubmit = (value) => {
    console.log('value', value)
  }
  return (
    <form noValidate action="" onSubmit={handleSubmit(setSubmit)}>
      <h1 className="title ">Đăng ký tài khoản</h1>
        <div className="mb-6">
          <label htmlFor="taiKhoan" className="label">Tài khoản</label>
          <input type="text" id="taiKhoan" className="input" />
        </div>
        <div className="mb-6">
          <label htmlFor="matKhau" className="label">Mật khẩu</label>
          <input type="text" id="matKhau" className="input" />
        </div>
        <div className="mb-6">
          <label htmlFor="hoTen" className="label">Họ tên</label>
          <input type="text" id="hoTen" className="input" />
        </div>
        <div className="mb-6">
          <label htmlFor="soDT" className="label">Số điện thoại</label>
          <input type="text" id="soDT" className="input" />
        </div>
        <div className="mb-6">
          <label htmlFor="maNhom" className="label">Mã nhóm</label>
          <input type="text" id="maNhom" className="input" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="label">Email</label>
          <input type="text" id="email" className="input" />
        </div>
      <Button className="btn-register">Đăng ký</Button>
    </form>
  )
}
