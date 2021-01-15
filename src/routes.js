import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Stopwatch from './components/Stopwatch'
import SignIn from './components/SignIn'
import CreateAccount from './components/CreateAccount'
import Projects from './components/Projects'
import Pricing from './components/Pricing'


/*
Here import the components that you need routes to.
*/

export default (
    <Switch>
        <Route exact path="/" component={Stopwatch} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/createaccount" component={CreateAccount} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/pricing" component={Pricing} />
    </Switch>
)