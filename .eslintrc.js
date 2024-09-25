module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:import/recommended",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["react", "prettier", "@typescript-eslint"],
  rules: {
    /** eslint rules: */
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "no-shadow": [0],
    "no-unused-vars": [0],
    "no-plusplus": [0],
    "no-console": ["warn"],
    "no-debugger": ["warn"],
    camelcase: [0],
    "lines-between-class-members": [0],

    /** Prettier rules */
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],

    /** react rules: */
    "react/jsx-key": [1],
    "react/button-has-type": [0],
    "react/react-in-jsx-scope": [0],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx", ".ts"] },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/require-default-props": [0],
    "react/no-array-index-key": [0],
    "react/destructuring-assignment": [0],
    "react/prop-types": [0],
    "react/no-unescaped-entities": [0],
    "react/display-name": [0],
    "react/self-closing-comp": [
      "error",
      {
        component: true,
        html: true,
      },
    ],

    /** import rules: */
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/prefer-default-export": [0],
    "import/named": [0],
    "import/order": [
      "warn",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
          {
            pattern: "react**",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "never",
      },
    ],

    /** Typescript rules */
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
};
