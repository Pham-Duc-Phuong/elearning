import { PATH } from "constant"
import { useState, useEffect } from "react"
import { generatePath, useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "store"
import { layDanhMucKhoaHocThunk, layDanhSachKhoaHocThunk } from "store/quanLyKhoaHoc"

export const HomeTemplate = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(layDanhMucKhoaHocThunk())
    dispatch(layDanhSachKhoaHocThunk())
  }, [dispatch])
  const { DanhMucKhoaHoc, KhoaHocList } = useAppSelector(state => state.quanLyKhoaHoc)
  const [activeTabs, setActiveTabs] = useState('BackEnd')
  const ActiveTabs = (index) => {
    setActiveTabs(index)
  }
  const layKhoaHocTheoMuc = KhoaHocList?.filter(a => a.danhMucKhoaHoc.maDanhMucKhoahoc === activeTabs)
  return (
    <div>
      <div id="default-carousel" className="relative w-full">
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden rounded-lg xl:h-[600px] lg:h-[450px] md:h-[400px] sm:h-[300px] phone:h-[160px]">
          <div className="duration-700 ease-in-out" data-carousel-item>
            <img src="./images/Designer.png" className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <div>
          <ul className="md:flex md:flex-wrap phone:grid sm:grid-cols-3 phone:grid-cols-2 sm:text-sm phone:text-[11px] font-medium text-center text-gray-500 dark:text-gray-400 border-b pb-[15px]">
            {
              DanhMucKhoaHoc?.map((a, index) => (
                <li key={index} className="mr-2">
                  <p className={activeTabs === `${a.maDanhMuc}` ? 'tabs-active' : 'tabs'} onClick={() => ActiveTabs(`${a.maDanhMuc}`)}>{a.tenDanhMuc}</p>
                </li>
              ))
            }
          </ul>
        </div>
        {
          DanhMucKhoaHoc?.map((a, index) => (
            <div key={index} className={activeTabs === `${a.maDanhMuc}` ? 'block mt-[30px]' : 'hidden'}>
              <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 phone:grid-cols-1 gap-[50px]">
                {
                  layKhoaHocTheoMuc?.map((a, index) => (
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
                        <a href="#" >
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
            </div>
          ))
        }
      </div>
    </div>
  )
}
