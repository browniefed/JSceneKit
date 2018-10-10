import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import builtins from "rollup-plugin-node-builtins";

import pkg from "./package.json";

export default {
  input: "src/js/main.js",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [
    external(),
    builtins({
      fs: false,
      buffer: true,
    }),
    url(),
    babel({
      exclude: "node_modules/**",
      plugins: ["@babel/plugin-proposal-export-default-from"],
    }),
    resolve(),
    commonjs(),
  ],
};
