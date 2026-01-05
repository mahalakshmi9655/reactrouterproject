import { NavLink } from "react-router-dom";
import React from 'react'
import '../App.css'

const Navbar = () => {
  return (
    <>
        <nav>
        <NavLink id="n1" to='/'>Home</NavLink>
        <NavLink id="n1" to='/Datainsert'>Datainsert</NavLink>
        <NavLink id="n1" to='/Help'>Help</NavLink>
        <NavLink id="n1" to='/Contact'>Contact</NavLink>
        <NavLink id="n1" to='/View'>View</NavLink>
        </nav>
      
    </>
  )
}

export default Navbar
