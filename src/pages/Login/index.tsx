//React
import { useContext, useState } from 'react';
//Router-dom
import { Link, useNavigate } from 'react-router-dom';
//Firebase
import { GoogleAuthProvider, signInWithPopup, User } from "firebase/auth";
import { auth } from '../../services/firebase';
//Compoments
import { Input } from '../../compoments/InputBase';
import { Button, OutlineBtn } from '../../compoments/PrimaryButton';
import { DivisorRegister } from '../../compoments/Divisor';
import { AboveInformation } from '../../compoments/AboveInformartion';
import { AuthContext } from '../../contexts/authRegister';
//media
import GoogleIcon from '../../assets/socialMedia/google.svg';

export const Login = () => {  
    const [emailInput, setEmailInput] = useState("");
    const [passWordInput, setPassWordInput] = useState("");
    
    const context = useContext(AuthContext);
    console.log(context);
    
    const navigate = useNavigate();

    const handleGoogleSign = () => {
        const provider = new GoogleAuthProvider;   

        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user.uid);
                navigate('/Dashboard');
            })
            .catch((error) => {
                console.log(error);
            }
        );
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
            
            <p>Não tem uma conta? <Link className='text-purpleBlue-900 hover:text-purpleBlue-700' to='/'>Criar uma conta</Link></p>
            
            <DivisorRegister/>
            <OutlineBtn 
                textButton='Cadastre-se no Google'
                svgButton={GoogleIcon}
                alt='G logo da google'
                onClick={() => handleGoogleSign()}
            />

            <Link to='/Dashboard'>para entrar na dash</Link>
        </div>
    )
}