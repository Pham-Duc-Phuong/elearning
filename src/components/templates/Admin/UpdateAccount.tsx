import { useState, useEffect } from 'react'
import { zodResolver } from "@hookform/resolvers/zod"
import { Modal } from "antd"
import { Button, Input } from "components"
import { useForm, SubmitHandler } from 'react-hook-form'
import { AccountSchema, AccountSchemaType, } from "schema"
import { useAppDispatch, useAppSelector } from 'store'
import { TimKiemNguoiDungThunk, XoaNguoiDungThunk, quanLyNguoiDungActions } from 'store/quanLyNguoiDung'
import { UpdateUser } from 'types'
import cn from 'classnames'
import { quanLyNguoiDungService } from 'services'
import { toast } from 'react-toastify'
export const UpdateAccount = () => {
    const { handleSubmit, register, formState: { errors }, reset } = useForm<AccountSchemaType>({
        mode: 'onChange',
        resolver: zodResolver(AccountSchema)
    })
    const dispatch = useAppDispatch()
    const [chonMaNhom, setchonMaNhom] = useState('GP01')
    const { danhSachNguoiDung, controlAccount } = useAppSelector(state => state.quanLyNguoiDung)
    const [searchAccount, setSearchAccount] = useState('')
    useEffect(() => {
        dispatch(TimKiemNguoiDungThunk(chonMaNhom))
        reset({ ...controlAccount, soDT: controlAccount?.soDt, maNhom: chonMaNhom })
    }, [dispatch, chonMaNhom, reset, controlAccount])
    const searchAccountList = danhSachNguoiDung?.filter(a => a.taiKhoan.toLowerCase().includes(searchAccount?.toLowerCase()))
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    const setSubmit: SubmitHandler<UpdateUser> = async (values) => {
        try {
            await quanLyNguoiDungService.updateUser(values)
            dispatch(TimKiemNguoiDungThunk(chonMaNhom))
            toast.success('Cập nhật tài khoản thành công')
        } catch (error) {
            toast.error('Cập nhật tài khoản thất bại')
        }
    }
    return (
        <div className="">
            <div className='flex justify-between gap-[10px] sm:gap-[30px]'>
                <form className='my-[15px] w-full'>
                    <label htmlFor="setMaNhom" className={cn("label", { "text-black": 'bg-white' })}>Mã nhóm</label>
                    <select id="setMaNhom" className='input' onChange={(event) => { setchonMaNhom(event.target.value) }}>
                        <option value="GP01">GP01</option>
                        <option value="GP02">GP02</option>
                        <option value="GP03">GP03</option>
                        <option value="GP04">GP04</option>
                        <option value="GP05">GP05</option>
                        <option value="GP06">GP06</option>
                        <option value="GP07">GP07</option>
                        <option value="GP08">GP08</option>
                        <option value="GP09">GP09</option>
                        <option value="GP10">GP10</option>
                        <option value="GP11">GP11</option>
                        <option value="GP12">GP12</option>
                        <option value="GP13">GP13</option>
                    </select>
                </form>
                <form className='my-[15px] w-full'>
                    <label htmlFor="search" className={cn("label", { "text-black": 'bg-white' })}>Tìm kiếm</label>
                    <div className='flex'>
                        <input type="text" id='search' className='input w-full !rounded-r-none !rounded-l-lg' onChange={(e) => { setSearchAccount(e.target.value) }} />
                        <button className='btn-reset !rounded-l-none !rounded-r-lg'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
            <Modal footer={false} open={isModalOpen} onCancel={handleCancel} closeIcon={false}>
                <form onSubmit={handleSubmit(setSubmit)}>
                    <div className="flex justify-end">
                        <button type="reset" className="btn-reset">reset</button>
                        <button type="reset" className="btn-reset !from-orange-400 !to-red-600 ml-[10px]" onClick={() => { handleCancel() }}>X</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[20px]">
                        <Input colorLabel="black" className="input pointer-events-none !text-gray-400" label="Tài khoản" placeholder="Tài khoản" id="taiKhoan" error={errors?.taiKhoan?.message} register={register} />
                        <Input colorLabel="black" className="input" label="Mật khẩu" placeholder="Mật khẩu" id="matKhau" error={errors?.matKhau?.message} register={register} />
                        <Input colorLabel="black" className="input" label="Họ tên" placeholder="Họ tên" id="hoTen" error={errors?.hoTen?.message} register={register} />
                        <Input colorLabel="black" className="input" label="Số điện thoại" placeholder="Số điện thoại" id="soDT" error={errors?.soDT?.message} register={register} />
                        <Input colorLabel="black" className="input" label="Email" placeholder="Email" id="email" error={errors?.email?.message} register={register} />
                        <Input colorLabel="black" className="input pointer-events-none !text-gray-400" label="Mã nhóm" placeholder="Mã nhóm" id="maNhom" error={errors?.maNhom?.message} register={register} />
                    </div>
                    <div className="mb-6 sm:h-[70px] h-[50px] sm:mt-[20px]">
                        <label htmlFor="maLoaiNguoiDung" className='label'>Mã loại người dùng</label>
                        <select name="maLoaiNguoiDung" id="maLoaiNguoiDung" className="input" {...register('maLoaiNguoiDung')}>
                            <option value="">Mã loại người dùng</option>
                            <option value="GV">Giảng viên</option>
                            <option value="HV">Học viên</option>
                        </select>
                        {
                            errors?.maLoaiNguoiDung && <p className="text-red-600 text-right py-[5px] text-[11px] sm:text-[16px]">{errors?.maLoaiNguoiDung.message}</p>
                        }
                    </div>
                    <Button htmlType="submit" className="btn-register sm:!mt-[16px]">Cập nhật</Button>
                    <Button htmlType="reset" className="btn-cancel" onClick={() => { handleCancel() }}>Thoát</Button>
                </form>
            </Modal>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-[10px] text-gray-700 bg-gray-50 lg:text-[18px] md:text-[16px] sm:text-[14px] dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-[10px] py-3">
                            Tài khoản
                        </th>
                        <th scope="col" className="px-[5px] py-3">
                            <p className="flex items-center"><i className="fa-regular fa-pen-to-square text-sky-400 mr-[8px]"></i><span className="text-sky-400">Edit</span></p>
                        </th>
                        <th className="px-[8px] py-3">
                            <i className="fa-regular fa-trash-can text-16 text-red-600"></i>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (searchAccountList ? searchAccountList : danhSachNguoiDung)?.map((a, index) => (
                            <tr key={index} className="bg-white border-b text-[10px] lg:text-[18px] md:text-[16px] sm:text-[14px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="font-medium text-gray-900 whitespace-nowrap dark:text-white px-[10px] py-4">
                                    {a.taiKhoan}
                                </th>
                                <td className="px-[5px] py-4">
                                    <button type="button" className="text-[10px] md:text-[16px] sm:text-[14px] cursor-pointer text-sky-400 flex items-center" onClick={() => {
                                        showModal(), dispatch(quanLyNguoiDungActions.timNguoiDung(a))
                                    }}><i className="fa-regular fa-pen-to-square mr-[5px]"></i><span>Edit</span></button>
                                </td>
                                <td className="px-[8px] py-4">
                                    <button onClick={() => {
                                        dispatch(XoaNguoiDungThunk(a.taiKhoan)).unwrap().then((err) => { dispatch(TimKiemNguoiDungThunk(chonMaNhom)), toast.success('Xóa thành công'), console.log(err.responce.data) }).catch((err) => { toast.error(err.response.data) })
                                    }}><i className="fa-regular fa-trash-can text-[10px] md:text-[16px] sm:text-[14px] cursor-pointer text-red-600"></i></button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
