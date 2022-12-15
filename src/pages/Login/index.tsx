import { useState } from 'react';

import GoogleIcon from '../../assets/socialMedia/google.svg';
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../compoments/InputBase';
import { Button, OutlineBtn } from '../../compoments/PrimaryButton';
import { DivisorRegister } from '../../compoments/Divisor';
import { AboveInformation } from '../../compoments/AboveInformartion';
import { auth } from '../../services/firebase';
import { async } from '@firebase/util';

export const Login = () => {  
    const [emailInput, setEmailInput] = useState("");
    const [passWordInput, setPassWordInput] = useState("");
    const [user, setUser] = useState<User>({} as User);
    const [authing, SetAuthing] = useState(Boolean);

    const navigate = useNavigate();

    const handleGoogleSign = async () => {
        const provider = new GoogleAuthProvider;   
        SetAuthing(true);

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user.uid);
                navigate('/Dashboard');
            })
            .catch((error) => {
                console.log(error);
                SetAuthing(false);
            });
    }

    return(
        <div className='py-12 flex flex-col items-center gap-4'>
            <AboveInformation title='Por favor, digite suas informações de login'/>

            <form action="" method="get" className='flex flex-col gap-4 items-center'>
                <Input 
                    label='E-mail'
                    type='email'
                    placeholder='Informação seu e-mail'
                    value={emailInput}
                    onChange={event => setEmailInput(event.target.value)}
                />
                <Input 
                    label='senha'
                    type='password'
                    placeholder='Informação sua senha'
                    value={passWordInput}
                    onChange={event => setPassWordInput(event.target.value)}
                />
                <Button
                    textButton='Enviar'
                />
            </form>
            
            <p>Não tem uma conta? <Link className='text-purpleBlue-900 hover:text-purpleBlue-700' to='/Cadastro'>Criar uma conta</Link></p>
            
            <DivisorRegister/>
            <OutlineBtn 
                textButton='Cadastre-se no Google'
                svgButton={GoogleIcon}
                alt='G logo da google'
                onClick={() => handleGoogleSign()} disabled={authing}
            />

            <Link to='/Dashboard'>para entrar na dash</Link>

        </div>
    )
}

function then() {
    throw new Error('Function not implemented.');
}
