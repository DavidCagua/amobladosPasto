import Ts from "rollup-plugin-typescript2";
// import resolve from "@rollup/plugin-node-resolve";
import postcss from "rollup-plugin-postcss";

export default {
  input: ["src/index.ts"],
  output: {
    dir: "lib",
    format: "esm",
    sourcemap: true,
  },
  plugins: [
    Ts(),
    // resolve({ extensions: [".css"] }),
    postcss({
      extensions: [".css"],
    }),
  ],
  // preserveModules: true,
  external: ["react"],
};
