import { images } from "../../constants";
import React from "react";
import "./Home.scss";
import { motion } from "framer-motion";

const Home = () => (
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
            <h1 className="header-text">Ahmed</h1>
          </div>
        </div>

        <div className="app_flex tag-style ">
          <p className="p-text">Android Developer</p>
          <p className="p-text">Freelancer</p>
        </div>
      </div>
    </motion.div>

    <motion.div
      transition={{ duration: 0.9, delayChildren: 0.6 }}
      whileInView={{ opacity: [0, 1] }}
      className="app-home-img"
    >
      <img src={images.profile} alt="user image" />
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
      {[images.python, images.flutter, images.javascript].map(
        (circle, index) => (
          <div className="app_flex" key={`circle-${index}`}>
            <img src={circle} alt="skill backgroud" />
          </div>
        )
      )}
    </motion.div>
  </div>
);

export default Home;
