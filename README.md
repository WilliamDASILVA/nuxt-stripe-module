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
* [Typescript](#typescript)
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

#### Method 1 : Inline configuration entry

```javascript
{
  modules: [
    ['nuxt-stripe-module', {
      publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
    }],
  ]
}
```

#### Method 2 : External configuration entry

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

#### Method 3 : Runtime config

```js
{
  modules: [
    'nuxt-stripe-module',
  ],
  publicRuntimeConfig: {
    stripe: {
      publishableKey: 'YOUR_STRIPE_PUBLISHABLE_KEY',
    }
  }
}
```


## Options

The following options can be configured in the module's configuration entry in your `nuxt.config.js` file.

#### Publishable key - `publishableKey`

- **Required**
- **Default:** `null`

Your publishable key.

https://stripe.com/docs/js/initializing#init_stripe_js-publishableKey

#### API version - `apiVersion`

- **Optional**
- **Default:** `null`

Override your account's API version.

https://stripe.com/docs/js/initializing#init_stripe_js-options-apiVersion

#### Locale - `locale`

- **Optional**
- **Default**: `'en'`

A locale used to globally configure localization in Stripe. Setting the locale here will localize
error strings for all Stripe.js methods. It will also configure the locale for Elements and Checkout. Default is auto (Stripe detects the locale of the browser).

#### Stripe Account - `stripeAccount`

- **Optional**
- **Default**: `''`

## Usage

1. Inject the module in your `nuxt.config.js` file. See [Getting Started](#getting-started).
2. `this.$stripe` is now available in your components. **Note** that `$stripe` can be `null` if the script fails to load.

```js
{
  ...
  mounted() {
    if (this.$stripe) {
      const elements = this.$stripe.elements();
      const card = elements.create('card', {});
      // Add an instance of the card Element into the `card-element` <div>
      card.mount('#card-element');
    }
  },
  ...
}
```
[For more details, please refer to the official Stripe documentation.](https://stripe.com/docs/stripe-js/reference)

## TypeScript

Add the types to your "types" array in `tsconfig.json` after the `@nuxt/types` (Nuxt 2.9.0+) or `@nuxt/vue-app` entry

```json{}[tsconfig.json]
{
  "compilerOptions": {
    "types": [
      "@nuxt/types",
      "nuxt-stripe-module"
    ]
  }
}
```
> **Why?**
>
> Because of the way Nuxt works the `$stripe` property on the context has to be merged into the Nuxt `Context` interface via [declaration merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html). Adding `nuxt-stripe-module` to your types will import the types from the package and make typescript aware of the additions to the `Context` interface.


## License

[MIT License](./LICENSE)
