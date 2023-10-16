import { Input, Button } from "components"
import { useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { AddCourseSchema, AddCourseSchemaType } from "schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAppDispatch, useAppSelector } from "store"
import { toast } from 'react-toastify'
import { ThemKhoaHoc } from "types"
import cn from 'classnames'
import { quanLyKhoaHocService } from "services"
import { getToday } from "utils"

export const AddCourse = () => {
  const dispatch = useAppDispatch()
  const { handleSubmit, register, formState: { errors }, reset } = useForm<AddCourseSchemaType>({
    mode: "onChange",
    resolver: zodResolver(AddCourseSchema)
  })
  const { UserLogin } = useAppSelector(state => state.quanLyNguoiDung)
  useEffect(() => {
    reset({ ...UserLogin, taiKhoanNguoiTao: UserLogin?.taiKhoan })
  }, [reset, UserLogin, dispatch])
  const setSubmit: SubmitHandler<ThemKhoaHoc> = async (values) => {
    try {
      await quanLyKhoaHocService.themKhoaHoc(values)
      toast.success('Thêm khóa học thành công')
    } catch (err) {
      toast.error('Thêm khóa học thất bại')
    }
  }
  const today = getToday
  return (
    <form noValidate className="mt-[10px]" onSubmit={handleSubmit(setSubmit)}>
      <Input className="input" label="Mã khóa học" placeholder="Mã khóa học" id="maKhoaHoc" error={errors?.maKhoaHoc?.message} register={register} />
      <Input className="input" label="Bí danh" placeholder="Bí danh" id="biDanh" error={errors?.biDanh?.message} register={register} />
      <Input className="input" label="Tên khóa học" placeholder="Tên khóa học" id="tenKhoaHoc" error={errors?.tenKhoaHoc?.message} register={register} />
      <Input className="input" label="Mô tả" placeholder="Mô tả" id="moTa" error={errors?.moTa?.message} register={register} />
      <Input className="input" label="Lượt xem" placeholder="Lượt xem" id="luotXem" error={errors?.luotXem?.message} register={register} defaultValue={0} hidden={true} type="number" />
      <Input className="input" label="Đánh giá" placeholder="Đánh giá" id="danhGia" error={errors?.danhGia?.message} register={register} defaultValue={0} hidden={true} type="number" />
      <Input className="input" label="Hình ảnh" placeholder="Hình ảnh" id="hinhAnh" error={errors?.hinhAnh?.message} register={register} defaultValue={'https://elearningnew.cybersoft.edu.vn/hinhanh/'}/>
      <Input className="input" label="Mã nhóm" placeholder="Mã nhóm" id="maNhom" error={errors?.maNhom?.message} register={register} />
      <Input className="input" label="Ngày tạo" placeholder="Ngày tạo" id="ngayTao" error={errors?.ngayTao?.message} register={register} defaultValue={today} />
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
      <Input className="input !text-gray-400" label="Tài khoản người tạo" placeholder="Tài khoản người tạo" id="taiKhoanNguoiTao" error={errors?.taiKhoanNguoiTao?.message} register={register} defaultValue={UserLogin?.taiKhoan} disabled={true} />
      <Button htmlType="submit" className={cn("btn-register")}>Thêm khóa học</Button>
    </form>
  )
}


