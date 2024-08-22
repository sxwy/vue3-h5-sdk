const compile = (format) => {
  const formatObj = {
    esm: false,
    cjs: 'cjs',
    umd: 'umd'
  }
  return {
    ignore: ['**/__tests__/**'],
    presets: [
      [
        '@babel/preset-env',
        {
          modules: formatObj[format]
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
    esm: compile('esm'),
    cjs: compile('cjs'),
    umd: compile('umd')
  }
}
