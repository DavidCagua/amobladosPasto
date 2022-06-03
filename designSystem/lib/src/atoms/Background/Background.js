import React from 'react';
import './background.css.js';
import classNames from 'classnames';

const Background = ({ type = "primary", children }) => {
    return (React.createElement("div", { className: classNames("background", {
            [`background--type-${type}`]: type,
        }) },
        React.createElement("div", { className: "elipse" }),
        children));
};

export { Background as default };
//# sourceMappingURL=Background.js.map
