import { nodeResolve } from "@rollup/plugin-node-resolve";
import { babel } from "@rollup/plugin-babel";

export default [
  {
    plugins: [nodeResolve()],
    input: "src/backend/index.js",
    external: ["aws-sdk", "jsonwebtoken"],
    output: [{ file: "clients/backend.js", format: "cjs" }],
  },
  {
    plugins: [
      nodeResolve(),
      babel({
        babelHelpers: "bundled",
        presets: ["@babel/preset-react"],
      }),
    ],
    input: "src/frontend/index.js",
    external: ["react", "react-router-dom", "antd", "prop-types"],
    output: [{ file: "clients/frontend.js", format: "es" }],
  },
  {
    plugins: [nodeResolve()],
    input: "src/utility/index.js",
    output: [
      { file: "utility.cjs.js", format: "cjs", exports: "default" },
      { file: "utility.esm.js", format: "es" },
    ],
  },
];
