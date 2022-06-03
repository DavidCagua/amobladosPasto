import styleInject from '../../../node_modules/style-inject/dist/style-inject.es.js';

var css_248z = "button {\r\n  background: var(--colors-brand-secondary);\r\n  border-radius: var(--border-radius-md);\r\n  border: var(--border-width-thin) solid var(--color-base-transparent);\r\n  color: var(--colors-white);\r\n  padding: 12px 24px;\r\n}\r\n.button:focus {\r\n  box-shadow: 0 0 0 1px var(--color-primary), 0 0 10px 0 var(--color-primary);\r\n  outline: none;\r\n}\r\n\r\n.button:hover {\r\n  filter: brightness(1.1);\r\n}\r\n\r\n.button:active {\r\n  box-shadow: var(--box-shadow-xs);\r\n  filter: brightness(0.9);\r\n}\r\n\r\n.button--type-secondary {\r\n  background: var(--colors-white);\r\n  border: var(--border-width-thin) solid var(--colors-gray-900);\r\n  color: var(--colors-gray-900);\r\n}\r\n.button--rounded {\r\n  border-radius: var(--border-radius-full);\r\n}\r\n";
styleInject(css_248z);

export { css_248z as default };
//# sourceMappingURL=button.css.js.map
