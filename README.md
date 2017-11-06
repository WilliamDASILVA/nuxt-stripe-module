# Nuxt Stripe Module

[![npm (scoped with tag)](https://img.shields.io/npm/v/nuxt-stripe-module/latest.svg?style=flat-square)](https://npmjs.com/package/nuxt-stripe-module)
[![npm](https://img.shields.io/npm/dt/nuxt-stripe-module.svg?style=flat-square)](https://npmjs.com/package/nuxt-stripe-module)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> A NuxtJS module to import Stripe client script.

## Table of Contents ##

* [Requirements](#requirements)
* [Install](#install)
* [Getting Started](#getting-started)
* [Usage](#usage)
* [License](#license)

## Requirements

* npm
* NuxtJS
* NodeJS

## Install

```bash
$ npm install --save nuxt-stripe-module
```

## Getting Started

Add `nuxt-stripe-module` to `modules` section of `nuxt.config.js`.
```js
{
  modules: [
    // Simple usage
    'nuxt-stripe-module',

    // With options
    ['nuxt-stripe-module', {
      /* module options */
      version: 'v3', // Default
    }],
 ]
}
```
or even
```js
{
  modules: [
    'nuxt-stripe-module',
  ],
  stripe: {
    version: 'v3',
  },
}
```

## Usage

You can use this module to inject in your components a `$stripe` instance, by setting the publishableKey instead of calling `window.Stripe(PUBLISHABLE_KEY)` every time.

```js
{
  modules: [
    'nuxt-stripe-module',
  ],
  stripe: {
    version: 'v3',
    publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
  },
}
```

Then you can use it in your components like:

```js
{
  ...
  mounted() {
    const elements = this.$stripe.elements();
    const card = elements.create('card');
    // Add an instance of the card Element into the `card-element` <div>
    card.mount('#card-element');
  },
  ...
}
```
( See Stripe documentation: https://stripe.com/docs/stripe-js/reference)

## License

[MIT License](./LICENSE)
