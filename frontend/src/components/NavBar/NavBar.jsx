import './NavBar.scss'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HiX, HiMenuAlt4 } from 'react-icons/hi';
import { images } from '../../constants';


const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">

      <div className='app_navbar_name'>
        <p>Ah <span>med</span></p>
      </div>

      <ul className="app__navbar-links">
        {['home', 'projects', 'experience'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
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
  );
};


export default NavBar;
