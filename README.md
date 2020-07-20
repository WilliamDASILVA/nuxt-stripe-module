# Nuxt Stripe Module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-stripe-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-stripe-module)
[![npm](https://img.shields.io/npm/dt/nuxt-stripe-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-stripe-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> A NuxtJS module to import the StripeJS client script.

## Table of Contents ##

* [Requirements](#requirements)
* [Install](#install)
* [Getting Started](#getting-started)
* [Options](#options)
* [Usage](#usage)
* [License](#license)

## Requirements

* npm
* NuxtJS
* NodeJS

## Install

```bash
# npm
$ npm install --save nuxt-stripe-module

# yarn
$ yarn add nuxt-stripe-module
```



## Getting Started

Add `'nuxt-stripe-module'` to the `modules` section of your `nuxt.config.js` file.

#### Inline configuration entry

```javascript
{
  modules: [
    ['nuxt-stripe-module', {
      publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
    }],
  ]
}
```

#### External configuration entry

```js
{
  modules: [
    'nuxt-stripe-module',
  ],
  stripe: {
    publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
  },
}
```


## Options

The following options can be configured in the module's configuration entry in your `nuxt.config.js` file.

#### Publishable key - `publishableKey`

- **Required**
- **Default:** `null`

Your publishable key.

https://stripe.com/docs/js/initializing#init_stripe_js-options-locale

#### Version - `version`

- **Optional**
- **Default:** `'v3'`

Override your account's API version.

https://stripe.com/docs/js/initializing#init_stripe_js-options-apiVersion

#### Locale - `locale`

- **Optional**
- **Default**: `'en'`

A locale used to globally configure localization in Stripe. Setting the locale here will localize
error strings for all Stripe.js methods. It will also configure the locale for Elements and Checkout. Default is auto (Stripe detects the locale of the browser).

https://stripe.com/docs/js/initializing#init_stripe_js-options-locale

#### Script - `script`

- **Optional**
- **Default**: `true`

The plugin will automatically push the stripe script into the `<head>` of your document. You can disable this by setting this option to `false`.

## Usage

1. Inject the module in your `nuxt.config.js` file. See [Getting Started](#getting-started).
2. `this.$stripe` is now available in your components:

```js
{
  ...
  mounted() {
    const elements = this.$stripe.import().elements();
    const card = elements.create('card', {});
    // Add an instance of the card Element into the `card-element` <div>
    card.mount('#card-element');
  },
  ...
}
```
[For more details, please refer to the official Stripe documentation.](https://stripe.com/docs/stripe-js/reference)



## License

[MIT License](./LICENSE)
