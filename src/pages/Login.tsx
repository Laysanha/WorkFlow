import { useState } from 'react';
import { Input } from '../compoments/InputBase';
import { Button, OutlineBtn } from '../compoments/PrimaryButton';

import LogoWorkFlow from '../assets/LogoWorkFlow.svg';
import GoogleIcon from '../assets/socialMedia/google.svg';
import { DivisorRegister } from '../compoments/Divisor';

export const Login = () => {  
    const [emailInput, setEmailInput] = useState("");
    const [passWordInput, setPassWordInput] = useState("");

    return(
        <div className='py-8 flex flex-col items-center gap-4'>
            <img src={LogoWorkFlow} alt="Logo WorkFlow" />
            <p className='w-80 text-center text-xl font-medium'>Por favor, digite suas informações de login</p>

            <form action="" method="get" className='flex flex-col gap-4 items-center'>
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
                    textButton='Enviar'
                />

                <p>Não tem uma conta? <a href='#' className='text-purpleBlue-900'>Criar uma conta</a></p>

                <DivisorRegister/>

                <OutlineBtn 
                    textButton='Cadastre-se no Google'
                    svgButton={GoogleIcon}
                    alt='G logo da google'

                />
            </form>

        </div>
    )
}