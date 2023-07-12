import React from 'react';
import './App.css';
import Booking from "./Components/Booking"
import { Routes,Route,} from 'react-router-dom';
import {Link} from 'react-router-dom'
import ConfirmationPage from './Components/ConfirmedBooking';
function Nav(){
    return (
        <div>
        <nav className="navbar">
            <Link className='icon1' to="/">Home</Link>
            <Link className='icon1' to="/about">About</Link>
            <Link className='icon1' to="/reservation">Reservation</Link>
            <Link className='icon1' to="/order online">Order online</Link>
            <Link className='icon1' to="/Login">Login</Link>
            <Link className='icon1' to="/booking">Booking</Link>
            <Routes>
        <Route path="/booking" element={<Booking/>} />
        <Route path="/confirmation" element={<ConfirmationPage/>} />
        </Routes>
    </nav>
    </div>);
}
export default Nav