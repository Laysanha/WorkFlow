type Props = {
    contentButtom: string;
}

export const PrimaryButtom = ({ contentButtom }: Props) => {
    return(
        <button className="flex flex-row justify-center items-center gap-2 w-[520px] h-10 px-3 bg-purpleBlue-900 text-sm text-gray-50 rounded-xl">
            {contentButtom}
        </button>
    )
}