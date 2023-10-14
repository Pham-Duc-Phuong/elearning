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
      <div id="default-carousel" className="relative w-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative overflow-hidden rounded-lg xl:h-[600px] md:h-[400px] sm:h-[300px] phone:h-[150px]">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="./images/Designer.png" className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="./images/Designer6.png" className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="./images/Designer5.png" className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 4 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="./images/Designer3.png" className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
          {/* Item 5 */}
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="./images/Designer4.png" className="absolute block w-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to={0} />
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to={2} />
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to={3} />
          <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to={4} />
        </div>
        {/* Slider controls */}
        <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg className="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
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
          <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b pb-[15px]">
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
            <div key={index} className={activeTabs === `${a.maDanhMuc}` ? 'block mt-[20px]' : 'hidden'}>
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
