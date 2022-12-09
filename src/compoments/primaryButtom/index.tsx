import { forwardRef, ForwardRefRenderFunction } from "react";
import { PropsButton } from "./interface/interfaceButton";

const PrimaryButton: ForwardRefRenderFunction<HTMLButtonElement, PropsButton> = ({ textButton,...rest }: PropsButton ) => {
    return(
        <button
            {...rest}
            className="w-96 h-10 px-3 text-sm text-gray-50 text-sm text-gray-50 bg-purpleBlue-900 rounded-xl flex flex-row justify-center items-center gap-2 placeholder:bg-purpleBlue-800 focus:bg-purpleBlue-700"
        >
            {textButton}
        </button>
    )
}

export const Button = forwardRef(PrimaryButton);
