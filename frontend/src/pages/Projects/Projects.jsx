import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";
import "./Projects.scss";
import { images } from "../../constants";
import Popup from "../../components/Popup/Popup";
import AddProjectDialog from "../../components/dialogs/AddProjectDialog/AddProjectDialog";
import { useNavigate } from "react-router-dom";
import axios from "../../client/axios.js";
import endpoints from "../../client/endpoints.js";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [openPopup, setOpenPopup] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (token) {
      axios
        .get(endpoints.projects, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          console.log(response.data);
          const projects = response.data.map(project => ({
            ...project,
            tag: [project.tag, "All"]
          }));
          setProjects(projects);
          setFilteredProjects(projects);
          console.log(projects[0].tag);  
        })
        
        .catch((error) => {
          console.log(error);
        });
    } else {
      //navigate back to login page if no token is found
      navigate("/login");
    }
  }, []);

  const handleProjectFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 120, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === "All") {
        setFilteredProjects(projects);
      } else {
        setFilteredProjects(
          projects.filter((project) => project.tag.includes(item))
        );
      }
    }, 510);
  };

  return (
    <div className="app-projects">
      <h2 className="header-text">
        My Creative <span>Portfolio</span> Section
        <FaPlus onClick={() => setOpenPopup(true)} />
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
        {filteredProjects.map((project, index) => (
          <div className="app-projects-item app_flex" key={index}>
            <div className="app-project-img app_flex">
              <img src={project.image_url} alt={project.project_title} />

              <motion.div
                whileHover={{ opacity: [0, 1], scale: [1, 0.9] }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                  staggerChildren: 0.6,
                }}
                className="app-project-hover app_flex"
              >
                <a href={project.demo_link} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app_flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={project.code_link} target="_blank" rel="noreferrer">
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
              <h4 className="b-text">{project.project_title}</h4>
              <p className="p-text" style={{ marginTop: 9 }}>
                {project.description}
              </p>

              <div className="app-project-tag app_flex">
                <p className="p-text">{project.tag[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Add New Project"
      >
        <AddProjectDialog />
      </Popup>
    </div>
  );
};

export default Projects;
