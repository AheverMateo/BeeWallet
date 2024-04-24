import {  Outlet } from "react-router-dom";
import AccountData1 from "./dashboard/AccountData1";
import AcData2 from "./dashboard/AccountData2";
import AccountData3 from "./dashboard/AccountData3";
import Movements from "./dashboard/Movements";
import SideBar from "./dashboard/SideBar";
import SideBarHeader1 from "./dashboard/SideBarHeader1";
// import SideBarHeader2 from "./dashboard/SideBarHeader2";
import SideBarFooter from "./dashboard/SideBarFooter";
import HeadR from "./dashboard/HeadR";

export default function Dashboard( ) {
  
  return (
    <main className=" absolute min-h-screen md:w-screen bg-[#0E0E0E] text-[#FCFFFF] font-inter
    md:flex md:justify-center p-3 md:gap-5">
      <Outlet/>
      <main className="flex flex-col md:flex-row md:justify-between">
      <section className="hidden p-5 md:block h-full">
        <SideBar />  
      </section>
      <div className="flex flex-col gap-2">
        
      <section className="flex justify-between gap-5 p-1">
        <div className="md:hidden">
          <SideBarHeader1/>
        </div>
        <br className=" hidden md:block" />
        <HeadR/>
      </section>
      <section className="flex justify-between pl-4">
        <p className="text-[1.625rem]">Hola Juana</p>
        <br />
      </section>
      <section className="flex gap-5">
        <div className="flex flex-col gap-5">
        <AccountData1/>
        <AcData2/>
        </div>
        <div>
          <AccountData3/>
        </div>
      </section>
      <section className="md:absolute md:bottom-0 lg:pb-5">
        <Movements/>
      </section>
      </div>
      <section className="max-sm:block md:hidden">
        <SideBarFooter/>
      </section>
      </main>
    </main>
  );
}
