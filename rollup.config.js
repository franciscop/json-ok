import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

export default {
  input: "index.js",
  output: {
    file: "index.min.js",
    format: "esm"
  },
  plugins: [nodeResolve({ preferBuiltins: true }), commonjs(), terser()]
};
