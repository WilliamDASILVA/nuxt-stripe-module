/* eslint-disable camelcase */
import Vue from 'vue';
import Stripe from '@stripe/stripe-js/types/stripe-js/index'

declare module 'vue/types/vue' {
  interface Vue {
    $stripe: Stripe;
  }
}
