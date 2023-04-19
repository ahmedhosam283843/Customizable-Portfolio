import React from "react";
import { useState } from "react";
import SkillsExperienceToggleBtn from "../../ToggleButton/ToggleButton";
import "./AddSkillsExperienceDialog.scss";
import ExperienceForm from "./ExperienceForm/ExperienceForm";
import SkillsForm from "./SkillsForm/SkillsForm";
import { motion } from "framer-motion";

const AddSkillsExperienceDialog = ({ handleFormSubmit }) => {
  const [view, setView] = useState("skills");


  const handleViewChange = (newView) => {
    setView(newView);
  };

  return (
    <div className="add-skills-experience">
      <div className="skills-experience-toggle">
        <SkillsExperienceToggleBtn onChange={handleViewChange} />
      </div>

      <motion.div
        className="mt-4"
        animate={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -120 }}
        transition={{ duration: 0.7 }}
        key={view}
      >
        {view === "skills" ? (
          <div className="skills-view">
            <SkillsForm handleFormSubmit = {handleFormSubmit}/>
          </div>
        ) : (
          <div className="experience-view">
            <ExperienceForm handleFormSubmit = {handleFormSubmit}/>
          </div>
        )}
      </motion.div>

    </div>
  );
};

export default AddSkillsExperienceDialog;
