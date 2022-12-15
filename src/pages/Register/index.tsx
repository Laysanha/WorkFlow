import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { AboveInformation } from "../../compoments/AboveInformartion";
import { Input } from "../../compoments/InputBase";
import { Button } from "../../compoments/PrimaryButton";

export const Register = () => {
    return(
        <div className="py-8 flex flex-col items-center gap-4">
            <AboveInformation title="Por favor, digite suas informações para finalizar o cadastro"/>            
            
            <form className="flex flex-col gap-4 items-center">
                <Input 
                    label='Nome'
                    type='email' 
                    placeholder='Informe seu nome'
                />  
                <Input 
                    label='Sobrenome'
                    type='email' 
                    placeholder='Informe seu sobrenome'
                />
                <Input 
                    label='E-mail'
                    type='email' 
                    placeholder='Informe seu e-mail'
                />
                <Input 
                    label='Telefone'
                    placeholder='Informe seu número de contato'
                />
                <Input 
                    label='Senha'
                    type='password'
                    placeholder='Informe sua senha'
                />
                <Input 
                    label='Confirmar senha'
                    placeholder='Informe novamente sua senha'
                    type='password'
                />

                <Button 
                    textButton='Cadastre-se'
                />
            </form>

            <p>Já tem uma conta? <Link className='text-purpleBlue-900 hover:text-purpleBlue-700' to='/'>Faça o login</Link></p>
        </div>
    )
}