import stepper2 from "../../assets/icons/stepper2.svg"
import HeaderRegister from './HeaderRegister'
import { Link } from "react-router-dom";

const Register7 = () => {
    
    return (
    <div className='h-screen bg-white' >
        <div>
            <HeaderRegister/>
        </div>
        
        <div className=' flex flex-col items-center'>
            <div className='mt-10 flex items-center'>
                <Link to="/register/1">
                <img className="mr-10" src="/icons/ArrowLeft.svg" alt="" />
                </Link>
                <img src={stepper2} alt="" />
            </div>

            <div className=' text-center mt-16'>
                <p className='font-bold text-xs'>Pais</p>
                <h2 className='mt-6 text-2xl font-bold'>¿Dónde vives la mayor parte del tiempo?</h2>
                <p className='mt-3 text-xs text-gray-900 f'>Por ley, puede que tengamos que pedirte un comprobante de tu dirección.</p>
            </div>

            <div className='mt-10'>
                
            </div>
            <button
            type="submit"
            className="rounded-full w-[43%] mt-8 select-none font-semibold text-white bg-yellow-600"
            >
            <Link to="/Register8" className="w-[43%]">
                Contiuar
            </Link>
            </button>
        </div>
    </div>
    )
}

export default Register7
