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
    addEvent: (req, res) => { },
    editEvent: (req, res) => { },
    deleteEvent: (req, res) => { },
    makePurchase: (req, res) => { },
}