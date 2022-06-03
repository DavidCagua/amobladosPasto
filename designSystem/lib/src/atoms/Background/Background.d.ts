import React from "react";
import "./background.css";
export interface BackgroundProps {
    type?: "primary" | "secondary";
    children: React.ReactNode;
    onClick?: () => void;
}
declare const Background: ({ type, children }: BackgroundProps) => JSX.Element;
export default Background;
