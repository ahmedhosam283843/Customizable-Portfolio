import "./NavBar.scss";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import axios from "../../client/axios.js";
import endpoints from "../../client/endpoints.js";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const [username, setUserName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      axios
        .get(endpoints.user, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data[0]);
          setUserName(response.data[0].name);
        })
        .catch((error) => {
          console.log(error);
        });
    }else{
      //navigate back to login page if no token is found
      navigate("/login");
    }
  }, []);

  return (
    <nav className="app-navbar">
      {username && (
        <div className="app-navbar-name">
          <p>
            {username
              .split(" ")[0]
              .substring(0, Math.floor(username.split(" ")[0].length / 2))}
            <span>
              {username
                .split(" ")[0]
                .substring(Math.floor(username.split(" ")[0].length / 2))}
            </span>
          </p>
        </div>
      )}

      <ul className="app-navbar-links">
        {["home", "projects", "experience", "login"].map((item) => (
          <li className="app_flex p-text" key={`link-${item}`}>
            <div />
            {item === "login" ? (
              <Link
                to={"/" + item}
                onClick={() => {
                  localStorage.removeItem("token");
                  sessionStorage.removeItem("token");
                }}
              >
                Logout
              </Link>
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
                    <Link
                      to={"/" + item}
                      onClick={() => {
                        localStorage.removeItem("token");
                        sessionStorage.removeItem("token");
                        setToggle(false);
                      }}
                    >
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
