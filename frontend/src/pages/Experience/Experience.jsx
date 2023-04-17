import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Experience.scss";
import { images } from "../../constants";
import { FaPlus} from "react-icons/fa";


const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  const experienceData = [
    {
      works: [
        {
          _type: "workExperience",
          company: "Coformatique",
          desc: "I worked as an android developer",
          name: "Android Developer",
        },
      ],
      year: "2022",
    },
    {
      works: [
        {
          _type: "workExperience",
          company: "Intelligent System Labs",
          desc: "I worked as an research assistant",
          name: "Research Assistant ",
        },
      ],
      year: "2021",
    },
    {
      works: [
        {
          _type: "workExperience",
          company: "Weballo",
          desc: "I worked as an android developer",
          name: "Android Developer",
        },
      ],
      year: "2019",
    },
  ];
  const skillsData = [
    {
      name: "cpp",
      icon: "cpp",
    },
    {
      name: "React",
      icon: "react",
    },
    {
      name: "git",
      icon: "git",
    },
    {
      name: "python",
      icon: "python",
    },
  ];
  useEffect(() => {
    setExperiences(experienceData);
    setSkills(skillsData);
  }, []);

  return (
    <div className="experience">
      <h2 className="header-text">
        Skills & Experiences
        <FaPlus onClick={() => alert("Hello")} />
      </h2>

      <div className="app-skills-container">
        <motion.div className="app-skills-list">
          {skills.map((skill) => (
            <motion.div
              transition={{ duration: 0.9 }}
              whileInView={{ scale: [0.5, 1], y: [-500, 0] }}
              className="app-skills-item app_flex"
              key={skill.name}
            >
              <div
                className="app_flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={images.getImage(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app-experience">
          {experiences?.map((experience) => (
            <motion.div className="app-experience-item" key={experience.year}>
              <div className="app-experience-year">
                <p className="b-text">{experience.year}</p>
              </div>
              <motion.div className="app-experience-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      key={work.name}
                      whileInView={{ opacity: [0, 1], x: [-100, 0] }}
                      transition={{ duration: 0.9 }}
                      className="app-experience-work"
                      data-for={work.name}
                      data-tip
                    >
                      <h4 className="b-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
