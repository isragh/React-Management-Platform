import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook, FaGoogle, FaGithub, FaUser, FaLock } from 'react-icons/fa'

function Login() {
    return (
        <div className='container-login'>
            <div class="input-group flex-nowrap sm">
                <span class="input-group-text" id="addon-wrapping"><FaUser /></span>
                <input type="text" class="form-control" placeholder="Username or email" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div class="input-group flex-nowrap sm">
                <span class="input-group-text" id="addon-wrapping"><FaLock /></span>
                <input type="password" class="form-control" placeholder="Password" aria-label="Username" aria-describedby="addon-wrapping" />
            </div>
            <div className='checkbox'>
                <input type="checkbox" value="" id="flexCheckDefault" />
                <label for="flexCheckDefault">
                    Remember me
                </label>
                <br/>
                <Link className='btn btn-primary' to='/tasks'>Login</Link>
            </div>
            <div className='register'>
                <a href='/' alt='register now'>Register now</a>
                <br />
                <a href='/' alt='register now'>Forgot password?</a>
                <br />
                <span>-----------------------or-----------------------</span>
            </div>
            <div class='mt-5 icons'>
                <a href='/' alt='facebook'><FaFacebook size='40' /></a>
                <br />
                <a href='/' alt='google'><FaGoogle color='red' size='40' /></a>
                <br />
                <a href='/' alt='google'><FaGithub color='white' size='40' /></a>
            </div>
        </div>
    )
}

export default Login