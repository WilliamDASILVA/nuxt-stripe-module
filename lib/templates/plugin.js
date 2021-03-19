export default function (context, inject) {
  <% if (options.publishableKey) { %>
    if (typeof window !== 'undefined') {
      const stripePlugin = {
        import(publishableKey = null, locale = null) {
          return window['Stripe'] && window['Stripe'](publishableKey ? publishableKey : '<%= options.publishableKey %>', {
            locale: locale ? locale : '<%= options.locale %>',
          });
        },
      };

      inject('stripe', stripePlugin);
      context.app.stripe = stripePlugin;
    }
  <% } %>
}
