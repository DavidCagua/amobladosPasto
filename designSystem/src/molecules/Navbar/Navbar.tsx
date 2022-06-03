import React from "react";
import "./navbar.css";
import Logo from "../../atoms/Logo";
import Button from "../../atoms/Button";

export interface NavbarProps {}

const Navbar = ({}: NavbarProps) => {
  return (
    <div className="Navbar">
      <Logo />
      <Button rounded label="Iniciar sesión" />
    </div>
  );
};

export default Navbar;
