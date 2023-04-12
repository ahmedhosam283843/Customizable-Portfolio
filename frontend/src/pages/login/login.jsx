import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function Login() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate("/home");
    setData(data);
  };
  console.log(data);
  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 col-md-8 col-sm-12">
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
