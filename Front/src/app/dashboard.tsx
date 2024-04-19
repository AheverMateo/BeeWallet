import { Link, Outlet } from "react-router-dom";
import AccountData1 from "./dashboard/AccountData1";
import AcData2 from "./dashboard/AccountData2";
import AccountData3 from "./dashboard/AccountData3";
import Movements from "./dashboard/Movements";
import SideBar from "./dashboard/SideBar";
import React, { useState } from "react";
import SideBarHeader1 from "./dashboard/SideBarHeader1";
import SideBarHeader2 from "./dashboard/SideBarHeader2";
import SideBarFooter from "./dashboard/SideBarFooter";


export default function Dashboard( ) {
  
  return (
    <div
      className='size-full min-h-screen min-w-fit bg-[#0E0E0E] text-[#FCFFFF] md:flex md:justify-center p-3 '
    >
      <Outlet />
      <main className="flex justify-center gap-3">
        <section className="hidden md:block">
          <SideBar />
        </section>
        <div>
          <section className="p-3 relative w-[100%] flex justify-center">
            <div className=" md:hidden">
              <SideBarHeader1 />
            </div>
            
          </section>
          <section className=" max-md:flex max-md:justify-center max-md:flex-col">
            <div
              className="bg-transparent gap-1 
            min-sm:w-[70rem] min-sm:h-[26.5625rem] flex flex-col items-center justify-center"
            >
              <div className="md:flex md:gap-5 md:justify-center">
                <section className="flex flex-col p-5 gap-5 ">
                  <div className="bg-[#232323] rounded-[1.15625rem] p-1
                  max-sm:w-[27.125rem] max-sm:h-[15rem]">
                    <div className="flex flex-col gap-2 max-sm:pl-6 max-smw-[28rem]">
                      <div className="flex justify-between max-sm:pl-1 max-sm:pt-2 max-sm:pr-1">
                      <h2 className="max-sm:mb-2 md:text-lg">Cuenta Beelancer</h2>
                      <div className="relative right-0">
                        <Link to={"/dashboard/CVU"}
                          className="border-[#FCFFFF] border-[1px] text-[0.875rem]
                 w-[7.125rem] h-[2.3125rem] bg-[#323131] rounded-[1.15625rem]"
                        >
                          {" "}
                          Tu CVU{" "}
                        </Link>
                      </div>
                      </div>
                    
                      <AccountData1 />
                    </div>
                    
                  </div>
                  <div className=" ">
                      <AcData2 />
                    </div>
                </section>
                <section className=" ">
                  <AccountData3 />
                </section>
              </div>
            </div>
            <div className=" md:flex md:justify-center">
              <Movements />
            </div>
          </section>
          <section className="md:hidden">
            <SideBarFooter />
          </section>
        </div>
      </main>
    </div>
  );
}
