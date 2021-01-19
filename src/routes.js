import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Stopwatch from './components/Stopwatch'
import SignIn from './components/SignIn'
import CreateAccount from './components/CreateAccount'
import ProjectList from './components/ProjectList'
import Pricing from './components/Pricing'
import ForgotPassword from './components/ForgotPassword'


export default (
    <Switch>
        <Route exact path="/" component={Stopwatch} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/create-account" component={CreateAccount} />
        <Route exact path="/projects" component={ProjectList} />
        <Route exact path="/pricing" component={Pricing} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
    </Switch>
)