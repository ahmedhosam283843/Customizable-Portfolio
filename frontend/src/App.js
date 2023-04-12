import React from "react";

import Projects from "./pages/Projects/Projects.jsx";
import Experience from "./pages/Experience/Experience.jsx";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/login/login.jsx";
import Register from "./pages/signup/register.jsx";
import CustomizePortofolio from "./pages/customizePortofolio/customizePortofolio.jsx";
import NavbarSwithcer from "./components/navbarSwitcher/navbarSwitcher.jsx";
const App = () => {
  return (
    <Router>
      <NavbarSwithcer>
        <NavBar />
      </NavbarSwithcer>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route
          path="/customize-profile"
          element={<CustomizePortofolio />}
        ></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
