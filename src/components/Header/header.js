import React from "react";
import { Link } from 'react-router-dom'
import Nav from '../Nav/nav';

function Header() {
  return (
    <header>
      <div className='title'>
        <Link to='/about'>Joshua Ramat</Link>
      </div>
      <Nav />
    </header>
  )
}

export default Header;