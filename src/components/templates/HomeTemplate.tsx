import { Card, Skeleton } from "antd"
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
  const { DanhMucKhoaHoc, KhoaHocList, isLoadingCourse } = useAppSelector(state => state.quanLyKhoaHoc)
  const [activeTabs, setActiveTabs] = useState('BackEnd')
  const ActiveTabs = (index) => {
    setActiveTabs(index)
  }
  const [activeCarousel, setActiveCarousel] = useState(1)
  const ActiveCarousel = (index) => {
    setActiveCarousel(index)
  }
  useEffect(() => {
    if (activeCarousel === 6) {
      setActiveCarousel(1)
    } else {
      const intervalId = setInterval(() => {
        setActiveCarousel(prevState => prevState + 1);
      }, 3000); // chờ 2 giây trước khi tăng

      // Khúc này bị rò rỉ bộ nhớ (xem ở buổi 43) cần phải dọn dẹp khi component unmount
      return () => clearInterval(intervalId);
    }
  }, [activeCarousel])
  const layKhoaHocTheoMuc = KhoaHocList?.filter(a => a.danhMucKhoaHoc.maDanhMucKhoahoc === activeTabs)
  if (isLoadingCourse) {
    return (
      <div>
        <div className="shadow-md p-[5px] pb-[8px] border rounded-lg w-full xl:h-[600px] lg:h-[450px] md:h-[400px] sm:h-[300px] phone:h-[150px]">
          <Skeleton.Input className="!w-full !h-full dark:!bg-gray-200 !rounded-md" />
        </div>
        <div className="md:flex md:flex-row phone:grid sm:grid-cols-3 phone:grid-cols-2 gap-[10px] mt-[32px]">
          {
            [...Array(6)].map((_, index) => {
              return (
                <div key={index}>
                  <Skeleton.Button className=" px-[35px] py-[6px] rounded-lg dark:!bg-gray-200" />
                </div>
              )
            })
          }
        </div>
        <hr className="my-[15px]" />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 phone:grid-cols-1 gap-[50px] !mt-[30px]">
          {
            [...Array(8)].map((_, index) => {
              return (
                <Card key={index} className="!w-full">
                  <Skeleton.Image className="!w-full !h-[180px] dark:!bg-gray-200" />
                  <Skeleton.Input className="!w-full mt-[5px] dark:!bg-gray-200" />
                  <Skeleton.Input className="!w-full mt-[5px] dark:!bg-gray-200" />
                  <Skeleton.Input className="!w-full mt-[5px] dark:!bg-gray-200" />
                </Card>
              )
            })
          }
        </div>
      </div>
    )
  }
  return (
    <div>
      <div id="default-carousel" className="relative w-full">
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden flex rounded-lg xl:h-[600px] lg:h-[450px] md:h-[400px] sm:h-[300px] phone:h-[150px]">
          {/* Item 1 */}
          <div className="">
            <img src="/images/Designer.png" className={activeCarousel === 1 ? 'img-Carousel' : `hidden`} alt="..." />
          </div>
          {/* Item 2 */}
          <div className="">
            <img src="/images/Designer6.png" className={activeCarousel === 2 ? 'img-Carousel' : `hidden`} alt="..." />
          </div>
          {/* Item 3 */}
          <div className="">
            <img src="/images/Designer3.png" className={activeCarousel === 3 ? 'img-Carousel' : `hidden`} alt="..." />
          </div>
          {/* Item 4 */}
          <div className="">
            <img src="/images/Designer4.png" className={activeCarousel === 4 ? 'img-Carousel' : `hidden`} alt="..." />
          </div>
          {/* Item 5 */}
          <div className="">
            <img src="/images/Designer5.png" className={activeCarousel === 5 ? 'img-Carousel' : `hidden`} alt="..." />
          </div>
        </div>
        {/* Slider controls */}
        <button type="button" className="1 btn-Carousel left-0" onClick={() => {
          if (activeCarousel === 1) {
            ActiveCarousel(5)
          } else {
            ActiveCarousel(activeCarousel - 1)
          }
        }}>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="btn-Carousel right-0"
          onClick={() => {
            if (activeCarousel === 5) {
              ActiveCarousel(1)
            } else {
              ActiveCarousel(activeCarousel + 1)
            }
          }}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className="mt-[30px]">
        <div>
          <ul className="md:flex gap-2 md:flex-wrap phone:grid sm:grid-cols-3 phone:grid-cols-2 sm:text-sm phone:text-[11px] font-medium text-center text-gray-500 dark:text-gray-400 border-b pb-[15px]">
            {
              DanhMucKhoaHoc?.map((a, index) => (
                <li key={index} className="mr-2">
                  <p className={activeTabs === `${a.maDanhMuc}` ? 'tabs-active !w-full' : 'tabs !w-full'} onClick={() => ActiveTabs(`${a.maDanhMuc}`)}>{a.tenDanhMuc}</p>
                </li>
              ))
            }
          </ul>
        </div>
        {
          DanhMucKhoaHoc?.map((a, index) => (
            <div key={index} className={activeTabs === `${a.maDanhMuc}` ? 'block mt-[30px]' : 'hidden'}>
              <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 phone:grid-cols-1 gap-[50px]">
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
