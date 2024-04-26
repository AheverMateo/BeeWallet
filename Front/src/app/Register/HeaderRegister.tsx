import { Link } from "react-router-dom"
import Logo from "../../assets/icons/Logo.svg"
import close from "../../assets/icons/close.svg"

const HeaderRegister = () => {
  return (
    <div>
        <header className=' h-16 bg-black flex justify-between items-center'>
          <img className=' ml-8 pt-1' src={Logo} alt="" />
          <Link to="">
          <img className="w-6 bg-slate-800 py-1 rounded-full h-6 mr-4" src={close} alt="" />
          </Link>
        </header>
    </div>
  )
}

export default HeaderRegister