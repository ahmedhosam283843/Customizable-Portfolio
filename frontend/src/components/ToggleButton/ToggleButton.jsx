import React from "react";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import "./ToggleButton.scss";

export default function SkillsExperienceToggleBtn({ onChange }) {
  const [view, setView] = useState("skills");

  const handleView = (event, newView) => {
    if (newView !== null) {
      setView(newView);
      onChange(newView); // call onViewChange callback function
    }
  };


  const buttonStyle = {
    minWidth: Math.max("Skill".length, "Experience".length) + 5 + "ch",
  };

  return (

      <ToggleButtonGroup
        color="primary"
        className="toggle-btn-group"
        value={view}
        exclusive
        onChange={handleView}
        aria-label="skills/experience toggle"
      >
        <ToggleButton value="skills" aria-label="skills" style={buttonStyle}>
          <div>Skill</div>
        </ToggleButton>
        <ToggleButton
          value="experiences"
          aria-label="experiences"
          style={buttonStyle}
        >
          <div>Experience</div>
        </ToggleButton>
      </ToggleButtonGroup>

  );
}
