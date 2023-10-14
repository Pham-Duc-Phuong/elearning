import { AuthLayout, MainLayout } from "components"
import { PATH } from "constant"
import { Admin, Login, Register, DetailKhoaHoc, Course, Home } from "pages"
import { Account } from "pages"
import { RouteObject } from "react-router-dom"



export const router: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: PATH.course,
                element: <Course />
            },
            {
                path: PATH.account,
                element: <Account />
            },
            {
                path: PATH.admin,
                element: <Admin />
            },
            {
                path: PATH.DetailKhoaHoc,
                element: <DetailKhoaHoc />
            },
        ]
    },
    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.register,
                element: <Register />,
            },
            {
                path: PATH.login,
                element: <Login />,
            },
        ],
    },
]