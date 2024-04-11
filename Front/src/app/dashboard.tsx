import { Outlet } from "react-router-dom";
import AccountData1 from "./dashboard/AccountData1";
import AcData2 from "./dashboard/AccountData2";
import AccountData3 from "./dashboard/AccountData3";
import Movements from "./dashboard/Movements";
import SideBar from "./dashboard/SideBar";

export default function Dashboard() {
  return (
    <div
      className="size-full min-h-screen
         bg-[#0E0E0E] text-[#FCFFFF]
         md:flex md:justify-center" // Add 'flex justify-center' to center horizontally
    >
      <Outlet />
      <main className="flex flex-col gap-3">
        <section>
            <SideBar />
        </section>
        <section className=" ">
          <div className="bg-transparent md:gap-5 md:w-[70rem] md:h-[26.5625rem] md:flex md:justify-center">
            <section className="md:flex md:flex-col md:gap-5">
              <div className="">
                <AccountData1 />
              </div>
              <div className=" ">
                <AcData2 />
              </div>
            </section>
            <section className=" ">
              <AccountData3 />
            </section>
          </div>
          <div className=" md:flex md:justify-center">
            <Movements />
          </div>
        </section>
      </main>
    </div>
  );
}
