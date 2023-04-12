import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export default function Register() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/customize-profile");
    setData(data);
  };
  console.log(data);
  return (
    <div className="register">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-2">
              <input
                id="name"
                className="form-control"
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-2">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-2">
              <input
                id="password"
                className="form-control"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-2">
              <input
                type="password"
                id="confirm-password"
                className="form-control"
                placeholder="Confirm Password"
                {...register("confirm-password", { required: true })}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Address"
                {...register("adress", { required: true })}
              />
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
              <input
                type="text"
                id="city"
                className="form-control"
                placeholder="City"
                {...register("city", { required: true })}
              />
            </div>
            <div className="col-lg-4 col-md-3 col-sm-3 mb-2">
              <input
                type="text"
                id="state"
                className="form-control"
                placeholder="State"
                {...register("state", { required: true })}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 mb-2">
              <input
                type="text"
                id="zip"
                className="form-control"
                placeholder="Zip"
                {...register("zip", { required: true })}
              />
            </div>
          </div>
          <button type="submit" className="btn  register-btn">
            Sign up
          </button>
          <div>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
