export default function (context, inject) {
  <% if (options.publishableKey) { %>
    if (typeof window !== 'undefined' && typeof window.Stripe !== 'undefined') {
      inject('stripe', window.Stripe('<%= options.publishableKey %>'));
      context.app.stripe = window.Stripe('<%= options.publishableKey %>');
    }
  <% } %>
}
