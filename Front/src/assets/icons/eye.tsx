export function Eye(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="none"
        viewBox="0 0 16 16"
        {...props}
      >
        <path
          fill="#000"
          d="M14.743 6.486L13.713 6a6.327 6.327 0 01-5.77 3.743A6.327 6.327 0 012.17 6l-1.028.486c.389.838.92 1.602 1.572 2.257l-1.087 1.314.887.743L3.6 9.487c.4.286.829.542 1.257.742l-.571 1.6 1.085.4.572-1.6c.464.144.943.23 1.428.258V12.6h1.143v-1.713a6.002 6.002 0 001.429-.258l.57 1.6 1.088-.4-.572-1.6c.457-.2.857-.456 1.257-.742L13.37 10.8l.886-.743-1.086-1.314c.658-.657 1.2-1.4 1.572-2.258z"
        ></path>
      </svg>
    )
}