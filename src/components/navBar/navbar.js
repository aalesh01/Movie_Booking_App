import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <div className='navBar'>
            <Link to='/' ><h1>HomePage</h1></Link>
            <Link to='/bookings' ><h1>Bookings</h1></Link>
            <Link to='/login' ><h1>Login</h1></Link>
        </div>
    )
}

export default Navbar
