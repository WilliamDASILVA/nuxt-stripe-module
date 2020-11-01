import { loadStripe } from '@stripe/stripe-js/pure'

export default async function (context, inject) {
  const parsedOptions = <%= JSON.stringify(options) %>

  const stripePlugin = await loadStripe(parsedOptions.publishableKey, {
    locale: parsedOptions.locale,
    apiVersion: parsedOptions.version
  })

  inject('stripe', stripePlugin)
  context.app.stripe = stripePlugin
}
