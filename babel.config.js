module.exports = {
  presets: [
    [require.resolve('babel-preset-react-app/dependencies'), { helpers: true }],
  ],
  plugins: [
    [
      'babel-plugin-named-asset-import',
      {
        loaderMap: {
          svg: {
            ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]',
          },
        },
      },
    ],
    [
      'relay',
      {
        schema: './data/schema.json',
      },
    ],
    [
      'emotion',
      {
        sourceMap: true,
        autoLabel: process.env.NODE_ENV !== 'production',
        labelFormat: '[local]',
        cssPropOptimization: true,
      },
    ],
    ['macros'],
  ],
}
