import { useController } from "react-hook-form";

export default function SkillComboBox({ number, control, defaultValue }) {
  const {
    field: { onChange, onBlur, value },
  } = useController({
    name: `skill-${number}`,
    control,
    defaultValue,
  });

  return (
    <div className="form-floating">
      <select
        className="form-select"
        id={`skill-${number}`}
        aria-label={`Main Skill ${number}`}
        {...{ onBlur, onChange, value }}
      >
        <option value="python">Python</option>
        <option value="kotlin">Kotlin</option>
        <option value="java">Java</option>
        <option value="react">React</option>
        <option value="javascript">Javascript</option>
        <option value="flutter">Flutter</option>
        <option value="cpp">Cpp</option>
        <option value="c#">C#</option>
      </select>
      <label htmlFor={`skill-${number}`}>{"Main Skill " + number}</label>
    </div>
  );
}
