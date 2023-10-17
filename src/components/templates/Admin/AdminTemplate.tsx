import { useState } from "react"
import { AddAccount, AddCourse, UpdateAccount, UpdateCourse } from "."
export const AdminTemplate = () => {
  const [activeTabs, setActiveTabs] = useState(2)
  const [openComponent, setOpenComponent] = useState(4)
  return (
    <div>
      <div>
        <ul className="max-w-screen-2xl flex flex-wrap text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b pb-[15px]">
          <li className="mr-2">
            <p className={activeTabs === 1 ? 'tabs-active' : 'tabs'} onClick={() => {setActiveTabs(1), setOpenComponent(1)}}>Quản lý khóa học</p>
          </li>
          <li className="mr-2">
            <p className={activeTabs === 2 ? 'tabs-active' : 'tabs'} onClick={() => {setActiveTabs(2), setOpenComponent(3)}}>Quản lý người dùng</p>
          </li>
        </ul>
      </div>
      <div className={activeTabs === 1 ? 'block mt-[15px]' : 'hidden'}>
        <ul className="max-w-screen-2xl flex flex-wrap text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b pb-[15px]">
          <li className="mr-2">
            <p className={openComponent === 1 ? 'tabs-active bg-red-400' : 'tabs'} onClick={() => setOpenComponent(1)}>Thêm khóa học</p>
          </li>
          <li className="mr-2">
            <p className={openComponent === 2 ? 'tabs-active bg-red-400' : 'tabs'} onClick={() => setOpenComponent(2)}>Cập nhật khóa học</p>
          </li>
        </ul>
      </div>
      <div className={activeTabs === 2 ? 'block mt-[15px]' : 'hidden'}>
        <ul className="max-w-screen-2xl flex flex-wrap text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b pb-[15px]">
          <li className="mr-2">
            <p className={openComponent === 3 ? 'tabs-active bg-red-400' : 'tabs'} onClick={() => setOpenComponent(3)}>Thêm người dùng</p>
          </li>
          <li className="mr-2">
            <p className={openComponent === 4 ? 'tabs-active bg-red-400' : 'tabs'} onClick={() => setOpenComponent(4)}>Cập nhật người dùng</p>
          </li>
        </ul>
      </div>
      <div className={openComponent === 1 ? 'block' : 'hidden'}>
        <AddCourse />
      </div>
      <div className={openComponent === 2 ? 'block' : 'hidden'}>
        <UpdateCourse />
      </div>
      <div className={openComponent === 3 ? 'block' : 'hidden'}>
        <AddAccount />
      </div>
      <div className={openComponent === 4 ? 'block' : 'hidden'}>
        <UpdateAccount />
      </div>
    </div>
  )
}
