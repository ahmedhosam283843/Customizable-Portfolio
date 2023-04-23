import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "../../client/axios.js";
import endpoints from "../../client/endpoints.js";

import "./styles.css";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const onSubmit = async (formData) => {
    try {
      const response = await axios.post(endpoints.login, {
        email: formData.email,
        password: formData.password,
      });
      const token = response.data.accessToken;
      console.log("Token: " + token);
      const rememberMe = formData.remember_me;

      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        sessionStorage.setItem("token", token);
      }

      navigate("/home");
    } catch (error) {
      setError("Incorrect email or password. Please try again.");
      console.log(error);
    }
    setData(data);
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-12">
              {error && <div className="alert alert-danger">{error}</div>}
              <input
                id="email"
                className="form-control mb-3"
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <input
                type="password"
                id="password"
                className="form-control mb-3"
                placeholder="Password"
                {...register("password", { required: true })}
              />
              <div className="d-flex align-items-center mb-1">
                <input
                  id="remeber-me"
                  type="checkbox"
                  className="login-remeber-me "
                  {...register("remember_me")}
                />
                <label htmlFor="remeber-me">Remember me</label>
              </div>
              <button type="submit" className="btn btn-primary login-btn">
                Sign in
              </button>
              <div>
                Create a new account! <Link to="/register">Register</Link>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
