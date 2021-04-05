const path = require('path')

module.exports = function module (moduleOptions) {
  const defaults = {
    stripeAccount: '',
    publishableKey: null,
    locale: 'en',
    apiVersion: null
  }

  const options = Object.assign({}, defaults, this.options.stripe, moduleOptions)

  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options
  })
}

module.exports.meta = require('./../package.json')
