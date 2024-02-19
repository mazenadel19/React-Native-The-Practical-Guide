module.exports = {
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    "react-native/react-native": true, // Set the react-native environment
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-native/all", // Use the recommended rules for React Native
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-native", "jsx-a11y", "react-hooks"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-uses-react": "off",
    "react/jsx-uses-vars": "error",
    "jsx-a11y/no-onchange": "off",
    "prettier/prettier": ["error", { singleQuote: true, trailingComma: "es5", semi: true }],
    "no-console": "error",
    "no-debugger": "error",
    "no-unused-vars": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
        aspects: ["noHref", "invalidHref", "preferButton"],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
