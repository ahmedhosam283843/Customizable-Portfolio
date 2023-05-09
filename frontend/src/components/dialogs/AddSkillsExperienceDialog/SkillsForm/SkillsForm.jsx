import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./SkillsForm.scss";
import axios from "../../../../client/axios.js";
import endpoints from "../../../../client/endpoints.js";
const SkillsForm = ({ handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState();

  const onSubmit = async (data) => {
    try {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      const response = await axios.post(
        endpoints.skills,
        {
          skill_name: data["skill-name"],
          icon_url: data["skill-icon"],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 201) {
        handleFormSubmit();
        setData(data);
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
    handleFormSubmit();
    setData(data);
    console.log(data);
  };
  return (
    <div className="skills-form">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
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
          <div className="row mb-4">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <input
                id="skill-name"
                className="form-control custom-input"
                type="text"
                placeholder="Skill Name"
                {...register("skill-name", { required: true })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input
                id="skill-icon"
                className="form-control custom-input"
                placeholder="Skill Icon URL"
                {...register("skill-icon", {
                  required: true,
                  pattern: {
                    value: /(https?:\/\/.*\.(?:png))/i,
                    message: "Please enter a valid URL of a PNG image.",
                  },
                })}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn customize-btn">
            Add Skill
          </button>
        </div>
      </form>
    </div>
  );
};

export default SkillsForm;
