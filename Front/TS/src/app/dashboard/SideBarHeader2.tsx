const SideBarHeader2 = () => {
  return (
    <div>
      <button
        className="flex justify-center items-center size-[3.9375rem]"
        type="button"
        aria-label="Button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="71"
          height="71"
          viewBox="0 0 71 71"
          fill="none"
        >
          <g filter="url(#filter0_f_601_291)">
            <circle cx="35.5" cy="35.5" r="31.5" fill="#161616" />
            <circle
              cx="35.5"
              cy="35.5"
              r="30.5"
              stroke="url(#paint0_linear_601_291)"
              stroke-width="2"
            />
          </g>
          <circle
            cx="35.5"
            cy="35.5"
            r="30.5"
            fill="#161616"
            stroke="url(#paint1_linear_601_291)"
            stroke-width="2"
          />
          <path
            d="M30.7672 28.0254C31.8411 24.8037 36.0915 24.114 38.1291 26.8308C39.3227 28.4222 39.2394 30.6319 37.9295 32.129L36.0025 34.3313C34.2535 36.33 33.2896 38.8957 33.2896 41.5515V42.2153C33.2896 43.0836 33.9935 43.7875 34.8618 43.7875C35.7302 43.7875 36.4341 43.0836 36.4341 42.2153V41.5515C36.4341 39.6573 37.1216 37.8275 38.369 36.402L40.296 34.1997C42.5844 31.5844 42.7299 27.7242 40.6448 24.944C37.0852 20.1979 29.6601 21.4029 27.784 27.031L27.0811 29.1398C26.8065 29.9636 27.2517 30.854 28.0755 31.1286C28.8993 31.4032 29.7897 30.958 30.0643 30.1342L30.7672 28.0254Z"
            fill="#FCCF58"
          />
          <path
            d="M36.9582 48.5044C36.9582 49.6622 36.0196 50.6008 34.8618 50.6008C33.704 50.6008 32.7655 49.6622 32.7655 48.5044C32.7655 47.3466 33.704 46.408 34.8618 46.408C36.0196 46.408 36.9582 47.3466 36.9582 48.5044Z"
            fill="#FCCF58"
          />
          <defs>
            <filter
              id="filter0_f_601_291"
              x="0"
              y="0"
              width="71"
              height="71"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur_601_291"
              />
            </filter>
            <linearGradient
              id="paint0_linear_601_291"
              x1="15"
              y1="8.5"
              x2="47.5"
              y2="67"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FCCF58" />
              <stop offset="1" stop-color="#6F5308" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_601_291"
              x1="15"
              y1="8.5"
              x2="47.5"
              y2="67"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FCCF58" />
              <stop offset="1" stop-color="#6F5308" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  );
};

export default SideBarHeader2;
