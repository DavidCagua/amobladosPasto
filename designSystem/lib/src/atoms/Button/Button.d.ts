/// <reference types="react" />
import "./button.css";
export interface ButtonProps {
    type?: "primary" | "secondary";
    rounded?: boolean;
    size?: "sm" | "md" | "lg";
    label?: string;
    onClick?: () => void;
}
declare const Button: ({ type, rounded, size, label, ...props }: ButtonProps) => JSX.Element;
export default Button;
