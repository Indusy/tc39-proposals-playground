import { defineConfig } from "rollup";
import commonjs from "@rollup/plugin-commonjs";
import nodeExternals from "rollup-plugin-node-externals";
import nodeResolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import run from "@rollup/plugin-run";

const isDevMode = process.env.NODE_ENV === "development";

const config = defineConfig({
  input: ["src/main.js"],
  output: {
    format: "esm",
    file: "lib/main.mjs",
  },
  plugins: [
    babel({ babelHelpers: "bundled" }),
    commonjs(),
    nodeExternals(),
    nodeResolve({
      exportConditions: ["node"],
    }),
    isDevMode && run(),
  ],
});

export default config;
