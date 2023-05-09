import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./ExperienceForm.scss";
import axios from "../../../../client/axios.js";
import endpoints from "../../../../client/endpoints.js";
const ExperienceForm = ({ handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState();
  const currentYear = new Date().getFullYear();
  const onSubmit = async (data) => {
    try {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      const response = await axios.post(
        endpoints.experiences,
        {
          company_name: data["company-name"],
          title: data["title"],
          start_year: data["start-year"],
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
    <div className="experience-form">
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
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input
                id="company-name"
                className="form-control custom-input"
                type="text"
                placeholder="Company Name"
                {...register("company-name", { required: true })}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input
                id="title"
                className="form-control custom-input"
                placeholder="Title"
                {...register("title", { required: true })}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <input
                id="Start Year"
                className="form-control custom-input"
                type="number"
                placeholder="Start Year"
                {...register("start-year", {
                  required: true,
                  pattern: {
                    value: /^(19|20)\d{2}$/,
                    message: `Please enter a valid year in the format YYYY up to ${currentYear}`,
                  },
                  validate: {
                    lessThanOrEqual: (value) =>
                      parseInt(value) <= currentYear ||
                      `Please enter a year up to ${currentYear}`,
                  },
                })}
              />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn customize-btn">
            Add Experience
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExperienceForm;
