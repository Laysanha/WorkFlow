import { Link } from "react-router-dom"
import { AboveInformation } from "../../compoments/AboveInformartion"
import { Input } from "../../compoments/InputBase"
import { Button } from "../../compoments/PrimaryButton"

export const Register = () => {
    return(
        <div className="py-8 flex flex-col items-center gap-4">
            <AboveInformation title="Por favor, digite suas informações para finalizar o cadastro"/>
            
            <form className="flex flex-col gap-4 items-center">
                <Input label='E-mail'
                    type='email'
                />
                <Input label='Telefone'
                />
                <Input label='Senha'
                    type='password'/>
                <Input label='Confirmar senha'
                    type='password'
                />

                <Button textButton='Cadastre-se'/>
            </form>

            <p>Já tem uma conta? <Link className='text-purpleBlue-900 hover:text-purpleBlue-700' to='/'>Faça o login</Link></p>
        </div>
    )
}