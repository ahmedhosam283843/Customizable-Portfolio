import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import SkillComboBox from "../comboBox/SkillComboBox";
import "./AddProjectDialog.scss";
import { useNavigate } from "react-router-dom";

const AddProjectDialog = () => {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/home");
    setData(data);
  };
  console.log(data);
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
              <input
                id="img-url"
                className="form-control custom-input"
                type="text"
                placeholder="Project Image URL"
                {...register("img-url", { required: true })}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <SkillComboBox number={"1"} />
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
};

export default AddProjectDialog;
