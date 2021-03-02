import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  plugins: [nodeResolve(), json(), commonjs()],
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
