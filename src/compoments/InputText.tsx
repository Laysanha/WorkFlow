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
        />
    )
}