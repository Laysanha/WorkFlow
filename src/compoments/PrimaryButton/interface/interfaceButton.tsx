import { ButtonHTMLAttributes } from "react";

export interface PropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
    textButton: string;
    svgButton?: string;
    alt?: string;
}

export interface PropsButtonOutline extends ButtonHTMLAttributes<HTMLButtonElement> {
    textButton: string;
    svgButton?: string;
    alt?: string;
}