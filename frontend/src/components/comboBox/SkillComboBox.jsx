export default function SkillComboBox(number) {
 
  return (
    <div class="form-floating">
      <select
        class="form-select"
        id="floatingSelectGrid"
        aria-label="Floating label select example"
      >
        <option selected value="python">
          Python
        </option>
        <option value="kotlin">Kotlin</option>
        <option value="java">Java</option>
        <option value="react">React</option>
        <option value="javascript">Javascript</option>
        <option value="flutter">Flutter</option>
        <option value="cpp">Cpp</option>
        <option value="c#">C#</option>
        <option value="python">Python</option>
      </select>
      <label htmlFor="floatingSelectGrid">
        {"Main Skill " + number.number}{" "}
      </label>
    </div>
  );
}
