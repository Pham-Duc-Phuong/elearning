import { useAppSelector } from "store"
import cn from 'classnames'
export const Header = () => {
    const { UserLogin } = useAppSelector(state => state.quanLyNguoiDung)
    const dropDown = () => {
        const navbarUser = document.querySelector('#navbar-user')
        navbarUser.classList.toggle('phone:block')
        navbarUser.classList.toggle('phone:hidden')
    }
    const darkMode = () => {
        document.documentElement.classList.toggle('dark')
        document.querySelector('#icon-dark-mode').classList.toggle('fa-sun')
        document.querySelector('#icon-dark-mode').classList.toggle('fa-moon')
    }
    return (
        <div className="shadow-lg dark:shadow-darkMode z-50 ">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href={'/'} className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Elearning</span>
                    </a>
                    <div className="flex items-center md:order-2">
                        <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/logo.svg" alt="user photo" />
                        </button>
                        <button id="theme-toggle" type="button" className="btn-darkMode" onClick={() => {
                            darkMode()
                        }}>
                            <i id="icon-dark-mode" className="fa-regular fa-moon text-[20px]"></i>
                        </button>
                        {/* Dropdown menu */}
                        <div className="drop-down-header" id="user-dropdown">
                            <div className="px-4 py-3">
                                <span className="block text-sm text-gray-900 dark:text-white">{UserLogin?.hoTen}</span>
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">{UserLogin?.email}</span>
                            </div>
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li>
                                    <a href="#" className="a-header">Thông tin tài khoản</a>
                                </li>
                                <li>
                                    <a href="#" className="a-header">Sign out</a>
                                </li>
                            </ul>
                        </div>
                        <button id="btn-menu" type="button" className="btn-menu" onClick={() => {
                            dropDown()
                        }}>
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={cn("items-center justify-between md:block phone:hidden w-full md:w-auto md:order-1")} id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500">Trang chủ</a>
                            </li>
                            <li>
                                <a href="#" className="a-header-1">Khóa học</a>
                            </li>
                            <li>
                                <a href="#" className="a-header-1">Tin tức</a>
                            </li>
                            <li>
                                <a href="#" className="a-header-1">Liên hệ</a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
