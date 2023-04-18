import React from 'react'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
  const [view, setView] = useState('skills');

  const handleView = (event, newView) => {
    setView(newView);
  };

  return (
    <ToggleButtonGroup
      value={view}
      exclusive
      onChange={handleView}
      aria-label="skills/experience toggle"
    >
      <ToggleButton value="skills" aria-label="skills">
        <FormatAlignLeftIcon />
      </ToggleButton>
      <ToggleButton value="experiences" aria-label="experiences">
        <FormatAlignCenterIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}