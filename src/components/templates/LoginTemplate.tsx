import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "components"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { LoginSchema, LoginSchemaType } from "schema"
import { useAppDispatch, useAppSelector } from "store"
import { loginThunk } from "store/quanLyNguoiDung"
import { handleError } from "utils"

export const LoginTemplate = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { handleSubmit, register, formState: { errors } } = useForm<LoginSchemaType>({
        mode:"onChange",
        resolver: zodResolver(LoginSchema)
    })
    const {isFetchLoading} = useAppSelector(state => state.quanLyNguoiDung)
    const setSubmit:SubmitHandler<LoginSchemaType> = (values) => {
       dispatch(loginThunk(values)).unwrap().then(() => {
        navigate ('/')
        toast.success('CycberSoft xin chào bạn')
       })
       .catch ((err)=> {
            handleError(err,'Tài khoản hoặc mật khẩu không đúng')
       })
    }
    return (
        <form onSubmit={handleSubmit(setSubmit)}>
            <h1 className="title">Đăng nhập</h1>
            <Input className="input" label="Tài khoản" placeholder="Tài khoản" id="taiKhoan" error={errors?.taiKhoan?.message} register={register} />
            <Input className="input" label="Mật khẩu" placeholder="Mật khẩu" id="matKhau" error={errors?.matKhau?.message} register={register} />
            <Button htmlType="submit" className="btn-register" loading={isFetchLoading}>Đăng nhập</Button>
        </form>
    )
}
