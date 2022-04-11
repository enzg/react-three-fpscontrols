import resolve from "@rollup/plugin-node-resolve";
import swc from "rollup-plugin-swc";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve({
        extensions: [".js", ".ts", ".tsx"],
      }),
      swc({
        rollup: {
          exclude: "node_modules/**",
        },
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
          },
          target: "es5",
        },
      }),
    ],
  },
];
