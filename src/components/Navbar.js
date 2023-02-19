import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='left_nav'>
            <li>
                <a href = "/">Logo</a>
            </li>
            <li>
                <a href = "/">Moments By Manu</a>
            </li>
        </ul>

        <ul className='right_nav'>
            <li>
                <a href ="/">Home</a>
            </li>

            <li>
                <a href ="/photos">Photos</a>
            </li>

            <li>
                <a href ="/wedding">Wedding Films</a>
            </li>

            <li>
                <a href ="/About">About Us</a>
            </li>

            <li>
                <a href ="/Contact">Get Quote</a>
            </li>
        </ul>

        <ul className='last_nav'>
            <li>
                <a href="/Mobile">
                    +91  7036731152
                </a>
            </li>
        </ul>

    </nav>
  )
}

export default Navbar