module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'), {
        alias: {
          '@app': './src/applications',
          '@business': './src/business',
          '@infra': './src/infrastructure',
          '@interfaces': './src/interfaces'
        }
      }
    ],
    '@babel/proposal-object-rest-spread'
  ],
  ignore: [
    'node_modules',
    '**/*.spec.ts',
    '**/applications/interfaces/',
    '**/business/dtos',
    '**/business/entities',
    '**/business/usecases'
  ]
}
