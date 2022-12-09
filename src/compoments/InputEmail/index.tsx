type Props = {
    onChange: (str: string) => void;
    placeholder: string;
    name: string;
    value?: string;
    type: string;
};

export const InputEmail = ({ onChange, placeholder, name, value = "", type }: Props) => {
    return(
        <label className="w-[520px] flex flex-col font-semibold text-xs text-gray-700"> E-mail
            <input
                className='h-10 px-3 text-sm font-normal text-gray-500 border border-gray-200 rounded-xl focus:outline-none focus:border-purpleBlue-900'
                onChange={event => onChange(event.target.value)} 
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
            />
        </label>
    )
}
