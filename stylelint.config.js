module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  plugins: ['stylelint-scss'],
  rules: {
    indentation: 4,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['for', 'function', 'if', 'each', 'include', 'mixin']
      }
    ]
  }
}
