import SideBarHeader1 from "./SideBarHeader1";
import SideBarFooter from "./SideBarFooter";
import SideBarHeader2 from "./SideBarHeader2";

const SideBar = () => {
  return (
    <div className="flex flex-col h-screen justify-between py-5
     bg-[#161616] rounded-[0.5625rem]">
     <section className="flex items-center justify-center">
      <SideBarHeader1/>
     </section>
     <section>
      <SideBarFooter/>
     </section>
     <section className="flex items-center justify-center">
        <SideBarHeader2/>
     </section>
    </div>
  );
};

export default SideBar;
