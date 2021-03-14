import { loadStripe } from '@stripe/stripe-js/pure'

export default async function (context, inject) {
  const parsedOptions = <%= JSON.stringify(options) %>

  let stripePlugin = null
  try {
    const { publishableKey, stripeAccount, locale, version: apiVersion } = parsedOptions
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
