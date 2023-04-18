export default function ProjectTagComboBox(number) {
 
    return (
      <div class="form-floating">
        <select
          class="form-select"
          id="floatingSelectGrid"
          aria-label="Floating label select example"
        >

          <option selected value="mobile">Mobile App</option>
          <option value="web">Web App</option>
          <option value="ui">UI/UX</option>
          <option value="machine_learning">Machine Learning</option>
        </select>
        <label htmlFor="floatingSelectGrid">
          {"Project Tag " + number.number}{" "}
        </label>
      </div>
    );
  }
  