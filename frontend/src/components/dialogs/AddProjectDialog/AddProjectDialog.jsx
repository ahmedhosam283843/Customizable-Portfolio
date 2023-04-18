import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ProjectTagComboBox from "../../comboBox/ProjectTagComboBox";
import "./AddProjectDialog.scss";

const AddProjectDialog = ({handleFormSubmit}) => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const onSubmit = (data) => {
    setData(data);
    handleFormSubmit();
    console.log(data);
  };
  return (
    <div className="project-dialog">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row mb-4">
            <div className="col-lg-8 col-md-12 col-sm-12">
              <input
                id="project-title"
                className="form-control custom-input"
                type="text"
                placeholder="Project Title"
                {...register("project-title", { required: true })}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <textarea
                id="project-description"
                className="form-control custom-input"
                placeholder="Project Description"
                {...register("project-description", { required: true })}
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input
                id="img-url"
                className="form-control custom-input"
                type="text"
                placeholder="Project Image URL"
                {...register("img-url", { required: true })}
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input
                id="code-link"
                className="form-control custom-input"
                type="text"
                placeholder="Code Link"
                {...register("code-link", { required: true })}
              />
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input
                id="demo-link"
                className="form-control custom-input"
                type="text"
                placeholder="Demo Link"
                {...register("demo-link", { required: true })}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <ProjectTagComboBox />
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn customize-btn">
                Add Project
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProjectDialog;
