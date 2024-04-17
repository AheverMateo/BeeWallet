import React from "react";
import SideBarHeader1 from "./SideBarHeader1";
import SideBarFooter from "./SideBarFooter";
import SideBarHeader2 from "./SideBarHeader2";

const SideBar = () => {
  return (
    <div className="">
     <section className="md:flex hidden md:flex-col justify-between gap-20 p-1 pt-2">
      <SideBarHeader1/>
     </section>
     <section>
      <SideBarFooter/>
     </section>
     <section>
        <SideBarHeader2/>
     </section>

      
    
      
    </div>
  );
};

export default SideBar;
