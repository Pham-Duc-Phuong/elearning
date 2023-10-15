import { Input, Button } from "components"
import { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AddCourseSchema, AddCourseSchemaType } from "schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch, useAppSelector } from "store"
import { toast } from 'react-toastify'
import { ThemKhoaHoc } from "types"
import { layDanhSachKhoaHocThunk } from "store/quanLyKhoaHoc"
import { Modal } from "antd"
import cn from 'classnames'
import { quanLyKhoaHocService } from "services"

export const AddCourse = () => {
  const dispatch = useAppDispatch()
  const { handleSubmit, register, formState: { errors }, reset } = useForm<AddCourseSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AddCourseSchema)
  })
  const { KhoaHocList } = useAppSelector(state => state.quanLyKhoaHoc)
  const { UserLogin } = useAppSelector(state => state.quanLyNguoiDung)
  useEffect(() => {
    reset({ ...UserLogin, taiKhoanNguoiTao: UserLogin?.taiKhoan })
    dispatch(layDanhSachKhoaHocThunk())
  }, [reset, UserLogin, dispatch])
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [openBtnUpdate, setOpenBtnUpdate] = useState(false);
  const [openBtnAdd, setOpenBtnAdd] = useState(false);
  const setSubmit: SubmitHandler<ThemKhoaHoc> = async (values) => {
    try {
      await quanLyKhoaHocService.themKhoaHoc(values)
      toast.success('Thêm khóa học thành công')
    } catch (err) {
      toast.error('Thêm khóa học thất bại')
    }
  }
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="flex justify-end">
        {/* Modal toggle */}
        <button onClick={() => { showModal(), setOpenBtnUpdate(true), setOpenBtnAdd(false) }} className="btn-add sm:!w-[200px] !w-[120px]" type="button">
          Thêm khóa học
        </button>
        <Modal footer={false} open={isModalOpen} onCancel={handleCancel}>
          <form noValidate className="mt-[10px]" onSubmit={handleSubmit(setSubmit)}>
            <Input className="input" label="Mã khóa học" placeholder="Mã khóa học" id="maKhoaHoc" error={errors?.maKhoaHoc?.message} register={register} />
            <Input className="input" label="Bí danh" placeholder="Bí danh" id="biDanh" error={errors?.biDanh?.message} register={register} />
            <Input className="input" label="Tên khóa học" placeholder="Tên khóa học" id="tenKhoaHoc" error={errors?.tenKhoaHoc?.message} register={register} />
            <Input className="input" label="Mô tả" placeholder="Mô tả" id="moTa" error={errors?.moTa?.message} register={register} />
            <Input className="input" label="Lượt xem" placeholder="Lượt xem" id="luotXem" error={errors?.luotXem?.message} register={register} defaultValue={0} hidden={true} type="number" />
            <Input className="input" label="Đánh giá" placeholder="Đánh giá" id="danhGia" error={errors?.danhGia?.message} register={register} defaultValue={0} hidden={true} type="number" />
            <Input className="input" label="Hình ảnh" placeholder="Hình ảnh" id="hinhAnh" error={errors?.hinhAnh?.message} register={register} />
            <Input className="input" label="Mã nhóm" placeholder="Mã nhóm" id="maNhom" error={errors?.maNhom?.message} register={register} />
            <Input className="input" label="Ngày tạo" placeholder="Ngày tạo" id="ngayTao" error={errors?.ngayTao?.message} register={register} type="datetime-local" />
            <div className="mb-6 sm:h-[70px] h-[50px]">
              <label htmlFor="maDanhMucKhoaHoc" className="label">Mã danh mục khóa học</label>
              <select name="cars" id="maDanhMucKhoaHoc" className="input"  {...register('maDanhMucKhoaHoc')}>
                <option value=''>Chọn mã danh mục khóa học</option>
                <option value='BackEnd'>Lập trình Backend</option>
                <option value='Design'>Thiết kế Web</option>
                <option value='DiDong'>Lập trình di động</option>
                <option value='FrontEnd'>Lập trình Front end</option>
                <option value='FullStack'>Lập trình Full Stack</option>
                <option value='TuDuy'>Tư duy lập trình</option>
              </select>
              {
                errors?.maDanhMucKhoaHoc && <p className="text-red-600 text-right py-[5px] text-[11px] sm:text-[16px]">{errors?.maDanhMucKhoaHoc.message}</p>
              }
            </div>
            <Input className="input pointer-events-none !text-gray-400" label="Tài khoản người tạo" placeholder="Tài khoản người tạo" id="taiKhoanNguoiTao" error={errors?.taiKhoanNguoiTao?.message} register={register} />
            <Button htmlType="submit" className={cn("btn-register", { 'hidden': openBtnAdd === true })}>Thêm khóa học</Button>
            <Button htmlType="submit" className={cn("btn-register", { 'hidden': openBtnUpdate === true })}>Cập nhật khóa học</Button>
            <Button htmlType="button" className="btn-cancel" onClick={handleCancel}>Thoát</Button>

          </form>
        </Modal>
      </div>

      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-[10px] text-gray-700 uppercase bg-gray-50 lg:text-[18px] md:text-[16px] sm:text-[14px] dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-[10px] py-3">
              Hình ảnh
            </th>
            <th scope="col" className="px-[10px] py-3">
              Khóa học
            </th>
            <th scope="col" className="px-[10px] py-3">
              <p className="flex items-center"><i className="fa-regular fa-pen-to-square text-sky-400 mr-[8px]"></i><span className="text-sky-400">Edit</span></p>
            </th>
            <th className="px-[10px] py-3">
              <i className="fa-regular fa-trash-can text-16 text-red-600"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {
            KhoaHocList?.map((a, index) => (
              <tr key={index} className="bg-white border-b text-[10px] lg:text-[18px] md:text-[16px] sm:text-[14px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <img className="w-[200px]" src={a.hinhAnh} alt="" />
                </th>
                <td className="px-[10px] py-4">
                  {a.tenKhoaHoc}
                </td>
                <td className="px-[10px] py-4">
                  <button type="button" className="text-[10px] md:text-[16px] sm:text-[14px] cursor-pointer text-sky-400 flex items-center" onClick={() => { showModal(), setOpenBtnUpdate(false), setOpenBtnAdd(true) }}><i className="fa-regular fa-pen-to-square mr-[5px]"></i><span>Edit</span></button>
                </td>
                <td className="px-[10px] py-4">
                  <button><i className="fa-regular fa-trash-can text-[10px] md:text-[16px] sm:text-[14px] cursor-pointer text-red-600"></i></button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}


