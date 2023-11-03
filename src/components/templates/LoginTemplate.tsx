import { zodResolver } from "@hookform/resolvers/zod"
import { Button, Input } from "components"
import { PATH } from "constant"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { LoginSchema, LoginSchemaType } from "schema"
import { useAppDispatch, useAppSelector } from "store"
import { loginThunk } from "store/quanLyNguoiDung"
import cn from 'classnames'
import { useState } from "react"

export const LoginTemplate = () => {
    const taiKhoanDangNhap = [
        {
            taiKhoan: "phuongporo801",
            matKhau: '123'
        },
        {
            taiKhoan: "phuongporo802",
            matKhau: '123'
        },
        {
            taiKhoan: "phuongporo803",
            matKhau: '123'
        },
        {
            taiKhoan: "phuongporo804",
            matKhau: '123'
        }
    ]
    const [openCopyUser, setOpenCopyUser] = useState(false)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { handleSubmit, register, formState: { errors } } = useForm<LoginSchemaType>({
        mode: "onChange",
        resolver: zodResolver(LoginSchema)
    })
    const { isFetchLoading } = useAppSelector(state => state.quanLyNguoiDung)
    const setSubmit: SubmitHandler<LoginSchemaType> = (values) => {
        dispatch(loginThunk(values)).unwrap().then(() => {
            navigate('/')
            toast.success('CycberSoft xin chào bạn')
        }).catch((err) => {
            toast.error(err.response.data)
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit(setSubmit)}>
                <div className="flex items-center justify-between">
                    <h1 className="title">Đăng nhập</h1>
                    <div className="flex items-center justify-between bg-red-600 hover:bg-red-800 p-2 rounded-lg" onClick={() => { setOpenCopyUser(true) }}>
                        <i className="fa-regular fa-user text-white text-[18px] mr-2"></i>
                        <span className="text-white font-[500]">Lấy tài khoản</span>
                    </div>
                </div>
                <Input className="input" label="Tài khoản" placeholder="Tài khoản" id="taiKhoan" error={errors?.taiKhoan?.message} register={register} defaultValue={'phuongporo801'} />
                <Input type="password" className="input" label="Mật khẩu" placeholder="Mật khẩu" id="matKhau" error={errors?.matKhau?.message} register={register} defaultValue={'123'} />
                <Button htmlType="submit" className="btn-register" loading={isFetchLoading}>Đăng nhập</Button>
                <div className="flex justify-center">
                    <span className="text-white mr-[15px] cursor-pointer" onClick={() => {
                        toast.info('Chức năng đang cập nhật')
                    }}>Quên mật khẩu?</span>
                    <span className="text-white">|</span>
                    <span className="text-white ml-[15px] cursor-pointer" onClick={() => { navigate(PATH.register) }}>Đăng ký</span>
                </div>
            </form>
            <div className={cn("absolute top-0 left-0 bg-[#111827] rounded-lg w-full", {
                "hidden": !openCopyUser
            })}>
                <div className="flex justify-end">
                    <button className="btn-reset me-3 mt-3 py-[4px]" onClick={() => { setOpenCopyUser(false) }}>X</button>
                </div>
                {
                    taiKhoanDangNhap?.map((a, index) => (
                        <div className="border border-white m-3 rounded-lg" key={a.taiKhoan}>
                            <div className="flex items-end gap-3 p-2">
                                <div className="w-full">
                                    <p className="label">{`Tài khoản ${index + 1}`}</p>
                                    <p className="input">{a.taiKhoan}</p>
                                </div>
                                <div className="w-full">
                                    <p className="label">{`Mật khẩu ${index + 1}`}</p>
                                    <p className="input">{a.matKhau}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
