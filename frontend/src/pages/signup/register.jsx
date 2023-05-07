import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "../../client/axios.js";
import endpoints from "../../client/endpoints.js";
import "./styles.css";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [data, setData] = useState();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(endpoints.register, data); // use Axios to post data to backend
      console.log(response.data);
      const token = response.data.accessToken;
      console.log("Register Token: " + token);
      sessionStorage.setItem("token", token);
      setData(data);
      navigate("/customize-profile");
    } catch (error) {
      console.error(error);
    }
  };
  console.log(errors);

  return (
    <div className="register">
      <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          {/* Display error box from errors*/}
          {Object.keys(errors).length > 0 && (
            <div className="alert alert-danger">
              {Object.values(errors).map((error) => (
                <p key={error.message}>{'*' + error.message}</p>
              ))}
            </div>
          )}
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12 mb-2">
              <input
                id="name"
                className="form-control"
                type="text"
                placeholder="Name"
                {...register("name", {
                  required: true,
                  pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/i, //validate name
                    message: "Name can only contain letters",
                  },
                  maxLength: {
                    value: 80,
                    message: "Maximum length is 80 characters",
                  },
                })}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-2">
              <input
                type="text"
                id="email"
                className="form-control"
                placeholder="Email"
                {...register("email", {
                  required: true,
                  pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }, //validate email
                })}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-2">
              <input
                id="password"
                className="form-control"
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: true,
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g, //validate password
                    message:
                      "Password must contain at least 8 characters including an uppercase letter, lowercase letter, special character, and number",
                  },
                })}
              />
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 mb-2">
              <input
                type="password"
                id="confirm-password"
                className="form-control"
                placeholder="Confirm Password"
                {...register("confirm-password", {
                  required: true,
                  validate: (value) =>
                    value === watch("password") || "Passwords don't match.",
                })}
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
