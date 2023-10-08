import { AuthLayout, MainLayout } from "components"
import { PATH } from "constant"
import { Admin, Login, Register } from "pages"
import { Account } from "pages"
import { RouteObject } from "react-router-dom"



export const router: RouteObject[] = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: PATH.account,
                element: <Account />
            },
            {
                path: PATH.admin,
                element: <Admin />
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