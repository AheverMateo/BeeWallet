const HeadR = () => {
  return (
    <div className=" flex items-center gap-3">
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
  )
}

export default HeadR