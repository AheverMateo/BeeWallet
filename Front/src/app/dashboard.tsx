import { Link, Outlet } from "react-router-dom";
import AccountData1 from "./dashboard/AccountData1";
import AcData2 from "./dashboard/AccountData2";
import AccountData3 from "./dashboard/AccountData3";
import Movements from "./dashboard/Movements";
import SideBar from "./dashboard/SideBar";
import React, { useState } from "react";
import CVU from "./dashboard/CVU";
import SideBarHeader1 from "./dashboard/SideBarHeader1";
import SideBarHeader2 from "./dashboard/SideBarHeader2";
import SideBarFooter from "./dashboard/SideBarFooter";

export default function Dashboard() {
  return (
    <div
      className="size-full min-h-screen min-w-fit
         bg-[#0E0E0E] text-[#FCFFFF]
         md:flex md:justify-center p-3"
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
            <div className="absolute inset-y-0 right-0 flex items-center gap-3">
              <div className="bg-[#232323]  p-2 rounded-full">
                <img
                  src="/icons/Message 28.svg"
                  alt="Message"
                  className="w-2rem h-2rem object-cover"
                />
              </div>
              <div className="size-[2rem]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  viewBox="0 0 41 41"
                  fill="none"
                >
                  <circle
                    cx="20.5"
                    cy="20.5"
                    r="19"
                    stroke="url(#paint0_linear_413_4258)"
                    strokeWidth="1"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_413_4258"
                      x1="20.5"
                      y1="0"
                      x2="20.5"
                      y2="41"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#FCCF58" />
                      <stop offset="1" stopColor="#6F5308" />
                    </linearGradient>
                  </defs>
                  <image
                    href="/unsplash_ZXfUUM_LR0k.png"
                    x="10"
                    y="10"
                    width="20"
                    height="20"
                  />
                </svg>
              </div>
            </div>
          </section>
          <section className=" max-md:flex max-md:justify-center max-md:flex-col">
            <div
              className="bg-transparent gap-1 
            md:w-[70rem] md:h-[26.5625rem] flex flex-col items-center justify-center"
            >
              <div className="md:flex md:gap-5 md:justify-center">
                <section className="flex flex-col p-5 gap-5 ">
                  <div className="bg-[#232323] rounded-[1.15625rem] p-1">
                    <div className="flex flex-col gap-2 md:pl-6 md:w-[28rem]">
                      <div className="flex justify-between">
                      <h2 className="md:mb-2 md:text-lg">Cuenta Beelancer</h2>
                      <div className="relative right-0">
                        <button
                          className="border-[#FCFFFF] border-[1px] text-[0.875rem]
                 w-[7.125rem] h-[2.3125rem] bg-[#323131] rounded-[1.15625rem]"
                        >
                          {" "}
                          Tu CVU{" "}
                        </button>
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
