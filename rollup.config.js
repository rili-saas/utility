import { nodeResolve } from "@rollup/plugin-node-resolve";

export default [
  {
    plugins: [nodeResolve()],
    input: "src/backend/index.js",
    external: ["aws-sdk"],
    output: [{ file: "clients/backend.js", format: "cjs" }],
  },
  {
    plugins: [nodeResolve()],
    input: "src/frontend/index.js",
    external: ["react"],
    output: [{ file: "clients/frontend.js", format: "es" }],
  },
  {
    plugins: [nodeResolve()],
    input: "src/utility/index.js",
    output: [
      { file: "dist/utility.cjs.js", format: "cjs" },
      { file: "dist/utility.esm.js", format: "es" },
    ],
  },
];
