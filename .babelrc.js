module.exports = {
  ignore: ['**/__tests__/**'],
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false
      }
    ],
    [
      '@babel/preset-typescript',
      {
        isTSX: true,
        allExtensions: true,
        allowDeclareFields: true
      }
    ]
  ],
  plugins: [
    [
      '@vue/babel-plugin-jsx',
      {
        enableObjectSlots: false
      }
    ]
  ]
}
