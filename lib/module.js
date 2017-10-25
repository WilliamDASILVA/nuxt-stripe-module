module.exports = async function module (moduleOptions) {
  const options = Object.assign({}, moduleOptions);

  this.options.head.script.push({
    src: '//js.stripe.com/v3/',
    defer: true,
  })
};
