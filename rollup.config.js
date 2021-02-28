import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  plugins: [nodeResolve(), commonjs()],
  input: "src/index.js",
  output: [
    {
      file: `dist/main.min.js`,
      format: "cjs",
      name: `${pkg.name}`,
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: `dist/main.js`,
      format: "cjs",
      name: `${pkg.name}`,
    },
  ],
};
