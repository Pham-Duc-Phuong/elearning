import { useAppDispatch, useAppSelector } from "store"
import { useEffect } from 'react'
import { toast } from "react-toastify"
import { SubmitHandler } from "react-hook-form"
import { GhiDanhKhoaHoc } from "types"
import { huyGhiDanhThunk } from "store/quanLyKhoaHoc"
import { GetUserByAccessTokenThunk } from "store/quanLyNguoiDung"

export const History = () => {
  const dispatch = useAppDispatch()
  const { UserGetThongTinKhoaHoc } = useAppSelector(state => state.quanLyNguoiDung)
  useEffect(() => {
    dispatch(GetUserByAccessTokenThunk())
  }, [dispatch])
  const setSubmit: SubmitHandler<GhiDanhKhoaHoc> = (values) => {
    dispatch(huyGhiDanhThunk(values)).unwrap().then(() => { dispatch(GetUserByAccessTokenThunk()) })
    // không thể cập nhật lại thông tin User bằng dispatch ở button hay tạo 1 dispatch riêng trong trong setSubmit ???
  }
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-[15px]">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-[10px] text-gray-700 uppercase bg-gray-50 md:text-[16px] sm:text-[14px] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-[10px] py-3">
                Hình ảnh
              </th>
              <th scope="col" className="px-[10px] py-3">
                Khóa học
              </th>
              <th scope="col" className="px-[10px] py-3">
                Thời gian đăng ký
              </th>
              <th className="px-[10px] py-3">
                <i className="fa-regular fa-trash-can text-16 text-red-600"></i>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              UserGetThongTinKhoaHoc?.chiTietKhoaHocGhiDanh?.map((a, index) => (
                <tr key={index} className="bg-white border-b text-[10px] md:text-[16px] sm:text-[14px] dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img className="w-[200px]" src={a.hinhAnh} alt="" />
                  </th>
                  <td className="px-[10px] py-4">
                    {a.tenKhoaHoc}
                  </td>
                  <td className="px-[10px] py-4">
                    <p>{new Date(a.ngayTao).getHours()}:{new Date(a.ngayTao).getMinutes()}</p><p>{new Date(a.ngayTao).getDate()}/{new Date(a.ngayTao).getMonth()}/{new Date(a.ngayTao).getFullYear()}</p>
                  </td>
                  <td className="px-[10px] py-4">
                    <a href="#" onClick={() => {
                      const values: GhiDanhKhoaHoc = {
                        maKhoaHoc: a?.maKhoaHoc,
                        taiKhoan: UserGetThongTinKhoaHoc?.taiKhoan
                      }
                      setSubmit(values)
                      // dispatch(GetUserByAccessTokenThunk())
                      toast.success('Xóa thành công', { autoClose: 1000 })
                    }}><i className="fa-regular fa-trash-can text-[10px] md:text-[16px] sm:text-[14px] cursor-pointer text-red-600"></i></a>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
