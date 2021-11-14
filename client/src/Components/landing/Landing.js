import React from 'react'
import logo from '../../images/capyborrow_logo_v1.jpg';
import './Landing.css'
const Landing = () => {
    return (
        <div className='landing-container'>
            <div className='top'>
                <img className="logo-img" src={logo} />
            </div>
            <div className='bot'>
                <span className="white-text"><span className="green-text">C</span>apy<span className="green-text">C</span>are</span>
                <span className="login-btn"><a className="login-link" href="http://localhost:6868/auth/google">Login with Google</a></span>
            </div>
        </div>
    )
}

export default Landing
