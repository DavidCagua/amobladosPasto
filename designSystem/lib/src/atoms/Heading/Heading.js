import React from 'react';
import './heading.css.js';
import classNames from 'classnames';

const Heading = ({ isCentered = false, isInline = false, size = "md", color = "black", weight = "normal", children, }) => {
    return (React.createElement("h1", { className: classNames("heading", {
            "is-centered": isCentered,
            "is-inline": isInline,
        }, { [`size-${size}`]: size }, { [`color-${color}`]: color }, { [`weight-${weight}`]: weight }) }, children));
};

export { Heading as default };
//# sourceMappingURL=Heading.js.map
