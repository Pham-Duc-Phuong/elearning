import { SubmitHandler, useForm } from "react-hook-form"
import { Button, Input } from "components"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "store"
import { zodResolver } from "@hookform/resolvers/zod"
import { AccountSchema, AccountSchemaType } from "schema"
import { UpdateUser } from "types"
import { GetUserByAccessTokenThunk, UpdateUserThunk } from "store/quanLyNguoiDung"
import { toast } from 'react-toastify'
export const AccountInfo = () => {
    const { handleSubmit, reset, register, formState: { errors } } = useForm<AccountSchemaType>({
        mode: "onChange",
        resolver: zodResolver(AccountSchema)
    })
    const dispatch = useAppDispatch()
    const { UserLogin } = useAppSelector(state => state.quanLyNguoiDung)
    useEffect(() => {
        reset(UserLogin)
    }, [UserLogin, reset])
    const setSubmit: SubmitHandler<UpdateUser> = (values) => {
        dispatch(UpdateUserThunk(values)).unwrap().then(() => { dispatch(GetUserByAccessTokenThunk()), toast.success('Cập nhật thành công') }).catch(() => { toast.error('Vui lòng ấn F5') })
    }
    return (
        <form className="mt-[10px]" onSubmit={handleSubmit(setSubmit)}>
            <Input className="input pointer-events-none !text-gray-400" label="Tài khoản" placeholder="Tài khoản" id="taiKhoan" error={errors?.taiKhoan?.message} register={register} />
            <Input className="input" label="Họ tên" placeholder="Họ tên" id="hoTen" error={errors?.hoTen?.message} register={register} />
            <Input className="input" label="Số điện thoại" placeholder="Số điện thoại" id="soDT" error={errors?.soDT?.message} register={register} />
            <Input className="input pointer-events-none !text-gray-400" label="Email" placeholder="Email" id="email" error={errors?.email?.message} register={register} />
            <Input hidden={true} className="input pointer-events-none !text-gray-400" label="Mật khẩu" placeholder="Mật khẩu" id="matKhau" error={errors?.matKhau?.message} register={register} />
            <Input className="input pointer-events-none !text-gray-400" label="Mã nhóm" placeholder="Mã nhóm ( GP01, GP02, ..., GP13)" id="maNhom" error={errors?.maNhom?.message} register={register} />
            <Input className="input pointer-events-none !text-gray-400" label="Mã loại người dùng" placeholder="Mã loại người dùng" id="maLoaiNguoiDung" error={errors?.maLoaiNguoiDung?.message} register={register} />
            <Button htmlType="submit" className="btn-register">Cập nhật</Button>
        </form>
    )
}
