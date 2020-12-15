import React, { useState } from "react";
import "./styles.css";
// import { Formik } from "formik";
// import * as Yup from "yup";

const Register = ({ setAuth }) => {
  // Hooks
  const [values, setValues] = useState({
    name: "",
    password: "",
    email: "",
  });

  const { email, password, name } = values;

  // Handlers

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password, name };
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      console.log(parseRes);

      if (parseRes.token !== undefined) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <header>
        <h2>Register</h2>
      </header>
      <form className="form--wrapper register" onSubmit={handleSubmit}>
        <section>
          <div className="form-field--wrapper">
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={email}
            />
          </div>
          <div className="form-field--wrapper">
            <label for="name">Username</label>
            <input
              type="text"
              name="name"
              placeholder="username"
              onChange={onChange}
              value={name}
            />
          </div>
          <div className="form-field--wrapper">
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={password}
            />
          </div>

          <div className="form-field--wrapper">
            <button type="submit">Register</button>
          </div>
        </section>
      </form>
    </>
  );
};

export default Register;
