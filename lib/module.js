const path = require('path')

module.exports = function module (moduleOptions) {
  const defaults = {
    publishableKey: null,
    locale: 'en',
    apiVersion: null,
    stripeAccount: ''
  }

  const options = Object.assign({}, defaults, this.options.stripe, moduleOptions)

  if (!options.publishableKey) {
    throw new Error('A Stripe publishable key is required.')
  }

  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options
  })
}
