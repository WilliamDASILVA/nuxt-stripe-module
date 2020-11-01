const { resolve } = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../../'),
  srcDir: __dirname,
  modules: [
    ['@@', {
      publishableKey: 'PUBLISHABLE_KEY'
    }]
  ]
}
