import SideBar from "../dashboard/SideBar"
import imgUser from "../../assets/icons/unsplash_ZXfUUM_LR0k.png"
import download from "../../assets/icons/download.svg"
import discard from "../../assets/icons/discard.svg"
import visto from "../../assets/icons/visto.svg"
import logo from "../../assets/icons/Logo.svg"
import HeaderR from "../../app/dashboard/HeadR"
const user = () => {

    async function fetchSessionData() {
        try {
        const response = await fetch('/api/auth/session', {
            credentials: 'include'
        });
        const data = await response.json();
        if (data.success) {
            console.log('User data:', data.user);
        } else {
            console.log('No active session:', data.message);
        }
        } catch (error) {
        console.error('Error fetching session data:', error);
        }
    }
    fetchSessionData();


    return (
        <div className="flex ">
            <div className="ml-6 fixed">
                <SideBar/>
            </div>
            <div className="flex justify-end w-[100%] ml-28">
                    <section className="mt-28 w-[65%] mr-[6%]">
                                <h1 className="text-2xl font-bold text-white">Personal</h1>
                                <div className=" flex w-full rounded-xl px-6 py-4 mt-8 bg-zinc-900">
                                    <img className="ml-2" src={imgUser} alt="" />
                                    <div className=" flex flex-col ml-10 justify-center">
                                    <h4 className=" text-gray-400 text-sm">Nombre y Apellido</h4>
                                    <p className="text-gray-300 text-xl font-bold">Jane Doe</p>
                                    </div>
                                </div>

                                <div className=" flex flex-col w-full rounded-xl px-8 py-6 mt-10 bg-zinc-900">
                                    <h4 className="text-gray-400 text-sm mb-2">Telefono</h4>
                                    <div className="flex justify-between">
                                    <p className="text-gray-300 text-xl mb-2">+54******0552</p>
                                    <img className="rounded-full py-1 px-1 h-5 mt-2 bg-green-900" src={visto} alt="" />
                                    </div>
                                    <hr className="border-gray-400" />
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2">Correo electrónico</h4>
                                    <div className="flex justify-between">
                                    <p className="text-gray-300 text-xl mb-2">janedoe.2024@outlook.com</p>
                                    <img className="rounded-full py-1 px-1 h-5 mt-2 bg-green-900" src={visto} alt="" />
                                    </div>
                                    <hr className="border-gray-400" />
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2">Fecha de Nacimiento</h4>
                                    <p className="text-gray-300 text-xl mb-2">00/00/0000</p>
                                </div>

                                <div className=" flex flex-col w-full rounded-xl px-8 py-6 mt-10 bg-zinc-900">
                                    <h4 className="text-gray-400 text-sm mb-2">Dirección (calle y número)</h4>
                                    <p className="text-gray-300 text-xl mb-2">Avenida Córdoba 1234.</p>
                                    <hr className="border-gray-400" />
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2">Código Postal</h4>
                                    <p className="text-gray-300 text-xl mb-2">1234</p>
                                    <hr className="border-gray-400" />
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2">Ciudad y País</h4>
                                    <p className="text-gray-300 text-xl mb-2">Buenos Aires, Argentina.</p>
                                </div>
                            <div className=" mt-20">
                                <h1 className="text-2xl font-bold text-white mb-8">Privacidad</h1>
                                <div className=" flex flex-col w-full rounded-xl px-6 py-4 mt-5 bg-zinc-900">
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2">Contraseña</h4>
                                    <p className="text-gray-300 text-xl mb-2">Cal123456#</p>
                                    <hr className="border-gray-400" />
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2">PIN</h4>
                                    <p className="text-gray-300 text-xl mb-2">0000</p>
                                </div>

                                <div className=" flex flex-col w-full rounded-xl px-6 py-4 mt-5 bg-zinc-900">
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2">Tipo de empleo </h4>
                                    <p className="text-gray-300 text-xl mb-2">Autónomo - Full time</p>
                                    <hr className="border-gray-400" />
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2">Experiencia</h4>
                                    <p className="text-gray-300 text-xl mb-2">1-3 años</p>
                                </div>
                            </div>

                            <div className=" mt-20">
                                <h1 className="text-2xl font-bold text-white mb-8">Documentos</h1>
                                <div className="  flex flex-col w-full rounded-xl px-6  mt-5 bg-zinc-900">
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2">Número de documento</h4>
                                    <p className="text-gray-300 text-xl mb-2">00.000.000</p>
                                    <hr className="border-gray-400" />
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2">CUIL/CUIT </h4>
                                    <p className="text-gray-300 text-xl mb-2">00-00000000-0</p>
                                </div>

                                <div className="flex w-full rounded-xl px-6  mt-5 bg-zinc-900">
                                    <img className="w-6 h-6 mt-3" src={download} alt="" />
                                    <div className=" flex flex-col ml-6 justify-center">
                                    <h4 className=" text-gray-400 text-sm">Documento</h4>
                                    <p className="text-gray-300 text-xl font-bold">PDF, JPEG, PNG</p>
                                    </div>
                                </div>
                            </div>

                            <div className=" mt-20">
                                <h1 className="text-2xl font-bold text-white mb-8">Configuracion</h1>
                                <div className="  flex flex-col w-full rounded-xl  px-6 py-10  mt-5 bg-zinc-900">
                                <h4 className="text-gray-400 text-sm mt-4 mb-2"></h4>
                                    <p className="text-gray-300 text-xl mb-2"></p>
                                    <hr className="border-gray-400" />
                                    <h4 className="text-gray-400 text-sm mt-4 mb-2"></h4>
                                    <p className="text-gray-300 text-xl mb-2"></p>
                                    <hr />
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center mt-20">
                                <button className="border-yellow-400 border rounded-full px-10 py-2 text-yellow-300">Cerrar Sesion</button>
                                <div className="mt-10 flex">
                                <img className="mr-2" src={discard} alt="" />
                                <p className="text-gray-300 cursor-pointer">Eliminar Cuenta</p>
                                </div>
                            </div>
                            <hr className="border-gray-400 mt-10" />
                            <footer className=" flex justify-between py-6 mt-5">
                                <img src={logo} alt="" />
                                <p className="text-gray-300 text-end">© Beewallet 2024. Todos los derechos reservados.<br/>
                                Sitio web diseñado y desarrollado por Beewalle.</p>
                            </footer>
                    </section>
                    <div className="mr-9 mt-6">
                    <HeaderR/>
                    </div>
        </div>
    </div>
    )
}

export default user