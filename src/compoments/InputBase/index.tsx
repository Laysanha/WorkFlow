import { forwardRef, ForwardRefRenderFunction } from "react"
import { PropsInput } from "./interface/inputInterface"

const InputBase: ForwardRefRenderFunction<HTMLInputElement, PropsInput> = ({ label, ...rest }: PropsInput) => {
    return (
        <label className="flex flex-col font-semibold text-xs text-gray-700">{label}
            <input className="w-80 h-10 px-3 text-sm font-normal text-gray-500 border border-gray-200 rounded-xl focus:outline-none focus:border-purpleBlue-900" {...rest}/>
        </label>
    )
}

export const Input = forwardRef(InputBase)

