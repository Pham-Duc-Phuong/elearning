import { useState } from 'react'
import { AccountInfo, Password, History } from '.'
export const AccountTemplate = () => {
  const [activeTabs, setActiveTabs] = useState(1)
  const ActiveTabs = (index) => {
    setActiveTabs(index)
  }
  return (
    <div>
      <div>
        <ul className="max-w-screen-2xl flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400 border-b pb-[15px]">
          <li className="mr-2">
            <a href="#" className={activeTabs === 1 ? 'tabs-active' : 'tabs'} onClick={() => ActiveTabs(1)}>Thông tin tài khoản</a>
          </li>
          <li className="mr-2">
            <a href="#" className={activeTabs === 2 ? 'tabs-active' : 'tabs'} onClick={() => ActiveTabs(2)}>Đổi mật khẩu</a>
          </li>
          <li className="mr-2">
            <a href="#" className={activeTabs === 3 ? 'tabs-active' : 'tabs'} onClick={() => ActiveTabs(3)}>Khóa học đã đăng ký</a>
          </li>
        </ul>
      </div>
      <div className={activeTabs === 1 ? 'block h-[800px]' : 'hidden'}>
        <AccountInfo />
      </div>
      <div className={activeTabs === 2 ? 'block h-[800px]' : 'hidden'}>
        <Password />
      </div>
      <div className={activeTabs === 3 ? 'block h-[800px]' : 'hidden'}>
        <History />
      </div>
    </div>
  )
}
