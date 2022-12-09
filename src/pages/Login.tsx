import { useState } from 'react';
import LogoWorkFlow from '../assets/LogoWorkFlow.svg';
import { InputText } from '../compoments/InputText';
export const Login = () => {
    
    const [emailInput, setEmailInput] = useState("");
    const [passWordInput, setPassWordInput] = useState("");

    return(
        <div className='flex flex-col items-center gap-4'>
            <img src={LogoWorkFlow} alt="Logo WorkFlow" />
            <p className='text-xl text-gray-600 font-medium'>Por favor, digite suas informações de login</p>

            <InputText
                onChange={onChange} 
                placeholder="Informe seu e-mail" 
                name="email"
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

            <PrimaryButtom
                contentButtom="Conectar"
            />
        </div>
    )
}