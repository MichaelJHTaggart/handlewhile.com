import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../../src/redux/reducer'
import '../scss/SignIn.scss';

const SignIn = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function login() {
        axios.post('/auth/login', { email, password })
            .then(user => {
                props.loginUser(user.username, user.email)
                props.history.push("/")
            })
        setEmail('')
        setPassword('')
    }

    return (
        <div id='body'>

            <h1 className='header'>Sign In</h1>

            <p className='title'>Email</p>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="type here..."
                name="email" required
            >
            </input>
            <p className='title'>Password</p>
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="type here..."
                name="password" required
            >
            </input>

            <button className="button" onClick={login}
            >Sign In</button>

            <p className="forgot-password">Forgot your password?</p>

            <div className="line"></div>

            <Link to='/createaccount' className="link-to-create-account"> New to Handle While? Create an account now!</Link>

        </div>)
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { loginUser })(SignIn)