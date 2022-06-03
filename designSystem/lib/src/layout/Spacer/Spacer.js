import React from 'react';
import './spacer.css.js';
import classNames from 'classnames';

const Spacer = ({ size = 12, type = "horizontal" }) => {
    // const height = 10;
    return (React.createElement("div", { className: classNames("spacer", {
            [`type--${type === "horizontal" ? "horizontal" : "vertical"}`]: type,
        }) }, size));
};

export { Spacer as default };
//# sourceMappingURL=Spacer.js.map
