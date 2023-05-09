import React from "react";
import { useForm } from "react-hook-form";
import { useState , useEffect} from "react";
import ProjectTagComboBox from "../../comboBox/ProjectTagComboBox";
import "./AddProjectDialog.scss";
import axios from "../../../client/axios.js";
import endpoints from "../../../client/endpoints.js";

const AddProjectDialog = ({ handleFormSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const [data, setData] = useState();

  useEffect(() => {
    //Initialize the "tag" field value in the form data
    setValue("tag", "Mobile App");
  }, []);


  const onSubmit = async (data) => {
    try {
      const token =
        localStorage.getItem("token") || sessionStorage.getItem("token");
      const response = await axios.post(
        endpoints.projects,
        {
          project_title: data["project-title"],
          description: data["project-description"],
          image_url: data["img-url"],
          code_link: data["code-link"],
          demo_link: data["demo-link"],
          tag: data["tag"],
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 201) {
        console.log("Inside AddProjectDialog.jsx");
        console.log(data);
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

  const handleTagChange = (value) => {
    // Update the "tag" field value in the form data
    setValue("tag", value);
  };

  return (
    <div className="project-dialog">
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
                {...register("img-url", {
                  required: true,
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Please enter a valid image URL",
                  },
                })}
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
                {...register("code-link", {
                  required: true,
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Please enter a valid code URL",
                  },
                })}
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
                {...register("demo-link", {
                  required: true,
                  pattern: {
                    value: /^(ftp|http|https):\/\/[^ "]+$/,
                    message: "Please enter a valid demo URL",
                  },
                })}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-8 col-sm-12">
              <ProjectTagComboBox onChange={handleTagChange} />
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
