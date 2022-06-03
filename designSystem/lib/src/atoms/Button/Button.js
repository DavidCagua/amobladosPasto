import { __rest } from '../../../_virtual/_tslib.js';
import React from 'react';
import './button.css.js';
import classNames from 'classnames';

const Button = (_a) => {
    var { type = "primary", rounded = false, size = "md", label } = _a, props = __rest(_a, ["type", "rounded", "size", "label"]);
    return (React.createElement("button", Object.assign({ className: classNames("button", { [`button--type-${type}`]: type }, { [`button--${rounded ? "rounded" : ""}`]: rounded }) }, props), label));
};

export { Button as default };
//# sourceMappingURL=Button.js.map
