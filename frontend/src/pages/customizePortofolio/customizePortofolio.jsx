import { useForm } from "react-hook-form";
import { useState } from "react";
import SkillComboBox from "../../components/comboBox/SkillComboBox";
import { useNavigate } from "react-router-dom";
import axios from "../../client/axios.js";
import endpoints from "../../client/endpoints.js";
import "./styles.css";
export default function CustomizePortofolio() {
  const { register, handleSubmit, control } = useForm();
  const [data, setData] = useState({
    "skill-1": "python",
    "skill-2": "kotlin",
    "skill-3": "java",
  });
  const [error, setError] = useState(null);
  const handleSkillChange = (skillNumber, selectedSkill) => {
    setData((prevState) => ({
      ...prevState,
      ["skill" + skillNumber]: selectedSkill,
    }));
  };
  const navigate = useNavigate();

  const onSubmit = async (data) => {

    setData(data);
    console.log(data);
  };

  return (
    <div className="customize">
      <h1 className="customize-header">
        Customize My <span id="customize-colored">Portofolio</span>
      </h1>
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <input
                id="job-title"
                className="form-control custom-input"
                type="text"
                placeholder="Current Job Title"
                {...register("job-title", { required: true })}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input
                id="img-url"
                className="form-control custom-input"
                type="text"
                placeholder="User Image URL"
                {...register("img-url", { required: true })}
              />
              <p id="customize-note">
                Note: Image must be without background and in png format
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 col-sm-12 mb-2">
              <SkillComboBox number={1} control={control} defaultValue={"python"} />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-2">
              <SkillComboBox number={2} control={control} defaultValue={"kotlin"} />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-2">
              <SkillComboBox number={3} control={control} defaultValue={"java"} />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn customize-btn">
              Create Account
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
