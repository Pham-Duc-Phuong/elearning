import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "components"
import { SubmitHandler, useForm } from "react-hook-form"
import { LoginSchema, LoginSchemaType } from "schema/LoginSchema"

export const LoginTemplate = () => {
    const { handleSubmit, register, formState: { errors } } = useForm<LoginSchemaType>({
        mode:"onChange",
        resolver: zodResolver(LoginSchema)
    })
    const setSubmit:SubmitHandler<LoginSchemaType> = (values) => {
        
    }
    return (
        <form onSubmit={handleSubmit(setSubmit)}>
            <h1 className="title">Đăng nhập</h1>
            <Input className="input" label="Tài khoản" placeholder="Tài khoản" id="taiKhoan" error={errors?.taiKhoan?.message} register={register} />
            <Input className="input" label="Mật khẩu" placeholder="Mật khẩu" id="matKhau" error={errors?.matKhau?.message} register={register} />
            <Button htmlType="submit" className="btn-register">Đăng ký</Button>
        </form>
    )
}
