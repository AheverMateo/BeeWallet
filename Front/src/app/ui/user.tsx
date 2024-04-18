

const user = () => {

    return (
        <div className="flex">


        <div className="w-[70%]">
                    <section className="mt-12 w-[80%] ml-20">
                            <div>
                                <h1 className="text-xl font-bold text-white">Personal</h1>
                                <hr className="w-full h-px border-1 my-4 border-yellow-600" />
                                <div className=" flex w-full rounded-lg px-6 py-12 mt-5 bg-zinc-900">
                                    <img className="h-14 w-14 mr-10" src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png" alt="" />
                                    <h4 className="mt-4 text-white">Nombre y Apellido:</h4>
                                    <span></span>
                                </div>
                                <div className=" flex w-full rounded-lg px-6 py-6 mt-5 bg-zinc-900">
                                    <ul className="flex flex-col">
                                        <li className="text-white">Telefono:</li>
                                        <li className="text-white">Email:</li>
                                        <li className="text-white">Fecha de nacimiento:</li>
                                        <li className="text-white">Direccion:</li>
                                        <li className="text-white">Pais:</li>
                                    </ul>
                                </div>
                                <div className=" flex w-full rounded-lg px-6 py-10 mt-5 bg-zinc-900">
                                    <ul className="flex flex-col">
                                        <li className="text-white">Datos Fiscales:</li>
                                        <li className="text-white">Cuit/Cuil:</li>
                                        <li className="text-white">Ocupacion:</li>
                                    </ul>
                                </div>
                            </div>

                            <div className=" mt-28">
                                <h1 className="text-xl font-bold text-white">Privacidad</h1>
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
                                <h1 className="text-xl font-bold text-white">Configuracion</h1>
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
                    </section>
        </div>
    </div>
    )
}

export default user