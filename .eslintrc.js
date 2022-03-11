module.exports = {
  root: true,
  env: {
    node: true,
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        printWidth: 220,
        endOfLine: "auto",
      },
    ],
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
};
