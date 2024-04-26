import HeaderRegister from './HeaderRegister'
import stepper4 from "../../assets/icons/stepper4.svg"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useState } from 'react';

const Register9 = () => {
    const [number, setNumber] = useState ("")

    const handleNumberChange = (event:any) => {
        const newNumber = event.target.value;
        setNumber(newNumber);
        console.log(number);
        
      };

    return (
        <div className='h-screen bg-white' >
            <div>
                <HeaderRegister/>
            </div>
            <div className=' flex flex-col items-center'>
                <div className='mt-10'>
                    <img src={stepper4} alt="" />
                </div>
                <div className=' text-center mt-12'>
                    <p className='font-bold text-xs'>Autenticación 2FA</p>
                    <h2 className='mt-6 text-2xl font-bold'>Verifica tu número de teléfono con un código.</h2>
                    <p className='mt-3 text-xs text-gray-900 f'>Esto nos ayuda a mantener tu cuenta segura.</p>
                </div>
                
                <div className='flex mt-16'>
                <Select>
                <SelectTrigger className="w-[100px] text-gray-500 text-xs">
                    <SelectValue placeholder="Codigo Pais"/>
                </SelectTrigger>
                <SelectContent className=" ml-4">
                    <SelectGroup className='bg-white pt-1'>
                    <SelectItem value="+54" className='hover:bg-yellow-700'>+54</SelectItem>
                    <SelectItem value="+591" className='hover:bg-yellow-700'>+591</SelectItem>
                    <SelectItem value="+55" className='hover:bg-yellow-700'>+55</SelectItem>
                    <SelectItem value="+56" className='hover:bg-yellow-700'>+56</SelectItem>
                    <SelectItem value="+57" className='hover:bg-yellow-700'>+57</SelectItem>
                    <SelectItem value="+593" className='hover:bg-yellow-700'>+593</SelectItem>
                    <SelectItem value="+595" className='hover:bg-yellow-700'>+595</SelectItem>
                    <SelectItem value="+51" className='hover:bg-yellow-700'>+51</SelectItem>
                    <SelectItem value="+598" className='hover:bg-yellow-700'>+598</SelectItem>
                    </SelectGroup>
                </SelectContent>
                </Select>
                    <div>
                    <Input value={number} onChange={handleNumberChange}  className="bg-transparent w-96 border-black rounded-md" placeholder="Numero de Telefono"/>
                    </div>
                </div>
                    <Button type="submit"
                    size="lg"
                    disabled={!number} 
                    className="rounded-full w-[40%] mt-8 select-none font-semibold text-white bg-yellow-600"
                    >
                        Continuar
                    </Button>
            </div>
        </div>
    )
}

export default Register9