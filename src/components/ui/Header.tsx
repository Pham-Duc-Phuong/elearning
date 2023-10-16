import { useAppDispatch, useAppSelector } from "store"
import cn from 'classnames'
import { PATH } from "constant"
import { useNavigate } from "react-router-dom"
import { quanLyNguoiDungActions } from "store/quanLyNguoiDung"
import { useEffect } from "react"
import { Avatar, Popover } from "."
export const Header = () => {
    const { UserLogin, accessToken } = useAppSelector(state => state.quanLyNguoiDung)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
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
    useEffect(() => {
        window
    })
    return (
        <div className="shadow-lg dark:shadow-darkMode z-50 fixed w-full">
            <nav className="bg-white border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href={'/'} className="flex items-center">
                        <img src="/images/logo.jpg" className="h-[45px] mr-3 rounded-[50%]" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap tracking-[2px] dark:text-white">Elearning</span>
                    </a>
                    <div className="flex items-center md:order-2">
                        {
                            !accessToken && <div>
                                <span className="mr-[10px] cursor-pointer font-[500] a-header-1 inline-block dark:text-white" onClick={() => { navigate(PATH.login) }}>Đăng nhập</span>
                                <span className="a-header-1 inline-block dark:text-white">|</span>
                                <span className="ml-[10px] cursor-pointer font-[500] a-header-1 inline-block dark:text-white" onClick={() => { navigate(PATH.register) }}>Đăng ký</span></div>
                        }
                        {
                            !!accessToken && (
                                <Popover
                                    className="!bg-blue-700"
                                    content={
                                        <div id="user-dropdown">
                                            <div className="px-4 py-3">
                                                <span className="block text-[18px] text-gray-900 mb-[10px] font-[500]">{UserLogin?.hoTen}</span>
                                                <span className="block text-sm  text-gray-500 truncate font-[500]">{UserLogin?.email}</span>
                                            </div>
                                            <ul className="py-2">
                                                <li>
                                                    <a href="#" className="a-header font-[500]" onClick={() => {
                                                        navigate(PATH.account)
                                                    }}>Thông tin tài khoản</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="a-header font-[500]" onClick={() => {
                                                        navigate(PATH.admin)
                                                    }}>Quản lý</a>
                                                </li>
                                                <li>
                                                    <a href="#" className="a-header font-[500]" onClick={() => { dispatch(quanLyNguoiDungActions.logOut()) }}>Đăng xuất</a>
                                                </li>
                                            </ul>
                                        </div>
                                    }
                                    trigger="click"
                                    arrow={false}
                                >
                                    <Avatar size="large" className="cursor-pointer">
                                        <i className="fa-regular fa-user text-20 text-white"></i>
                                    </Avatar>
                                </Popover>
                            )
                        }
                        <button id="theme-toggle" type="button" className="btn-darkMode flex items-center justify-center" onClick={() => {
                            darkMode()
                        }}>
                            <i id="icon-dark-mode" className="fa-regular fa-sun text-[20px] leading-[0px]"></i>
                        </button>
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
                                <p className="p-header" onClick={() => {
                                    navigate('/')
                                }}>Trang chủ</p>
                            </li>
                            <li>
                                <p className="p-header"onClick={() => {
                                    navigate(PATH.course)
                                }}>Khóa học</p>
                            </li>
                            <li>
                                <p className="p-header">Tin tức</p>
                            </li>
                            <li>
                                <p className="p-header">Liên hệ</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
