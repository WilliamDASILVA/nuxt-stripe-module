const path = require('path');

module.exports = function module (moduleOptions) {
  const defaults = {
    defer: true,
    async: true,
    version: 'v3',
    publishableKey: null,
    stripeAccount: null,
  };
  const options = Object.assign({}, defaults, this.options.stripe, moduleOptions);

  this.options.head.script.push({
    src: `//js.stripe.com/${options.version}/`,
    defer: options.defer,
    async: options.async,
  });

  this.addPlugin({
    src: path.resolve(__dirname, './templates/plugin.js'),
    ssr: false,
    options,
  });
};
