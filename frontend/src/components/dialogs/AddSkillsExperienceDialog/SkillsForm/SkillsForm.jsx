import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./SkillsForm.scss";
import axios from "../../../../client/axios.js";
import endpoints from "../../../../client/endpoints.js";
const SkillsForm = ({handleFormSubmit}) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const onSumit = (data) => {
    setData(data);
    console.log(data);
    handleFormSubmit();
  };


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
                {...register("skill-icon", { required: true })}
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
}

export default SkillsForm