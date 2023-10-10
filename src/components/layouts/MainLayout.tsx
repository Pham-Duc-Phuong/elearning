import { Footer, Header } from "components"
import { Outlet } from "react-router-dom"

export const MainLayout = () => {
    return (
        <div className="dark:bg-[#111827]">
            <Header />
            <div className="max-w-screen-2xl m-auto p-[40px] py-[140px]">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
