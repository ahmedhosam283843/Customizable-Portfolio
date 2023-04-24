import { images } from "../../constants";
import React, { useEffect, useState } from "react";
import "./Home.scss";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import axios from "../../client/axios.js";
import endpoints from "../../client/endpoints.js";

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [portfolio, setPortfolio] = useState({});
  const [firstTitleHalf, setFirstTitleHalf] = useState("");
  const [secondTitleHalf, setSecondTitleHalf] = useState("");

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      axios //fetch user data
        .get(endpoints.user, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setUser(response.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });

      axios //fetch portfolio data
        .get(endpoints.portfolio, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setPortfolio(response.data[0]);
          if (response.data[0].job_title) {
            const words = response.data[0].job_title.split(" ");
            const half = Math.ceil(words.length / 2);
            setFirstTitleHalf(words.slice(0, half).join(" "));
            setSecondTitleHalf(words.slice(half).join(" "));
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      //navigate back to login page if no token is found
      navigate("/login");
    }
  }, []);

  return (
    user &&
    portfolio && (
      <div className="app-home app_flex" id="home">
        <motion.div
          transition={{ duration: 0.9 }}
          whileInView={{ x: [-120, 0], opacity: [0, 1] }}
          className="app-home-info"
        >
          <div className="app-home-badge">
            <div className="app_flex badge-style">
              <span>👋</span>
              <div style={{ marginLeft: 20 }}>
                <p className="p-text">Hello, I am</p>
                <h1 className="header-text">{user.name.split(" ")[0]}</h1>
              </div>
            </div>

            <div className="app_flex tag-style title-tag">
              <p className="p-text">{firstTitleHalf}</p>
              <p className="p-text">{secondTitleHalf}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          transition={{ duration: 0.9, delayChildren: 0.6 }}
          whileInView={{ opacity: [0, 1] }}
          className="app-home-img"
        >
          
          <img src={portfolio.image_url} alt="user image" />
          <motion.img
            src={images.circle}
            alt="image circle background"
            transition={{ duration: 1, ease: "easeInOut" }}
            whileInView={{ scale: [0, 1] }}
            className="background-circle"
          />
        </motion.div>

        <motion.div
          whileInView={{
            scale: [0, 1],
            opacity: [0, 1],
            transition: {
              ease: "easeInOut",
              duration: 1,
            },
          }}
          className="app-home-skill-circle"
        >
          {[portfolio.main_skill_1, portfolio.main_skill_2, portfolio.main_skill_3].map(
            (skill, index) => (
              <div className="app_flex" key={`circle-${index}`}>
                <img src={images.getImage(skill)} alt="skill backgroud" />
              </div>
            )
          )}
        </motion.div>
      </div>
    )
  );
};

export default Home;
