import { useState } from 'react';
import LogoWorkFlow from '../assets/LogoWorkFlow.svg';
import { Input } from '../compoments/InputBase';
export const Login = () => { 
    const [emailInput, setEmailInput] = useState("");
    const [passWordInput, setPassWordInput] = useState("");

    return(
        <div className='flex flex-col items-center gap-2'>
            <img src={LogoWorkFlow} alt="Logo WorkFlow" />
            <p className='text-xl font-medium'>Por favor, digite suas informações de login</p>

            <Input 
                label='E-mail'
                type='email'
                placeholder='Informação aqui'
                value={emailInput}
                onChange={event => setEmailInput(event.target.value)}
            />
            <Input 
                label='senha'
                type='password'
                placeholder='Informação aqui'
                value={passWordInput}
                onChange={event => setPassWordInput(event.target.value)}
            />
        </div>
    )
}