import { loadStripe } from '@stripe/stripe-js/pure'

export default async function (context, inject) {
  const parsedOptions = <%= JSON.stringify(options) %>

  let stripePlugin = null
  try {
    const {
      publishableKey: parsedPublishableKey,
      stripeAccount,
      locale,
      version: apiVersion
    } = parsedOptions
    const publishableKey = parsedPublishableKey ||
      context.$config.stripe.publishableKey

    if (!publishableKey) {
      throw new Error('A Stripe publishable key is required.')
    }

    stripePlugin = await loadStripe(publishableKey, {
      stripeAccount,
      locale,
      apiVersion
    })
  } catch (e) {
    console.error(`[nuxt-stripe-module] ${e.message}`)
  }

  inject('stripe', stripePlugin)
  context.app.stripe = stripePlugin
}
