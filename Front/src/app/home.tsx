import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from "./ui/header"
import Footer from "./ui/footer"
import { Bg } from "./ui/background-image"

export default function Home() {
    const { pathname } = useLocation()

    return pathname.startsWith('/dashboard') ? (
        <Outlet />
    ) : <>
        <Bg />
        <div className="size-full bg-background min-h-screen grid grid-rows-[auto,1fr,auto] text-foreground">
            <Header />
            <div>
                <Outlet />
            </div>
            {
                //<Footer />
            }
        </div>
    </>
}