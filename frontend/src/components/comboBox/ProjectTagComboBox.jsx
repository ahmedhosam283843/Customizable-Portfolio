import React, { useState } from "react";

const ProjectTagComboBox = ({ onChange }) => {
  const [selectedTag, setSelectedTag] = useState("");

  const handleTagChange = (e) => {
    const value = e.target.value;
    setSelectedTag(value);
    onChange(value); // Call the onChange prop with the selected value
  };

  return (
    <div className="form-floating">
      <select
        className="form-select"
        id="floatingSelectGrid"
        aria-label="Floating label select example"
        value={selectedTag}
        onChange={handleTagChange}
      >
        <option value="Mobile App">Mobile App</option>
        <option value="Web App">Web App</option>
        <option value="UI/UX">UI/UX</option>
        <option value="Machine Learning">Machine Learning</option>
      </select>
      <label htmlFor="floatingSelectGrid">{"Project Tag"}</label>
    </div>
  );
};

export default ProjectTagComboBox;
