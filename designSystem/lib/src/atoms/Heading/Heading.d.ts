/// <reference types="react" />
import "./heading.css";
import { choices } from "../../../tokens";
export interface HeadingProps {
    isCentered?: boolean;
    isInline?: boolean;
    children?: string;
    size?: keyof typeof choices.fontSize;
    color?: "white" | "black";
    weight?: "normal" | "bold";
}
declare const Heading: ({ isCentered, isInline, size, color, weight, children, }: HeadingProps) => JSX.Element;
export default Heading;
