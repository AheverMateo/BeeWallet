const SideBarHeader = () => {
  return (
    <main>
       <section className="size-[2.98831rem] rounded-full 
       flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="42"
          height="48"
          viewBox="0 0 42 48"
          fill="none"
        >
          <path
            d="M20.625 0.811899C20.799 0.711418 21.0135 0.711418 21.1875 0.811899L40.7659 12.1155C40.94 12.216 41.0472 12.4017 41.0472 12.6026V35.2099C41.0472 35.4108 40.94 35.5965 40.7659 35.697L21.1875 47.0006C21.0135 47.1011 20.799 47.1011 20.625 47.0006L1.04658 35.697C0.872542 35.5965 0.765329 35.4108 0.765329 35.2099V12.6026C0.765329 12.4017 0.872541 12.216 1.04658 12.1155L20.625 0.811899Z"
            stroke="#FCCF58"
            strokeWidth="1.125"
          />
        </svg>
        <p className="text-[#FCCF58] absolute text-center font-sans text-lg font-bold leading-normal z-11">
          BW
        </p>
      </section>
    </main>
  );
};

export default SideBarHeader;
