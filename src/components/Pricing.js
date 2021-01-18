// import React from 'react'

// const Pricing = props => {
// // Set your secret key. Remember to switch to your live secret key in production!
// const Stripe = require('stripe');
// const stripe = Stripe('sk_test_51IAkDgF1UVK3uARLyiB8Svjrcg05sa8iKkn0yxZLt0jITaCbUlXd12LCTJwMUzwSWxWkVh3jO2e574NakYPloGkG00lwgkdllj');
// // Set your publishable key: remember to change this to your live publishable key in production
// let stripe = Stripe('pk_test_51IAkDgF1UVK3uARLIaBZJ32y42v9FRX2kjkA4MGZpwnCbUOSJZjgcoL9JQhsoi550B7vTKUsaZz3Hf8K5bMZuz9X0041FQvGVY');
// let elements = stripe.elements();

// let card = elements.create('card', { style: style });
// card.mount('#card-element');

// card.on('change', function (event) {
//  displayError(event);
// });
// function displayError(event) {
//  changeLoadingStatePrices(false);
//  let displayError = document.getElementById('card-element-errors');
//  if (event.error) {
//   displayError.textContent = event.error.message;
//  } else {
//   displayError.textContent = '';
//  }
// }

// var form = document.getElementById('subscription-form');

// form.addEventListener('submit', function (ev) {
//  ev.preventDefault();
// });

// function createPaymentMethod({ card }) {
//  const customerId = {{ CUSTOMER_ID }
// };
// // Set up payment method for recurring usage
// let billingName = document.querySelector('#name').value;

// let priceId = document.getElementById('priceId').innerHTML.toUpperCase();

// stripe
//  .createPaymentMethod({
//   type: 'card',
//   card: card,
//   billing_details: {
//    name: billingName,
//   },
//  })
//  .then((result) => {
//   if (result.error) {
//    displayError(result);
//   } else {
//    createSubscription({
//     customerId: customerId,
//     paymentMethodId: result.paymentMethod.id,
//     priceId: priceId,
//    });
//   }
//  });
// }

// function createSubscription({ customerId, paymentMethodId, priceId }) {
//  return (
//   fetch('/create-subscription', {
//    method: 'post',
//    headers: {
//     'Content-type': 'application/json',
//    },
//    body: JSON.stringify({
//     customerId: customerId,
//     paymentMethodId: paymentMethodId,
//     priceId: priceId,
//    }),
//   })
//    .then((response) => {
//     return response.json();
//    })
//    // If the card is declined, display an error to the user.
//    .then((result) => {
//     if (result.error) {
//      // The card had an error when trying to attach it to a customer.
//      throw result;
//     }
//     return result;
//    })
//    // Normalize the result to contain the object returned by Stripe.
//    // Add the additional details we need.
//    .then((result) => {
//     return {
//      paymentMethodId: paymentMethodId,
//      priceId: priceId,
//      subscription: result,
//     };
//    })
//    // Some payment methods require a customer to be on session
//    // to complete the payment process. Check the status of the
//    // payment intent to handle these actions.
//    .then(handlePaymentThatRequiresCustomerAction)
//    // If attaching this card to a Customer object succeeds,
//    // but attempts to charge the customer fail, you
//    // get a requires_payment_method error.
//    .then(handleRequiresPaymentMethod)
//    // No more actions required. Provision your service for the user.
//    .then(onSubscriptionComplete)
//    .catch((error) => {
//     // An error has happened. Display the failure to the user here.
//     // We utilize the HTML element we created.
//     showCardError(error);
//    })
//  );
// }

// function createCustomer() {
//  let billingEmail = document.querySelector('#email').value;
//  return fetch('/create-customer', {
//   method: 'post',
//   headers: {
//    'Content-Type': 'application/json',
//   },
//   body: JSON.stringify({
//    email: billingEmail,
//   }),
//  })
//   .then((response) => {
//    return response.json();
//   })
//   .then((result) => {
//    // result.customer.id is used to map back to the customer object
//    return result;
//   });
// }

// }

// return (
//  <head>
//   <title>Subscription prices</title>
//   <script src="https://js.stripe.com/v3/"></script>
// </head>

// <body>
//   <form id="payment-form">
//     <div id="card-element">
//       <!-- Elements will create input elements here -->
//     </div>

//     <!-- We'll put the error messages in this element -->
//     <div id="card-element-errors" role="alert"></div>
//     <button type="submit">Subscribe</button>
//   </form>
// </body>

// )