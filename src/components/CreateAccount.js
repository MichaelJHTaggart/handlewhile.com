import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { connect } from 'react-redux'
import { loginUser } from '../../src/redux/reducer'
import '../scss/CreateAccount.scss';

const CreateAccount = props => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function createAccount() {
        axios.post('/auth/register', { username, email, password })
            .then(user => {
                props.loginUser(user.username, user.email)
                props.history.push("/")
            })
        setUsername('')
        setEmail('')
        setPassword('')
    }

    return (
        <div id='body'>

            <h1 className='header'>Create Account</h1>

            <p className='title'>Username</p>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                placeholder="type here..."
                name="username" required
            >
            </input>

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

            <button className="button" onClick={createAccount}
            >Create My Account</button>

            <div className="line"></div>

            <Link to='/signin' className="link-to-create-account">Already have an account? Sign in now!</Link>

        </div>)
}

function mapStateToProps(reduxState) {
    return reduxState
}

export default connect(mapStateToProps, { loginUser })(CreateAccount)