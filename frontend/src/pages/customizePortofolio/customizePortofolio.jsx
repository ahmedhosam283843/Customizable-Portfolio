import { useForm } from "react-hook-form";
import { useState } from "react";
import ComboBox from "../../components/comboBox/comboBox";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export default function CustomizePortofolio() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/home");
    setData(data);
  };
  console.log(data);

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
              <ComboBox number={"1"} />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-2">
              <ComboBox number={"2"} />
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 mb-2">
              <ComboBox number={"3"} />
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
