import React from 'react';
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
//import { Button } from "@/components/ui/button"; 

const HeaderMobile: React.FC = () => {
    //const navigate = useNavigate();

    return (
        <header className="grid grid-cols-[auto,1fr,auto] h-20 shadow px-8 gap-8 fixed z-10 " style={{ width: '100%', height: '104px', flexShrink: 0, background: '#0E0E0E', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}>
            <div className="h-full flex items-center">

                <Link to="/" className="flex size-30">
                    
                <img src="/icons/beewalletIcon.png" alt="BeeWallet Icon" style={{ width: '125px', height: '45px' }} />


                </Link>
            </div>
 
            <div className="h-full flex items-center gap-4 justify-end">
                <div className="flex items-center">
                    <span className="text-xs text-white mr-2">ES</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </header>
    );
}

export default HeaderMobile;
