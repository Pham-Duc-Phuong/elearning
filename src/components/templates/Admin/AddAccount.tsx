import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "components"
import { useForm, SubmitHandler } from "react-hook-form"
import { AddAccountSchema, AddAccountSchemaType } from "schema"
import cn from 'classnames'
import { quanLyNguoiDungService } from "services"
import { toast } from "react-toastify"
import { useEffect } from 'react'
import { useAppSelector } from "store"

export const AddAccount = () => {
    const { UserLogin } = useAppSelector(state => state.quanLyNguoiDung)
    useEffect(() => {

    })
    const { handleSubmit, register, formState: { errors } } = useForm<AddAccountSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(AddAccountSchema)
    })
    const setSubmit: SubmitHandler<AddAccountSchemaType> = async (values) => {
        console.log('values', values)
        try {
            await quanLyNguoiDungService.themNguoiDung(values)
            toast.success('Thêm tài khoản thành công')
        } catch (error) {
            if (UserLogin?.maLoaiNguoiDung === "HV") {
                toast.error('Mã người dùng không được phân quyền Admin')
            }
            toast.error('Thêm tài khoản thất bại')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(setSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[20px]">
                    <Input colorLabel="black" className="input" label="Tài khoản" placeholder="Tài khoản" id="taiKhoan" error={errors?.taiKhoan?.message} register={register} />
                    <Input colorLabel="black" className="input" label="Mật khẩu" placeholder="Mật khẩu" id="matKhau" error={errors?.matKhau?.message} register={register} />
                    <Input colorLabel="black" className="input" label="Họ tên" placeholder="Họ tên" id="hoTen" error={errors?.hoTen?.message} register={register} />
                    <Input colorLabel="black" className="input" label="Số điện thoại" placeholder="Số điện thoại" id="soDT" error={errors?.soDT?.message} register={register} />
                    <Input colorLabel="black" className="input" label="Mã nhóm" placeholder="Mã nhóm ( GP01, GP02, ..., GP13)" id="maNhom" error={errors?.maNhom?.message} register={register} />
                    <Input colorLabel="black" className="input" label="Email" placeholder="Email" id="email" error={errors?.email?.message} register={register} />
                </div>
                <div className="mb-6 sm:h-[70px] h-[50px] mt-[10]">
                    <label htmlFor="maLoaiNguoiDung" className={cn("label", { "text-black": 'bg-white' })}>Mã loại người dùng</label>
                    <select name="maLoaiNguoiDung" id="maLoaiNguoiDung" className="input" {...register('maLoaiNguoiDung')}>
                        <option value="">Mã loại người dùng</option>
                        <option value="GV">Giảng viên</option>
                        <option value="HV">Học viên</option>
                    </select>
                    {
                        errors?.maLoaiNguoiDung && <p className="text-red-600 text-right py-[5px] text-[11px] sm:text-[16px]">{errors?.maLoaiNguoiDung.message}</p>
                    }
                </div>
                <Button htmlType="submit" className="btn-register sm:!mt-[16px]">Đăng ký</Button>
            </form>
        </div>
    )
}
