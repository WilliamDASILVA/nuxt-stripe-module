module.exports = function module (moduleOptions) {
  const defaults = {
    defer: true,
    async: true,
    version: 'v3',
  };
  const options = Object.assign({}, defaults, moduleOptions);

  this.options.head.script.push({
    src: `//js.stripe.com/${options.version}/`,
    defer: options.defer,
    async: options.async,
  });
};
