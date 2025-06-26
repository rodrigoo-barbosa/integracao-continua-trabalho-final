// eslint.config.js
import eslintPluginJs from "@eslint/js";

export default [
  {
    ignores: ["node_modules/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        // Suporte ao ambiente Mocha
        describe: "readonly",
        it: "readonly",
        before: "readonly",
        after: "readonly",
      },
    },
    plugins: {
      js: eslintPluginJs,
    },
    rules: {
      ...eslintPluginJs.configs.recommended.rules,
    },
  },
];
