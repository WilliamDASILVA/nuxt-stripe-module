import { Stripe } from '@stripe/stripe-js'

declare module 'vue/types/vue' {
  interface Vue {
    $stripe: Stripe
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $stripe: Stripe
  }
}
