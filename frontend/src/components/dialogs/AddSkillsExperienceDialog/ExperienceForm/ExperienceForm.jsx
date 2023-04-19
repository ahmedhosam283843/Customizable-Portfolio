import React from 'react';
import { useForm } from "react-hook-form";
import { useState } from "react";
import "./ExperienceForm.scss";
const ExperienceForm = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const onSubmit = (data) => {
    setData(data);
    console.log(data);
  };

  return (
    <div className="experience-form">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
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

          <div className="row mb-4">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <input
                id="Start Year"
                className="form-control custom-input"
                type="number"
                placeholder="Start Year"
                {...register("start-year", { required: true })}
              />
            </div>
          </div>





        </div>
      </form>
    </div>
  );
}

export default ExperienceForm