import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from "./ui/header"
import Footer from "./ui/footer"

export default function Home() {
    const { pathname } = useLocation()

    return pathname.startsWith('/dashboard') ? (
        <Outlet />
    ) : (
        <div className="size-full min-h-screen grid grid-rows-[auto,1fr,auto]">
            <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}