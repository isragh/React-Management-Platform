import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
    return (
        <div className='card'>
            <Link to='/tasks'>Login</Link>
        </div>
    )
}

export default Login