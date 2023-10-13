import { useAppSelector, useAppDispatch } from "store"
import { useEffect } from "react"
import { useNavigate, useParams, generatePath } from "react-router-dom"
import { layDanhSachKhoaHocThunk } from "store/quanLyKhoaHoc"
import { Button } from 'components'
import { PATH } from 'constant'
import { toast } from 'react-toastify'

export const DetailKhoaHocTemplate = () => {
    const { KhoaHocList } = useAppSelector(state => state.quanLyKhoaHoc)
    const params = useParams()
    const detailKhoaHoc = KhoaHocList?.find(a => a.maKhoaHoc === params.idKhoaHoc)
    const maDanhMucKhoaHocList = KhoaHocList?.filter((b => b.danhMucKhoaHoc?.maDanhMucKhoahoc === detailKhoaHoc?.danhMucKhoaHoc?.maDanhMucKhoahoc && b.maKhoaHoc !== params.idKhoaHoc))
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(layDanhSachKhoaHocThunk())
    }, [dispatch])
    const navigate = useNavigate()
    return (
        <div className='bg-#170f23'>
            <div className="row detailShow">
                <div className="col-8">
                    <h5 className="text-36 font-bold text-gray-900 dark:text-white text-2xl mb-5">{detailKhoaHoc?.danhMucKhoaHoc.tenDanhMucKhoaHoc}</h5>
                    <img className="object-cover rounded-lg h-[250px] mb-4" src={detailKhoaHoc?.hinhAnh} alt='' />
                    <div className=" leading-normal">
                        <div className="relative overflow-x-auto ">
                            <table className="text-16 w-800 text-left text-gray-500 mb-2">
                                <thead>
                                </thead>
                                <tbody>
                                    <tr className="bg-white dark:bg-gray-800 mb-10">
                                        <th scope="row" className="th-table w-[200px]">
                                            Tên Khoá học
                                        </th>
                                        <td className="px-6 py-3">
                                            {detailKhoaHoc?.tenKhoaHoc}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="th-table w-[200px]">
                                            Tổng quan về khoá học
                                        </th>
                                        <td className="px-6 py-3">
                                            {detailKhoaHoc?.moTa}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="th-table w-[200px]">
                                            Số lượng học viên
                                        </th>
                                        <td className="px-6 py-3">
                                            {detailKhoaHoc?.soLuongHocVien}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="th-table w-[200px]">
                                            Lượt xem
                                        </th>
                                        <td className="px-6 py-3">
                                            {detailKhoaHoc?.luotXem}
                                        </td>
                                    </tr>
                                    <tr className="bg-white dark:bg-gray-800">
                                        <th scope="row" className="th-table w-[200px]">
                                            Ngày tạo
                                        </th>
                                        <td className="px-6 py-3">
                                            {detailKhoaHoc?.ngayTao}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className='mb-24'>
                                <div>
                                    <Button
                                        onClick={() => {
                                            toast.success('Đăng kí khoá học thành công')
                                        }}>
                                        Đăng kí
                                    </Button>

                                    <Button className="btn-back ml-[10px]"
                                        onClick={() => {
                                            navigate('/')
                                        }}
                                    >
                                        <i className="fa-solid fa-arrow-left pr-6"></i>Quay lại
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="text-gray-600 font-[700] dark:text-gray-300 mb-10">DANH SÁCH KHOÁ HỌC LIÊN QUAN {detailKhoaHoc?.danhMucKhoaHoc.tenDanhMucKhoaHoc.toUpperCase()}</h1>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 phone:grid-cols-1 gap-[20px]">
                {
                    maDanhMucKhoaHocList?.map((a, index) => (
                        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between mb-24">
                            <a href="#">
                                <img className="rounded-t-lg" src={a.hinhAnh} alt={a.biDanh}
                                    onClick={() => {
                                        const path = generatePath(PATH.DetailKhoaHoc, { idKhoaHoc: a.maKhoaHoc })
                                        navigate(path)
                                    }} />
                            </a>
                            <div className="p-5"
                                onClick={() => {
                                    const path = generatePath(PATH.DetailKhoaHoc, { idKhoaHoc: a.maKhoaHoc })
                                    navigate(path)
                                }}>
                                <a href="#">
                                    <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">{a.tenKhoaHoc}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{a.moTa.substring(0, 50)}<span className="tracking-[5px] ml-[5px]">...</span></p>
                                <div className="flex justify-between items-center">
                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={() => {
                                            const path = generatePath(PATH.DetailKhoaHoc, { idKhoaHoc: a.maKhoaHoc })
                                            navigate(path)
                                        }}> Chi tiết
                                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                    <i className="fa-solid fa-eye text-black text-[13px] dark:text-white"><span className="font-[400] ml-[7px] tracking-[3px] text-[10px]">{a.luotXem}</span></i>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div >
    )
}
