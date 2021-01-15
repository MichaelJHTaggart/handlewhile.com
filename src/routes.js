import React from 'react'
import { Switch, Route } from 'react-router-dom'
import App from './App'
import Header from './components/Header'
import Stopwatch from './components/Stopwatch'
import SignIn from './components/SignIn'
import CreateAccount from './components/CreateAccount'
import Projects from './components/Projects'


/*
Here import the components that you need routes to.
*/

export default (
    <Switch>
        <Route exact path="/" component={Stopwatch} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/createaccount" component={CreateAccount} />
        <Route exact path="/projects" component={Projects} />
    </Switch>
)