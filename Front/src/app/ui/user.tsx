

const user = () => {

    return (
        <div className="flex">
        <div className="w-[30%] border-r-2 border-yellow-700">
        <section className=" flex flex-col items-center ml-8 justify-center w-[263px] sticky top-20 overflow-y-auto ">
                        <div className="flex flex-col mt-8 ">
                        <p className="text-xl mb-2 font-bold text-yellow-600">Perfil de Usuario</p>
                        <button className=" w-full px-3 py-3 flex items-center cursor-pointer rounded my-2">
                            <span>

                            </span>
                            <span  className=" text-slate-100 font-bold border-l-2 border-yellow-500 pl-2">General</span>
                        </button>

                        <button className=" w-full px-3 py-3 flex items-center cursor-pointer rounded my-2">
                            <span>

                            </span>
                            <span className=" text-slate-100 font-bold border-l-2 border-yellow-500 pl-2">Privacidad</span>
                        </button>

                        <button className=" w-full px-3 py-3 flex items-center cursor-pointer rounded my-2">
                            <span>

                            </span>
                            <span className=" text-slate-100 font-bold border-l-2 border-yellow-500 pl-2">Configuracion</span>
                        </button>

                        <button className=" w-full px-3 py-3 flex items-center cursor-pointer rounded my-2">
                            <span>

                            </span>
                            <span className=" text-slate-100 font-bold border-l-2 border-yellow-500 pl-2">Chat de Soporte</span>
                        </button>
                        </div>

                        <div className=" flex justify-center items-center mt-40">
                            <span className="mr-6 rounded-full border border-yellow-600">
                            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                            <path d="M39.9797 18.8531C39.4336 11.3858 33.15 5.46558 25.5 5.46558C17.85 5.46558 11.5664 11.3858 11.0202 18.8531C7.83275 19.582 5.4655 22.3147 5.4655 25.5022C5.4655 28.6897 7.83275 31.4224 11.0202 32.1492C11.5664 39.6186 17.85 45.5367 25.5 45.5367H30.9655V41.8945H25.5C19.4905 41.8945 14.5711 36.9772 14.5711 30.9656V20.0388C14.5711 14.0293 19.4905 9.11208 25.5 9.11208C31.5116 9.11208 36.4289 14.0293 36.4289 20.0388V30.513C36.4306 30.9954 36.623 31.4577 36.9641 31.7988C37.3053 32.14 37.7675 32.3324 38.25 32.3341C42.2577 32.3341 45.5366 29.238 45.5366 25.5043C45.5366 22.3168 43.1694 19.5841 39.9819 18.8552L39.9797 18.8531ZM9.10775 25.5022C9.10775 24.3186 9.83663 23.3156 10.9289 22.7695V28.235C9.83663 27.6867 9.10775 26.6858 9.10775 25.5022ZM40.0711 28.235V22.7695C41.1655 23.3156 41.8944 24.3186 41.8944 25.5022C41.8944 26.6858 41.1655 27.6867 40.0711 28.235Z" fill="#FCCF58"/>
                            </svg>
                            </span>
                            <button className="border border-gray-400 rounded-xl w-[134px] h-9 text-neutral-100">Cerrar sesion</button>
                        </div>
                    </section>
        </div>

        <div className="w-[70%]">
                    <section className="mt-12 w-[80%] ml-20">
                            <div>
                                <h1 className="text-5xl font-bold text-yellow-600">GENERAL</h1>
                                <hr className="w-full h-px border-1 my-4 border-yellow-600" />
                                <div className=" flex w-full rounded-lg px-6 py-12 mt-5 bg-zinc-900">
                                    <img className="h-14 w-14 mr-4" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" />
                                    <h4 className="mt-4 text-white">Nombre y Apellido:</h4>
                                    <span></span>
                                </div>
                                <h4 className=" mt-8 text-xl text-white">Informacion del Usuario</h4>
                                <div className=" flex w-full rounded-lg px-6 py-12 mt-5 bg-zinc-900">
                                    <ul className="flex flex-col">
                                        <li className="text-white">Telefono:</li>
                                        <li className="text-white">Email:</li>
                                        <li className="text-white">Fecha de nacimiento:</li>
                                        <li className="text-white">Pais:</li>
                                    </ul>
                                </div>
                            </div>

                            <div className=" mt-28">
                                <h1 className="text-5xl font-bold text-yellow-600">PRIVACIDAD</h1>
                                <hr className="w-full h-px border-1 my-4 border-yellow-600" />

                                <div className=" flex flex-col w-full rounded-lg px-6 py-12 mt-5 bg-zinc-900">
                                    <p className="text-white">Contrseña:</p>
                                    <p className="text-white">PIN:</p>
                                </div>

                                <h4 className=" mt-8 text-xl text-white">Documentos</h4>
                                <div className=" flex w-full rounded-lg px-6 py-12 mt-3 bg-zinc-900">
                                    <p className="text-white">ID o identificacion:</p>
                                </div>
                            </div>

                            <div className=" mt-28">
                                <h1 className="text-5xl font-bold text-yellow-600">CONFIGURACION</h1>
                                <hr className="w-full h-px border-1 my-4 border-yellow-600" />

                                <div className=" flex w-full rounded-lg px-6 py-12 mt-5 bg-zinc-900">
                                    <h4></h4>
                                    <p></p>
                                    <button>
                                        buscar
                                    </button>
                                </div>

                                <div className=" flex w-full rounded-lg px-6 py-12 mt-5 bg-zinc-900">
                                <h4>Info de la cuenta</h4>
                                    <p></p>
                                    <button>
                                        buscar
                                    </button>
                                </div>
                            </div>

                            <div className=" mt-28">
                                <h1 className="text-5xl font-bold text-yellow-600">Chat de Soporte</h1>
                                <hr className="w-full h-px border-1 my-4 border-yellow-600" />

                                <div className=" flex w-full rounded-lg px-6 py-12 mt-5 bg-zinc-900">
                                    <h4></h4>
                                    <p></p>
                                    <button>
                                        buscar
                                    </button>
                                </div>

                                <div className=" flex w-full rounded-lg px-6 py-12 mt-5 bg-zinc-900 mb-10">
                                <h4>Info de la cuenta</h4>
                                    <p></p>
                                    <button>
                                        buscar
                                    </button>
                                </div>
                            </div>
                    </section>
        </div>
    </div>
    )
}

export default user