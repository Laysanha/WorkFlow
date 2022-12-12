import GoogleIcon from '../../assets/socialMedia/google.svg';

import { useState } from 'react';
import { Input } from '../../compoments/InputBase';
import { Button, OutlineBtn } from '../../compoments/PrimaryButton';
import { DivisorRegister } from '../../compoments/Divisor';
import { Link } from 'react-router-dom';
import { AboveInformation } from '../../compoments/AboveInformartion';

export const Login = () => {  
    const [emailInput, setEmailInput] = useState("");
    const [passWordInput, setPassWordInput] = useState("");

    return(
        <div className='py-8 flex flex-col items-center gap-4'>
            <AboveInformation title='Por favor, digite suas informações de login'/>

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

                <p>Não tem uma conta? <Link className='text-purpleBlue-900 hover:text-purpleBlue-700' to='/Cadastro'>Criar uma conta</Link></p>

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