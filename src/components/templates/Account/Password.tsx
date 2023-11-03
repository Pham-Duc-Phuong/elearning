import { useForm, SubmitHandler } from "react-hook-form"
import { Button, Input } from "components"
import { useAppDispatch, useAppSelector } from "store"
import { PasswordSchema, PasswordSchemaType } from "schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { GetUserByAccessTokenThunk, UpdateUserThunk } from "store/quanLyNguoiDung"
import { toast } from 'react-toastify'

export const Password = () => {
    const { UserUpdate } = useAppSelector(state => state.quanLyNguoiDung)
    const dispatch = useAppDispatch()
    const { register, formState: { errors }, handleSubmit } = useForm<PasswordSchemaType>({
        mode: "onChange",
        resolver: zodResolver(PasswordSchema)
    })
    const setSubmit: SubmitHandler<PasswordSchemaType> = (values) => {
        if (values?.matKhau === UserUpdate?.matKhau) {
            if (values?.matKhauChange1 === values?.matKhauChange2) {
                const doiMatKhauUser = { ...UserUpdate, matKhau: values?.matKhauChange1 }
                dispatch(UpdateUserThunk(doiMatKhauUser)).unwrap().then(() => { dispatch(GetUserByAccessTokenThunk()), toast.success('Đổi mật khẩu thành công') }).catch(() => { toast.error('Vui lòng ấn F5 để load lại trang web') })
            } else {
                toast.error('Nhập lại mật khẩu mới không đúng')
            }
        } else {
            toast.error('Đổi mật khẩu thất bại')
        }
    }
    return (
        <form className="mt-[10px]" onSubmit={handleSubmit(setSubmit)}>
            <Input colorLabel="black" type="password" className="input" label="Mật khẩu hiện tại" placeholder="Mật khẩu" id="matKhau" error={errors?.matKhau?.message} register={register} />
            <Input colorLabel="black" type="password" className="input" label="Mật khẩu mới" placeholder="Mật khẩu mới" id="matKhauChange1" error={errors?.matKhauChange1?.message} register={register} />
            <Input colorLabel="black" type="password" className="input" label="Nhập lại mật khẩu mới" placeholder="Nhập lại mật khẩu mới" id="matKhauChange2" error={errors?.matKhauChange2?.message} register={register} />
            <Button htmlType="submit" className="btn-register">Đổi mật khẩu</Button>
        </form>
    )
}
