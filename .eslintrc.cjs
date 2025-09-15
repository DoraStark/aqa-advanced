module.exports = {
  env: { browser: true, node: true, es2023: true },
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  rules: {
    "no-unused-vars": "warn",
    "no-undef": "error",
  },
};
