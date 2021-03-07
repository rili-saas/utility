import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  plugins: [nodeResolve()],
  input: "src/index.js",
  external: ["aws-sdk", "react"],
  output: [
    { file: "dist/main.cjs.js", format: "cjs" },
    { file: "dist/main.esm.js", format: "es" },
  ],
};
