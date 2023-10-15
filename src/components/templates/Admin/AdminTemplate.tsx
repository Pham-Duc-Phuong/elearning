import { useState } from "react"
import { AddCourse } from "."
export const AdminTemplate = () => {
  const [activeTabs, setActiveTabs] = useState(1)
  const ActiveTabs = (index) => {
    setActiveTabs(index)
  }
  return (
    <div>  <div>
      <ul className="max-w-screen-2xl flex flex-wrap text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b pb-[15px]">
        <li className="mr-2">
          <a href="#" className={activeTabs === 1 ? 'tabs-active' : 'tabs'} onClick={() => ActiveTabs(1)}>Quản lý khóa học</a>
        </li>
        <li className="mr-2">
          <a href="#" className={activeTabs === 2 ? 'tabs-active' : 'tabs'} onClick={() => ActiveTabs(2)}>Quản lý người dùng</a>
        </li>
      </ul>
    </div>
      <div className={activeTabs === 1 ? 'block' : 'hidden'}>
        <AddCourse />
      </div>
      <div className={activeTabs === 2 ? 'block h-[800px]' : 'hidden'}>
        <p className="text-white">Mã người dùng 'HV' không khả dụng</p>
      </div>
    </div>
  )
}
