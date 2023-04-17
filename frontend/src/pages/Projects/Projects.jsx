import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { FaPlus} from "react-icons/fa";
import "./Projects.scss";
import { images } from "../../constants";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filterProject, setFilterProject] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const data = [
    {
      codeLink: "https://github.com",
      description: "Gym Application",
      imgUrl: images.gymtopia,
      projectLink: "https://github.com",
      tags: ["React JS", "All"],
      title: "Gymtopia",
    },
    {
      codeLink: "https://github.com",
      description: "Market Application",
      imgUrl: images.gazara,
      projectLink: "https://github.com",
      tags: ["Mobile App", "All"],
      title: "Gazara Market",
    },
  ];
  useEffect(() => {
    setProjects(data);
    setFilterProject(data);
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 120, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilterProject(projects);
      } else {
        setFilterProject(projects.filter((project) => project.tags.includes(item)));
      }
    }, 510);
  };

  return (
    <div className="app-projects">
      <h2 className="header-text">
        My Creative <span>Portfolio</span> Section
      <FaPlus onClick={() => alert("Hello")} />
      </h2>


      <div className="app-projects-filter">
        {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map(
          (item, index) => (
            <div
              onClick={() => handleProjectFilter(item)}
              key={index}
              className={`app-projects-filter-item app_flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          )
        )}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.6, delayChildren: 0.6 }}
        className="app-projects-portfolio"
      >
        {filterProject.map((project, index) => (
          <div className="app-projects-item app_flex" key={index}>
            <div className="app-project-img app_flex">
              <img src={project.imgUrl} alt={project.name} />

              <motion.div
                whileHover={{ opacity: [0, 1], scale: [1, 0.9] }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  staggerChildren: 0.6,
                }}
                className="app-project-hover app_flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app_flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.3 }}
                    className="app_flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app-project-content app_flex">
              <h4 className="b-text">{project.title}</h4>
              <p className="p-text" style={{ marginTop: 9 }}>
                {project.description}
              </p>

              <div className="app-project-tag app_flex">
                <p className="p-text">{project.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
