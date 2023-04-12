import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Experience.scss";
import { images } from "../../constants";

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
    },
    {
      name: "React",
    },
    {
      _createdAt: "2022-09-08T11:55:16Z",
      _id: "a7d6b67e-04ea-4c5d-a2c4-4abe4b26109c",
      _rev: "7skGprd3woV7MMrry26gUb",
      _type: "skills",
      _updatedAt: "2022-09-08T11:55:16Z",
      icon: {
        _type: "image",
        asset: {
          _ref: "image-a804a741fb26f6c236c73086a87cfc9f64106401-480x480-png",
          _type: "reference",
        },
      },
      name: "git",
    },
    {
      _createdAt: "2022-09-08T11:55:34Z",
      _id: "fd6b064d-adf2-48b4-a52f-92c42c5162c7",
      _rev: "uqfwvKY7gTw3IQj8xGXkkA",
      _type: "skills",
      _updatedAt: "2022-09-08T11:55:34Z",
      icon: {
        _type: "image",
        asset: {
          _ref: "image-aa1dc780814cb5c67190adc0b032bf0671309d9c-64x64-png",
          _type: "reference",
        },
      },
      name: "python",
    },
  ];
  useEffect(() => {
    setExperiences(experienceData);
    setSkills(skillsData);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="experience">
      <h2 className="header-text">Skills & Experiences</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app_flex"
              key={skill.name}
            >
              <div
                className="app_flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={images.flutter} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="app__skills-exp">
          {experiences?.map((experience) => (
            <motion.div className="app__skills-exp-item" key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="b-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
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
