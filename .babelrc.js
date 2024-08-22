const compile = (isESM) => {
  return {
    ignore: ['**/__tests__/**'],
    presets: [
      [
        '@babel/preset-env',
        {
          modules: isESM ? false : 'cjs'
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
}

module.exports = {
  env: {
    esm: compile(true),
    cjs: compile(false)
  }
}
