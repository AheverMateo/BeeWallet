import { Link } from "react-router-dom";

const SideBarFooter = () => {
  return (
    <main>
      <section className="rounded-[0.5625rem] max-md:mt-4 md:w-[4.75rem] bg-[#161616] md:h-[22.625rem] flex md:flex-col items-center justify-around p-2 max-md:gap-10">
        
        <section
          className="rounded-[0.5625rem] max-md:mt-4 w-full
        md:w-[4.75rem] md:h-[28.06rem] flex max-sm:flex-row md:flex-col  items-center justify-between p-2"
        >
          <br />
          <button className="flex items-center md:h-[9.37rem] md:border-t-2 border-[#323131]">
            <Link to={"/dashborard"} className="size-[2rem] ">
              <img
                src="/icons/Home 3.svg"
                alt="Home"
                className="object-cover size-[2rem]"
              />
            </Link>
          </button>

          <button className="flex items-center px-10 md:px-0 border-x-2 md:border-x-0 md:border-y-2 border-[#323131] md:h-[9.37rem]">
            <Link to={"/statistics"} className="size-[2rem] ">
              <img
                src="/icons/Activity 2.svg"
                alt="Statistics"
                className="object-cover hover:text-[#FCCF58] size-[2rem]"
              />
            </Link>
          </button>
          <button className="flex items-center justify-center md:h-[9.37rem] md:border-b-2 border-[#323131]">
            <Link to={"/user"} className="size-[2rem] ">
              <img
                src="/icons/Profile Circle.svg"
                alt="Profile"
                className="object-cover size-[2rem]"
              />
            </Link>
          </button>
          <br />
        </section>
      </section>
    </main>
  );
};

export default SideBarFooter;
