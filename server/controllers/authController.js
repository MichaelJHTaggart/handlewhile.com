const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {  //To prevent many nested .then() We make this function async
        // Grab our database
        const db = req.app.get('db')

        // Receive the needed info (username, password, email)
        const { username, password, email } = req.body

        // Check if they are already registered. If they are reject the request
        const [existingUser] = await db.get_user_by_email([email]) //When the code hits this point instead of a .then() we are saying wait for this line to finish and then move on. Also notice the javascript array destructuring.
        if (existingUser) {
            return res.status(409).send('User already exists')
        }

        // Hash and salt the password
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        // Insert them into the db
        const [newUser] = await db.register_user([username, email, hash]) //Again using js array destructuring

        // Attach that user to the session
        req.session.user = newUser

        // Send confirmation of registration
        res.status(200).send(newUser)
    },

    login: async (req, res) => {
        //Grab our database
        const db = req.app.get('db')
        console.log(req.body)
        //Get necessary info off of req.body(username, password)
        const { email, password } = req.body

        //Check if the user exists, if they do NOT, reject the request
        const [existingUser] = await db.get_user_by_email([email]) //Massive expects our arguments to be in an array.

        if (!existingUser) { //If this value is falsey
            return res.status(404).send('User does not exist')
        }

        //Check their password against the hash, if there is a mismatch, reject the request
        const isAuthenticated = bcrypt.compareSync(password, existingUser.hash) //isAuthenticated is a boolean.

        if (!isAuthenticated) { //if this value is falsey
            return res.status(403).send('Incorrect password')
        }

        //Delete the hash from the user object
        delete existingUser.hash

        //Attach the user to the session
        req.session.user = existingUser

        //Send back confirmation of login
        res.status(200).send(existingUser)
    },

    getUserSession: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else {
            res.status(404).send('No session found')
        }
    },
    logout: (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    },
}