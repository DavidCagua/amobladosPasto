import React from "react";
import "./input.css";
// import classNames from "classnames";

export interface InputProps {
  type?: "primary" | "secondary";
  rounded?: boolean;
  size?: "sm" | "md" | "lg";
  placeholder?: string;
  onClick?: () => void;
}

const Input = ({ placeholder }: InputProps) => {
  return <input type="text" placeholder={placeholder}></input>;
};

export default Input;
