import LogoWorkFlow from '../../assets/LogoWorkFlow.svg';
import { Title } from './Interface/TitleAbove';

export const AboveInformation = ( {title}:Title ) => {
    return (
        <>
            <img src={LogoWorkFlow} alt="Logo WorkFlow" />
            <p className='w-80 text-center text-xl font-medium'>{title}</p>
        </>
    )
}