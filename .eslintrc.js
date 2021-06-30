module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "no-console": "off"
  }
}
