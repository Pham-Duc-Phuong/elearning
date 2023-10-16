import { useState } from "react"
import { AddCourse, UpdateCourse } from "."
export const AdminTemplate = () => {
  const [activeTabs, setActiveTabs] = useState(1)
  const ActiveTabs = (index) => {
    setActiveTabs(index)
  }
  return (
    <div>  <div>
      <ul className="max-w-screen-2xl flex flex-wrap text-xs sm:text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b pb-[15px]">
        <li className="mr-2">
          <a href="#" className={activeTabs === 1 ? 'tabs-active' : 'tabs'} onClick={() => ActiveTabs(1)}>Thêm khóa học</a>
        </li>
        <li className="mr-2">
          <a href="#" className={activeTabs === 2 ? 'tabs-active' : 'tabs'} onClick={() => ActiveTabs(2)}>Cập nhật khóa học</a>
        </li>
      </ul>
    </div>
      <div className={activeTabs === 1 ? 'block' : 'hidden'}>
        <AddCourse />
      </div>
      <div className={activeTabs === 2 ? 'block' : 'hidden'}>
        <UpdateCourse />
      </div>
    </div>
  )
}
