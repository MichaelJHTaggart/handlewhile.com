require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session')
const userCtrl = require('./controllers/userController')
const authCtrl = require('./controllers/authController')
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

const app = express()

app.use(express.json())

//authentication
app.post('api/auth/register', authCtrl.register)
app.post('api/auth/login', authCtrl.login)

//user things
app.post('api/user/timed_events', userCtrl.createEvent)
app.put('api/user/timed_events/:timed_events_id', userCtrl.editEvent)
app.get('api/user/timed_events', userCtrl.showEvents)
app.delete('api/user/timed_events/:timed_events_id', userCtrl.deleteEvents)
// app.put(this is for stripe)


massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false }
}).then(db => {
    app.set('db', db);
    console.log('db connected')
});

app.use(
    session({
        resave: true,
        saveUninitialized: false,
        secret: SESSION_SECRET
    })
);

app.listen(SERVER_PORT, () => console.log(`Rocking out on port ${SERVER_PORT}`))