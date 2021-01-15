import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import axios from 'axios'
import '../scss/CreateAccount.scss';

const CreateAccount = props => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // function createAccount() {
    //     const { email } = email
    //     const { password } = password
    //     axios.post('/auth/login', { email, password })
    //         .then(user => {
    //             props.updateUser(user)
    //         })
    //     setEmail('')
    //     setPassword('')
    // }

    return (
        <div id='body'>

            <h1 className='header'>Create Account</h1>

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

            <button className="button" //onClick={createAccount}
            >Create My Account</button>

            <div className="line"></div>

            <Link to='/signin' className="link-to-create-account">Already have an account? Sign in now!</Link>

        </div>)
}
export default CreateAccount