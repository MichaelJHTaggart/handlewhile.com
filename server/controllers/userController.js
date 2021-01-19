module.exports = {
    getAllEvents: async (req, res) => {
        //We need an instance of our db
        const db = req.app.get('db') //this is making our database instance available to us inside the scope of our handler function

        //The user will need to be signed in, in order for us to pull their projects.
        const { id } = req.session.user

        const timed_events = await db.get_all_events([id])

        if (!timed_events) {
            res.status(403).send('You must sign in to access your projects')
        }

        //We return that specific user's timed_events
        res.status(200).send(timed_events)
    },
    getEventById: async (req, res) => {
        //We need an instance of our db
        const db = req.app.get('db')
        //The user will need to be signed in, in order for us to pull their project.
        const { id } = req.session.user
        const { timed_events_id } = req.params
        //The user will pull a single project to view.
        const timed_event = await db.get_timed_event_by_id(id, timed_events_id)

        //return the pulled event
        res.status(200).send(timed_event)
    },
    addEvent: async (req, res) => {
        // Grab our database & our session
        const db = req.app.get('db')
        const { id: user_id } = req.session.user
        // Receive the needed info (time, name)
        const { time, name } = req.body

        // Check if they have room to save another event. If not, reject the request

        //// count the amount of events the user has
        const [amountOfEvents] = await db.amount_of_events(user_id)
        //// see what tier_id the user currently subscribes to
        const [getTierId] = await db.get_tier_id(user_id)
        //// see what limit the tier allows the user to have

        const [tierLimit] = await db.tier_limit(getTierId.tier_id)

        //// compare the amount of events to the limit to see if the user can save more.

        if (+amountOfEvents.count >= tierLimit.num_events) {
            res.status(400).send("Please upgrade to save more projects!")
        } else {
            await db.add_event(user_id, time, name)
            res.status(200).send({ success: true })
        }
    },
    editEvent: async (req, res) => {
        //We need an instance of our db
        const db = req.app.get('db')
        //The user needs to have given us a new name
        const { time, name } = req.body
        //The user will need to be signed in, in order for us to pull their project.
        const { id } = req.session.user
        //The user needs to be referencing an existing project
        const { timed_events_id } = req.params
        //The user will edit a single project to view.

        const edit_timed_event = await db.edit_timed_event(time, name, id, timed_events_id)

        //return the pulled event
        res.status(200).send(edit_timed_event)
    },
    deleteEvent: async (req, res) => {
        //We need an instance of our db
        const db = req.app.get('db')

        //The user will need to be signed in, in order for us to pull their project.
        const { id } = req.session.user
        //The user needs to be referencing an existing project
        const { timed_events_id } = req.params
        //The user will edit a single project to view.

        const delete_event = await db.delete_event(id, timed_events_id)

        //return the pulled event
        res.status(200).send(delete_event)
    },
    makePurchase: (req, res) => { },
}