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
         "
    >
      <Outlet />
      <main className="flex flex-col gap-3">
        <section>
            <SideBar />
        </section>
        <section className=" ">
          <div className="bg-transparent w-[70rem] h-[26.5625rem] flex justify-center">
            <section className="flex flex-col gap-3 mr-5">
              <div className="">
                <AccountData1 />
              </div>
              <div className=" ">
                <AcData2 />
              </div>
            </section>
            <section>
              <AccountData3 />
            </section>
          </div>
          <div className=" flex justify-center">
            <Movements />
          </div>
        </section>
      </main>
    </div>
  );
}
