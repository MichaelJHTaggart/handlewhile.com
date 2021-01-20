import React, { useState } from 'react'
import axios from 'axios'

const ForgotPassword = props => {
    const [email, setEmail] = useState('')

    function passwordReset() {
        axios.post('/send', { email })
            .then(res => {
                return "email sent"
            })
        setEmail('')
    }

    return (
        <div id="body">
            <p className="title">Please enter in your email for a reset your password email!</p>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type='text' required
                placeholder="email here..."
            >
            </input>

            <button className="button" onClick={passwordReset}>Send Password Reset Email</button>

        </div>)
}
export default ForgotPassword