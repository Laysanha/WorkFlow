import { useState } from 'react';
import { Input } from '../compoments/InputBase';
import { Button, OutlineBtn } from '../compoments/PrimaryButton';

import LogoWorkFlow from '../assets/LogoWorkFlow.svg';
import GoogleIcon from '../assets/socialMedia/google.svg';

export const Login = () => {  
    const [emailInput, setEmailInput] = useState("");
    const [passWordInput, setPassWordInput] = useState("");

    return(
        <div className='flex flex-col items-center gap-2'>
            <img src={LogoWorkFlow} alt="Logo WorkFlow" />
            <p className='text-xl font-medium'>Por favor, digite suas informações de login</p>

            <form action="" method="get" className='flex flex-col gap-4'>
                <Input 
                    required
                    label='E-mail'
                    type='email'
                    placeholder='Informação seu e-mail'
                    value={emailInput}
                    onChange={event => setEmailInput(event.target.value)}
                />
                <Input 
                    required
                    label='senha'
                    type='password'
                    placeholder='Informação sua senha'
                    value={passWordInput}
                    onChange={event => setPassWordInput(event.target.value)}
                />
                <Button
                    type='submit'
                    textButton='Enviar'
                />

                <OutlineBtn 
                    textButton='Cadastre-se no Google'
                    svgButton={GoogleIcon}
                    alt='G logo da google'

                />
            </form>

        </div>
    )
}