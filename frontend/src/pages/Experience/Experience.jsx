import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Experience.scss";
import { images } from "../../constants";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Popup from "../../components/Popup/Popup";
import AddSkillsExperienceDialog from "../../components/dialogs/AddSkillsExperienceDialog/AddSkillsExperienceDialog";
import axios from "../../client/axios.js";
import endpoints from "../../client/endpoints.js";
const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      axios
        .get(endpoints.skills, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log("skills:");
          console.log(response.data);
          setSkills(response.data);
        })

        .catch((error) => {
          console.log(error);
        });


        axios
        .get(endpoints.experiences, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          setExperiences(response.data);
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
    <div className="experience">
      <h2 className="header-text">
        Skills & Experiences
        <FaPlus onClick={() => setOpenPopup(true)} />
      </h2>

      <div className="app-skills-container">
        <motion.div className="app-skills-list">
          {skills.map((skill) => (
            <motion.div
              transition={{ duration: 0.9 }}
              whileInView={{ scale: [0.5, 1], y: [-500, 0] }}
              className="app-skills-item app_flex"
              key={skill.skill_name}
            >
              <div
                className="app_flex"
              >
                <img src={skill.icon_url} alt={skill.skill_name} />
              </div>
              <p className="p-text">{skill.skill_name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app-experience">
          {Array.from(new Set(experiences.map((exp) => exp.start_year))) //extract unique years
            .sort((a, b) => b - a)
            .map((year) => (
              <motion.div className="app-experience-item" key={year}>
                <div className="app-experience-year">
                  <p className="b-text">{year}</p>
                </div>
                <motion.div className="app-experience-works">
                  {experiences
                    .filter((exp) => exp.start_year === year) //only show experiences for the current year
                    .map((exp) => (
                      <motion.div
                        key={exp.title}
                        whileInView={{ opacity: [0, 1], x: [-100, 0] }}
                        transition={{ duration: 0.9 }}
                        className="app-experience-work"
                        data-for={exp.name}
                        data-tip
                      >
                        <h4 className="b-text">{exp.title}</h4>
                        <p className="p-text">{exp.company_name}</p>
                      </motion.div>
                    ))}
                </motion.div>
              </motion.div>
            ))}
        </div>
      </div>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Add Skill/Experience"
      >
        <AddSkillsExperienceDialog />
      </Popup>
    </div>
  );
};

export default Experience;
