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
import { layDanhSachKhoaHocThunk } from "store/quanLyKhoaHoc"

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
  const removeAccents = (str: string) => {
    const accents = 'ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰýÝỴỶỸửữựýýỵỷỹ/';
    const without = 'AAAAEEEIIOOOOUUADIUOaaaaeeeiioooouuadiuoUAAAAAAAAAAAAAEEEEEEUaaaaaaaaaaaaaeeeeeeEEIIOOOOOOOOOOOOUUUUeeiioooooooooooouuuuUUUyYYYYuuuyyyyy-';
    let result = '';
    for (let i = 0; i < str.length; i++) {
      const index = accents.indexOf(str[i]);
      result += (index !== -1) ? without[index] : str[i];
    }
    return result;
  }

  const setSubmit: SubmitHandler<ThemKhoaHoc> = async (values) => {
    const biDanhFixed = removeAccents(values.tenKhoaHoc.toLowerCase().replace(/ /g, '-'))
    const hinhAnhFixed = 'https://elearningnew.cybersoft.edu.vn/hinhanh/' + biDanhFixed + '.png'
    const valuesFixed = { ...values, biDanh: biDanhFixed, hinhAnh: hinhAnhFixed }
    console.log('valuesFixed', valuesFixed)
    try {
      await quanLyKhoaHocService.themKhoaHoc(valuesFixed)
      dispatch(layDanhSachKhoaHocThunk())
      toast.success('Thêm khóa học thành công')
    } catch (err) {
      console.log('err', err)
      if(UserLogin?.maLoaiNguoiDung === "HV") {
        toast.error('HV không thể thêm khóa học')
      }
      toast.error('Thêm khóa học thất bại')
    } 
    //dispatch(themKhoaHocThunk(valuesFixed)).unwrap().then(() => { toast.success('Thêm khóa học thành công') }).catch(() => { toast.error('Thêm khóa học thất bại')})
  }
  const today = getToday
  return (
    <form noValidate className="mt-[10px]" onSubmit={handleSubmit(setSubmit)}>
      <Input colorLabel="black" className="input" label="Mã khóa học" placeholder="Mã khóa học" id="maKhoaHoc" error={errors?.maKhoaHoc?.message} register={register} />
      <Input colorLabel="black" className="input" label="Tên khóa học" placeholder="Tên khóa học" id="tenKhoaHoc" error={errors?.tenKhoaHoc?.message} register={register} />
      <Input colorLabel="black" className="input" label="Mô tả" placeholder="Mô tả" id="moTa" error={errors?.moTa?.message} register={register} />
      <Input colorLabel="black" className="input" label="Ngày tạo" placeholder="Ngày tạo" id="ngayTao" error={errors?.ngayTao?.message} register={register} defaultValue={today} />
      <div className="mb-6 sm:h-[70px] h-[50px]">
        <label htmlFor="maDanhMucKhoaHoc" className={cn("label",{ "text-black" : 'bg-white'})}>Mã danh mục khóa học</label>
        <select name="maDanhMucKhoaHoc" id="maDanhMucKhoaHoc" className="input"  {...register('maDanhMucKhoaHoc')}>
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
      <Input colorLabel="black" className="input" label="Mã nhóm" placeholder="Mã nhóm" id="maNhom" error={errors?.maNhom?.message} register={register} />
      <Input colorLabel="black" className="input" label="Đánh giá" placeholder="Đánh giá" id="danhGia" error={errors?.danhGia?.message} register={register} defaultValue={0} hidden={true} type="number" />
      <Input colorLabel="black" className="input" label="Lượt xem" placeholder="Lượt xem" id="luotXem" error={errors?.luotXem?.message} register={register} defaultValue={0} hidden={true} type="number" />
      <Input colorLabel="black" className="input" label="Hình ảnh" placeholder="Hình ảnh" id="hinhAnh" error={errors?.hinhAnh?.message} register={register} defaultValue={'Tự động điền'} hidden={true} />
      <Input colorLabel="black" className="input" label="Bí danh" placeholder="Bí danh" id="biDanh" error={errors?.biDanh?.message} register={register} defaultValue={'Tự động điền'} hidden={true} />
      <Input colorLabel="black" className="input !text-gray-400 pointer-events-none" label="Tài khoản người tạo" placeholder="Tài khoản người tạo" id="taiKhoanNguoiTao" error={errors?.taiKhoanNguoiTao?.message} register={register} defaultValue={UserLogin?.taiKhoan}/>
      <Button htmlType="submit" className={cn("btn-register")}>Thêm khóa học</Button>
    </form>
  )
}


