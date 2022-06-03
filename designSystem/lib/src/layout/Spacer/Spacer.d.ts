/// <reference types="react" />
import "./spacer.css";
import { choices } from "../../../tokens";
export interface SpacerProps {
    size?: keyof typeof choices.spacing;
    type?: "horizontal" | "vertical";
}
declare const Spacer: ({ size, type }: SpacerProps) => JSX.Element;
export default Spacer;
