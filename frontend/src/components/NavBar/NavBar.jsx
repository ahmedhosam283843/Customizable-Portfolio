import './NavBar.scss'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiX, HiMenuAlt4 } from 'react-icons/hi';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='app_navbar'>
      <div className='app_navbar_name'>
        <p>Ah <span>med</span></p>
      </div>

      <ul className="app_navbar_links">
        {['home', 'projects', 'experience'].map((item) => (
          <li className="p-text app_flex" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app_navbar_menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [280, 0] }}
            transition={{ ease: 'easeOut', duration: 0.9 }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'projects', 'experience'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default NavBar