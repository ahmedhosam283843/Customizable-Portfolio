import "./NavBar.scss";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiX, HiMenuAlt4 } from "react-icons/hi";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app-navbar">
      <div className="app-navbar-name">
        <p>
          Ah <span>med</span>
        </p>
      </div>

      <ul className="app-navbar-links">
        {["home", "projects", "experience", "login"].map((item) => (
          <li className="app_flex p-text" key={`link-${item}`}>
            <div />
            {item === "login" ? (
              <Link to={"/" + item}>Logout</Link>
            ) : (
              <Link to={"/" + item}>{item}</Link>
            )}
          </li>
        ))}
      </ul>

      <div className="app-navbar-menubar">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [290, 0] }}
            transition={{ duration: 0.95, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "projects", "experience", "login"].map((item) => (
                <li key={item}>
                  {item === "login" ? (
                    <Link to={"/" + item} onClick={() => setToggle(false)}>
                      Logout
                    </Link>
                  ) : (
                    <Link to={"/" + item} onClick={() => setToggle(false)}>
                      {item}
                    </Link>
                  )}
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
