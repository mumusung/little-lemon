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
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/reservation">Reservation</Link>
            <Link to="/order online">Order online</Link>
            <Link to="/Login">Login</Link>
            <Link to="/booking">Booking</Link>
            <Routes>
        <Route path="/booking" element={<Booking/>} />
        <Route path="/confirmation" element={<ConfirmationPage/>} />
        </Routes>
    </nav>
    </div>);
}
export default Nav