import { ButtonHTMLAttributes } from "react";

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    textButton: string;
}