require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session')
const userCtrl = require('./controllers/userController')
const authCtrl = require('./controllers/authController')
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING,
    // STRIPE_WEBHOOK_SECRET 
} = process.env
// const Stripe = require('stripe');

const app = express()

app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
})
)

//authentication
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.get('/auth/user', authCtrl.getUserSession)
app.delete('/auth/logout', authCtrl.logout)

//user things
app.get('/api/user/timed_events', userCtrl.getAllEvents)
app.get('/api/user/timed_events/:timed_events_id', userCtrl.getEventById)
app.post('/api/user/timed_events', userCtrl.addEvent)
app.put('/api/user/timed_events/:timed_events_id', userCtrl.editEvent)
app.delete('/api/user/timed_events/:timed_events_id', userCtrl.deleteEvent)
// app.put(this is for stripe)


massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Rocking out on port ${SERVER_PORT}`))
});

// app.post(
//   '/stripe-webhook',
//   bodyParser.raw({ type: 'application/json' }),
//   async (req, res) => {
//     // Retrieve the event by verifying the signature using the raw body and secret.    let event;

//     try {
//       event = stripe.webhooks.constructEvent(
//         req.body,
//         req.headers['stripe-signature'],
//         process.env.STRIPE_WEBHOOK_SECRET
//       );
//     } catch (err) {
//       console.log(err);
//       console.log(`⚠️  Webhook signature verification failed.`);
//       console.log(
//         `⚠️  Check the env file and enter the correct webhook secret.`
//       );
//       return res.sendStatus(400);
//     }
//     // Extract the object from the event.
//     const dataObject = event.data.object;

//     // Handle the event
//     // Review important events for Billing webhooks
//     // https://stripe.com/docs/billing/webhooks
//     // Remove comment to see the various objects sent for this sample
//     switch (event.type) {
//       case 'invoice.paid':
//         // Used to provision services after the trial has ended.
//         // The status of the invoice will show up as paid. Store the status in your
//         // database to reference when a user accesses your service to avoid hitting rate limits.
//         break;
//       case 'invoice.payment_failed':
//         // If the payment fails or the customer does not have a valid payment method,
//         //  an invoice.payment_failed event is sent, the subscription becomes past_due.
//         // Use this webhook to notify your user that their payment has
//         // failed and to retrieve new card details.
//         break;
//       case 'customer.subscription.deleted':
//         if (event.request != null) {
//           // handle a subscription cancelled by your request
//           // from above.
//         } else {
//           // handle subscription cancelled automatically based
//           // upon your subscription settings.
//         }
//         break;
//       default:
//       // Unexpected event type
//     }
//     res.sendStatus(200);
//   }
// );