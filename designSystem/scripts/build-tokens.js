"use strict";
exports.__esModule = true;
// const { choices, decisions } = require("../tokens");
var tokens_1 = require("../tokens");
console.log(tokens_1.choices);
// const toKebabCase = require("../utils/toKebabCase");
// const fs = require("fs");
// const cleanLines = (string = "") => string.trim().replace(/^\n\n/gm, "\n");
// function transformTokens(parentKey: any, object: any): any {
//   const objectKeys = Object.keys(object);
//   return objectKeys.reduce((transformedTokens, objectKey) => {
//     const value = object[objectKey];
//     const customProperty = parentKey
//       ? toKebabCase(`${parentKey}-${objectKey}`)
//       : toKebabCase(`${objectKey}`);
//     if (Array.isArray(value)) {
//       return `${transformedTokens}\n  --${customProperty}: ${value.join(
//         ", "
//       )};`;
//     } else if (typeof value === "object") {
//       return `${transformedTokens}\n${transformTokens(customProperty, value)}`;
//     }
//     const label = `--${parentKey}-${toKebabCase(objectKey)}`;
//     return `${transformedTokens}\n  ${label}: ${value};`;
//   }, "");
// }
// function buildTokens() {
//   const transformedChoices = transformTokens(null, choices);
//   const transformedDecisions = transformTokens(null, decisions);
//   const customProperties = `${transformedChoices}${transformedDecisions}`;
//   const data = `:root {\n  ${cleanLines(customProperties)}\n}\n`;
//   fs.writeFile("./styles/tokens.css", data, "utf8", (error: any) => {
//     if (error) throw error;
//     console.log("🎨 Custom properties created!");
//   });
// }
// buildTokens();
