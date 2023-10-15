import { useAppSelector, useAppDispatch } from "store"
import { useEffect } from "react"
import { useNavigate, useParams, generatePath } from "react-router-dom"
import { ghiDanhKhoaHocThunk, layDanhSachKhoaHocThunk } from "store/quanLyKhoaHoc"
import { PATH } from 'constant'
import { toast } from 'react-toastify'
import { SubmitHandler } from 'react-hook-form'
import { GhiDanhKhoaHoc } from "types"

export const DetailKhoaHocTemplate = () => {
    const { KhoaHocList } = useAppSelector(state => state.quanLyKhoaHoc)
    const params = useParams()
    const detailKhoaHoc = KhoaHocList?.find(a => a.maKhoaHoc === params.idKhoaHoc)
    const maDanhMucKhoaHocList = KhoaHocList?.filter((b => b.danhMucKhoaHoc?.maDanhMucKhoahoc === detailKhoaHoc?.danhMucKhoaHoc?.maDanhMucKhoahoc && b.maKhoaHoc !== params.idKhoaHoc))
    const { UserLogin, accessToken } = useAppSelector(state => state.quanLyNguoiDung)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(layDanhSachKhoaHocThunk())
    }, [dispatch])
    const setSubmit: SubmitHandler<GhiDanhKhoaHoc> = (values) => {
        dispatch(ghiDanhKhoaHocThunk(values)).unwrap().then(() => { toast.success('Ghi danh thành công') }).catch(() => { toast.error('Đã đăng ký khóa học này rồi!') })
    }
    const navigate = useNavigate()
    return (
        <div>
            <div className="flex flex-col items-start bg-white border border-gray-200 rounded-lg shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-contain w-full rounded-t-lg h-auto lg:w-[40%] md:rounded-none md:rounded-l-lg" src={detailKhoaHoc?.hinhAnh} alt='' />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div>
                        <h5 className="mb-2 text-[35px] font-bold tracking-tight text-gray-900 dark:text-white">{detailKhoaHoc?.tenKhoaHoc}</h5>
                        <p className="mb-3 text-[18px] font-normal text-gray-700 dark:text-gray-400">{detailKhoaHoc?.moTa}</p>
                    </div>
                    <div className="flex justify-between">
                        <a className="a-Card" onClick={() => {
                            if (!accessToken) {
                                navigate(PATH.login)
                            } else {
                                const values: GhiDanhKhoaHoc = {
                                    maKhoaHoc: detailKhoaHoc?.maKhoaHoc,
                                    taiKhoan: UserLogin?.taiKhoan
                                }
                                setSubmit(values)
                            }
                        }}>Đăng ký học</a>
                        <a className="a-back"><i className="fa-solid fa-arrow-left mr-[10px]"></i>Quay lại</a>
                    </div>
                </div>
            </div>
            <h1 className="text-gray-600 font-[700] dark:text-gray-300 my-10">DANH SÁCH KHOÁ HỌC LIÊN QUAN {detailKhoaHoc?.danhMucKhoaHoc.tenDanhMucKhoaHoc.toUpperCase()}</h1>
            <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 phone:grid-cols-1 gap-[50px]">
                {
                    maDanhMucKhoaHocList?.map((a, index) => (
                        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
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
                                    <a href="#" className="a-Card"
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
