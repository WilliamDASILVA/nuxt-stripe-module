import { Stripe } from '@stripe/stripe-js'

declare module 'vue/types/vue' {
  interface Vue {
    $stripe: Stripe | null
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $stripe: Stripe | null
  }
}

declare module '@nuxt/vue-app' {
  interface NuxtAppOptions {
    $stripe: Stripe | null
  }

  interface Context {
    $stripe: Stripe | null
  }
}

// Nuxt 2.9+
declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $stripe: Stripe | null
  }
  interface Context {
    $stripe: Stripe | null
  }
}
