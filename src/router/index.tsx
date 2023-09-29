import { AuthLayout } from "components"
import { PATH } from "constant"
import { Register } from "pages"
import { RouteObject } from "react-router-dom"



export const router: RouteObject[] = [
    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.register,
                element: <Register />,
            },
        ],
    },
]