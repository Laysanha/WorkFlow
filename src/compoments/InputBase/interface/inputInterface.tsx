import { ForwardRefRenderFunction, InputHTMLAttributes } from "react";

export interface PropsInput extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}