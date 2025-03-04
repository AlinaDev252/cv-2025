module.exports = {
    root: true,
    env: {
      browser: true,
      node: true,
    },
    extends: [
      "eslint:recommended",
      "plugin:vue/vue3-recommended",
      "plugin:prettier/recommended",
    ],
    plugins: ["vue"],
    rules: {
      "vue/multi-word-component-names": "off",
    },
  };
  