import { forwardRef, ForwardRefRenderFunction } from "react";
import { PropsButton, PropsButtonOutline } from "./interface/interfaceButton";

const PrimaryButton: ForwardRefRenderFunction<HTMLButtonElement, PropsButton> = ({ textButton, svgButton, alt, ...rest }: PropsButton ) => {
    return(
        <button
            {...rest}
            className="w-96 h-10 px-3 text-sm text-gray-50 bg-purpleBlue-900 rounded-xl flex flex-row justify-center items-center gap-2 focus:bg-purpleBlue-800 focus:outline-none focus:ring-1 focus:ring-offset-2 hover:bg-purpleBlue-900 focus:ring-purpleBlue-700"
        >
            <img src={svgButton} alt={alt}/>
            {textButton}
        </button>
    )
}

const OutlineButton: ForwardRefRenderFunction<HTMLButtonElement, PropsButtonOutline> = ({ textButton, svgButton, alt, ...rest }) => {
    return(
        <button className="w-96 h-10 px-3 text-sm text-gray-600 border border-gray-200 rounded-xl flex flex-row justify-center items-center gap-2 focus:border-purpleBlue-800 focus:outline-none focus:ring-1 focus:ring-offset-2 hover:text-purpleBlue-900 hover:border-purpleBlue-900 focus:ring-purpleBlue-700"
        {...rest}
        >
            <img src={svgButton} alt={alt} />
            {textButton}
        </button>
    )
}

export const Button = forwardRef(PrimaryButton);
export const OutlineBtn = forwardRef(OutlineButton);
