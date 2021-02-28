import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  // UMD
  plugins: [nodeResolve()],
  input: "src/index.js",
  output: [
    {
      file: `dist/main.min.js`,
      format: "umd",
      name: `${pkg.name}`,
      esModule: false,
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: `dist/main.js`,
      format: "umd",
      name: `${pkg.name}`,
      esModule: false,
    },
  ],
};
