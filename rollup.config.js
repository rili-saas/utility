import { nodeResolve } from "@rollup/plugin-node-resolve";
import json from "@rollup/plugin-json";
import externalGlobals from "rollup-plugin-external-globals";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default {
  plugins: [
    nodeResolve(),
    json(),
    externalGlobals({
      "aws-sdk": "aws-sdk",
      react: "react",
    }),
  ],
  input: "src/index.js",
  output: [
    {
      file: `dist/main.min.js`,
      format: "umd",
      name: `${pkg.name}`,
      plugins: [terser()],
      sourcemap: true,
    },
    {
      file: `dist/main.js`,
      format: "umd",
      name: `${pkg.name}`,
    },
  ],
};
