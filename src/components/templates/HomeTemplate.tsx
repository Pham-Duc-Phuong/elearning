import { useAppDispatch, useAppSelector } from "store"
import { useEffect } from 'react'
import { layDanhSachKhoaHocThunk } from "store/quanLyKhoaHoc"
export const HomeTemplate = () => {
  const { UserLogin } = useAppSelector(state => state.quanLyNguoiDung)
  const { KhoaHocList } = useAppSelector(state => state.quanLyKhoaHoc)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(layDanhSachKhoaHocThunk())
  }, [dispatch, UserLogin])
  return (
    <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 phone:grid-cols-1 gap-[20px]">
      {
        KhoaHocList?.map((a, index) => (
          <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
            <a href="#">
              <img className="rounded-t-lg" src={a.hinhAnh} alt={a.biDanh} />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{a.tenKhoaHoc}</h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{a.moTa.substring(0, 50)} . . .</p>
              <div className="flex justify-between items-center">
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Chi tiết
                  <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </a>
                <i className="fa-solid fa-eye text-black text-[13px] dark:text-white"><span className="font-[400] ml-[7px] tracking-[5px] text-[12px]">{a.luotXem}</span></i>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}
