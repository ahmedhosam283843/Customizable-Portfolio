import './NavBar.scss'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiX, HiMenuAlt4 } from 'react-icons/hi';

const NavBar = () => {

  return (
    <nav className='app_navbar'>
      <div className='app_navbar_name'>
        <p>Ah <span>med</span></p>
      </div>

      <ul className="app_navbar_links">
        {['home',  'projects', 'experience'].map((item) => (
          <li className="p-text app_flex" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>


    </nav>
  )
}

export default NavBar