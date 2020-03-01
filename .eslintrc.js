module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/standard', 'plugin:vue/base'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'space-before-function-paren': 0
    // camelcase: [0, { properties: 'never' }]

    // 'no-unused-vars': 'off', // 不能有声明后未被使用的变量或参数
    // 'no-undef': 0 // 可以 有未定义的变量s
    // indent: [2, 4], //缩进风格
    // quotes: [0, "single"], //引号类型 `` "" ''
    // "quote-props": [2, "always"], //对象字面量中的属性名是否强制双引号
    // semi: [0, "never"] //语句强制分号结尾
  }
}
