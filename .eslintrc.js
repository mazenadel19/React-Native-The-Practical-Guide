module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "react-native/react-native": true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:react-native/all"],
  overrides: [], // You can add specific overrides here if needed
  parserOptions: {
    ecmaVersion: 2021, // Specify a specific ECMAScript version
    sourceType: "module",
  },
  plugins: ["react", "react-native"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "react-native/no-unused-styles": "warn",
    "react-native/split-platform-components": "warn",
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
    "react-native/no-raw-text": "warn",
    "react-native/no-single-element-style-arrays": "warn",
    "react-native/no-extra-semi": "error",
    "no-undef": "error", // Ensure undefined variables are caught
    "no-use-before-define": "error", // Ensure variables are defined before use
    "no-shadow": "error", // Prevent shadowing of variables
    semi: ["error", "always"],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
