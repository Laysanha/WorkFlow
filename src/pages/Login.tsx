import { useState } from 'react';
import LogoWorkFlow from '../assets/LogoWorkFlow.svg';
import { InputText } from '../compoments/InputText';
export const Login = () => {
    
    const [emailInput, setEmailInput] = useState("");
    const onChange = setEmailInput;

    return(
        <div className='flex flex-col items-center gap-2'>
            <img src={LogoWorkFlow} alt="Logo WorkFlow" />
            <p className='text-xl font-medium'>Por favor, digite suas informações de login</p>

            <InputText 
                onChange={onChange} 
                placeholder="teste" 
                name={emailInput}
                value="teste"
            />
        </div>
    )
}