import { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom"
import { Outlet } from "react-router-dom"
import Footer from "./ui/footer"
import LandingPage from "./LandingPage"
import HeaderMobile from "./ui/HeaderMobile"
import HeaderPC from "./ui/HeaderPC"
// import { Bg } from "./ui/background-image"

export default function Home() {
    const { pathname } = useLocation()
    const [isMobile, setIsMobile] = useState(window.innerWidth<768);

    useEffect(()=>{
        function handleResize(){
            setIsMobile(window.innerWidth < 768);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("reize", handleResize);
    }, []);

    return pathname.startsWith('/dashboard') ? (
            <Outlet />
    ) : <>
        {/* <Bg /> */}
        <div className="">
            
            
               
               {isMobile ? <HeaderMobile/> : <HeaderPC/>}
            
            <div>
                <Outlet />
                <LandingPage />
            </div>
            
                <Footer />
            
        </div>
    </>
}