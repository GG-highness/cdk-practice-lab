import globals from "globals";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.browser
      },
    },
    plugins: { "@typescript-eslint": typescriptPlugin },
    rules: { ...typescriptPlugin.configs.recommended.rules },
  },
  {
    files: ["**/*.js"],
    languageOptions: { sourceType: "commonjs" },
  },
];
