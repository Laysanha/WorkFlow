import { useState } from 'react';
import LogoWorkFlow from '../assets/LogoWorkFlow.svg';
import { InputEmail } from '../compoments/InputEmail';
import { PrimaryButtom } from '../compoments/primaryButtom';
import { IoReturnDownForward } from "react-icons/io5";

export const Login = () => {    
    const [emailInput, setEmailInput] = useState("");
    const onChange = setEmailInput;

    return(
        <div className='flex flex-col items-center gap-4'>
            <img src={LogoWorkFlow} alt="Logo WorkFlow" />
            <p className='text-xl text-gray-600 font-medium'>Por favor, digite suas informações de login</p>

            <InputEmail
                type='email'
                onChange={onChange} 
                placeholder="Informe seu e-mail" 
                name="email"
                value={emailInput}
            />

            <PrimaryButtom
                contentButtom="Conectar"
            />
        </div>
    )
}