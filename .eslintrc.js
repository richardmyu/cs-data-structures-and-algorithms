module.exports = {
  root: true,
  env: {
    es2021: true,
    node: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: 13,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "unix"],
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "no-prototype-builtins": "off",
    "no-unused-vars": "warn",
    "no-console": "off",
    "no-eval": "error",
    "no-var": "error"
  }
};