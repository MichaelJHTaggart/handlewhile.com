require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session')
const userCtrl = require('./controllers/userController')
const authCtrl = require('./controllers/authController')
const nodeCtrl = require('./controllers/nodemailerController')
const path = require('path')
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING,
    // STRIPE_WEBHOOK_SECRET 
} = process.env
// const Stripe = require('stripe');

const app = express()

app.use(express.static(`${__dirname}/../build`)) //serving our build folder

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

//nodemailer
app.post('/send', nodeCtrl.autoEmail)


massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Rocking out on port ${SERVER_PORT}`))
});
app.get('*', (req, res) => { //Its essentially a catchall. 
    res.sendFile(path.join(__dirname, '../build/index.html'))
})