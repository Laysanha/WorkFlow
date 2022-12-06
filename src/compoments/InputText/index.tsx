type Props = {
    onChange: (str: string) => void;
    placeholder: string;
    name: string;
    value?: string;
};

export const InputText = ({onChange, placeholder, name, value = "" }: Props) => {
    return(
        <input
            onChange={event => onChange(event.target.value)} 
            name={name}
            placeholder={placeholder}
            value={value}
            className='h-12 px-4 text-sm text-gray-500 border border-gray-200 rounded-xl focus:outline-none focus:border-purpleBlue-900'
        />
    )
}