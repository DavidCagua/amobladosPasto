import React from 'react';
import Heading from '../../atoms/Heading/Heading.js';
import './card.css.js';

const Card = ({ title, src, price, location }) => {
    return (React.createElement("div", { className: "card" },
        React.createElement("div", { className: "card--img--container" },
            React.createElement("img", { className: "card--img--container--img", src: src, alt: "" })),
        React.createElement("div", { className: "card--info--container" },
            React.createElement(Heading, { weight: "bold", size: "lg" }, title),
            React.createElement(Heading, null, `$${price} COP / noche`),
            React.createElement("div", { className: "card--footer--container" },
                React.createElement(Heading, null, "4.9 (10 rese\u00F1as)"),
                React.createElement(Heading, null, location)))));
};

export { Card as default };
//# sourceMappingURL=Card.js.map
