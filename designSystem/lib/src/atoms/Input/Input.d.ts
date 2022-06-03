/// <reference types="react" />
import "./input.css";
export interface InputProps {
    type?: "primary" | "secondary";
    rounded?: boolean;
    size?: "sm" | "md" | "lg";
    placeholder?: string;
    onClick?: () => void;
}
declare const Input: ({ placeholder }: InputProps) => JSX.Element;
export default Input;
