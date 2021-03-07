import { nodeResolve } from "@rollup/plugin-node-resolve";
// import json from "@rollup/plugin-json";
// import externalGlobals from "rollup-plugin-external-globals";

export default {
  plugins: [
    nodeResolve(),
    // json(),
    // externalGlobals({
    //   "aws-sdk": "aws-sdk",
    //   react: "react",
    // }),
  ],
  input: "src/index.js",
  external: ["aws-sdk", "react"],
  output: [
    { file: "dist/main.cjs.js", format: "cjs" },
    { file: "dist/main.esm.js", format: "es" },
  ],
};
