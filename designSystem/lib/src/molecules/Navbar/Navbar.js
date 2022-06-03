import React from 'react';
import './navbar.css.js';
import Logo from '../../atoms/Logo/Logo.js';
import Button from '../../atoms/Button/Button.js';

const Navbar = ({}) => {
    return (React.createElement("div", { className: "Navbar" },
        React.createElement(Logo, null),
        React.createElement(Button, { rounded: true, label: "Iniciar sesi\u00F3n" })));
};

export { Navbar as default };
//# sourceMappingURL=Navbar.js.map
