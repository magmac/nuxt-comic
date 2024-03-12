module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    '@nuxtjs', // 该规则对应这个依赖： @nuxtjs/eslint-config
    'plugin:nuxt/recommended'
  ],
  plugins: ['prettier', 'vue'],
  parser: 'vue-eslint-parser',
  parserOptions: [
    'alloy',
    'alloy/vue',
    'eslint-config-prettier'
  ],
  settings: {
    'import/resolver': {
      alias: {
        map: [['/@', './src']],
        extensions: ['.ts', '.js', '.json', '.vue']
      }
    }
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': 'error',
    'vue/no-multiple-template-root': 'off',
    'vue/no-v-for-template-key': 'off',
    'vue/no-reserved-component-names': [
      'error',
      {
        disallowVueBuiltInComponents: false,
        disallowVue3BuiltInComponents: false
      }
    ]
  }
}
