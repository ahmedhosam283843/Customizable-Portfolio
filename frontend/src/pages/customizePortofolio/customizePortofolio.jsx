import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import SkillComboBox from "../../components/comboBox/SkillComboBox";
import { useNavigate } from "react-router-dom";
import axios from "../../client/axios.js";
import endpoints from "../../client/endpoints.js";
import "./styles.css";
export default function CustomizePortofolio() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState({
    "skill-1": "python",
    "skill-2": "kotlin",
    "skill-3": "java",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      const response = await axios.post(
        endpoints.portfolio,
        {
          job_title: data["job-title"],
          image_url: data["img-url"],
          main_skill_1: data["skill-1"],
          main_skill_2: data["skill-2"],
          main_skill_3: data["skill-3"],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 201) {
        navigate("/home");
        setData(data);
      }
    } catch (error) {
      console.log(error);
      if (error.response && error.response.status === 401) {
        setError("Unauthorized. Please log in to continue.");
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
    setData(data);
    console.log(data);
  };

  useEffect(() => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) {
      navigate("/login"); //navigate back to login page if no token is found
    }
  }, []);

  return (
    <div className="customize">
      <h1 className="customize-header">
        Customize My <span id="customize-colored">Portofolio</span>
      </h1>
      {/* Display error box from errors*/}
      {Object.keys(errors).length > 0 && (
        <div className="alert alert-danger">
          {Object.values(errors).map(
            (error) =>
              error.message.length > 0 && ( // only display error message if there is one
                <p key={error.message}>{"*" + error.message}</p>
              )
          )}
        </div>
      )}
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
                {...register("img-url", {
                  required: true,
                  pattern: {
                    value: /(https?:\/\/.*\.(?:png))/i,
                    message: "Please enter a valid URL of a PNG image.",
                  },
                })}
              />

              <p id="customize-note">
                Note: Image must be without background and in png format
              </p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 col-sm-12 mb-2">
              <SkillComboBox
                number={1}
                control={control}
                defaultValue={"python"}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-2">
              <SkillComboBox
                number={2}
                control={control}
                defaultValue={"kotlin"}
              />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-2">
              <SkillComboBox
                number={3}
                control={control}
                defaultValue={"java"}
              />
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
