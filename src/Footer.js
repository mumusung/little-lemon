import React from 'react';
import './Footer.css'
import logo from './images/Logo2.png'
function Footer(){
    return (
        <footer className='footer'>
        <img src={logo} alt="logo for footer element" />
        <ul className='Doormat'>Doormat Navigation
            <li>Home</li>
            <li>About</li>
            <li>menu</li>
            <li>Reservation</li>
            <li>Order online</li>
            <li>Login</li>
            </ul>
            <ul className='contact'>Contact
                <li>Address</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
            <ul className='social'>Social Media Link
                <li>Address</li>
                <li>phone number</li>
                <li>email</li>
            </ul>
    </footer>)
}
export default Footer