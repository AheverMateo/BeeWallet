import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Header from "./ui/header"
import Footer from "./ui/footer"
import LandingPage from "./LandingPage"
// import { Bg } from "./ui/background-image"

export default function Home() {
    const { pathname } = useLocation()

    return pathname.startsWith('/dashboard') ? (
            <Outlet />
    ) : <>
        {/* <Bg /> */}
        <div className="">
            
            {
                <Header />
            }
            <div>
                <Outlet />
                <LandingPage />
            </div>
            {
                <Footer />
            }
        </div>
    </>
}