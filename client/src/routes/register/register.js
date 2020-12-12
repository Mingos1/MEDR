import React, { useState } from "react";
import "./styles.css";
// import { Formik } from "formik";
// import * as Yup from "yup";

const Register = () => {
  // Hooks
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });

  const { email, password, username } = values;

  const [submitted, setSubmitted] = useState(false);

  // Handlers

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(values);
  };

  return (
    <>
      <header>
        <h2>Register</h2>
      </header>
      <form className="form--wrapper register" onSubmit={handleSubmit}>
        <section>
          <div className="form-field--wrapper">
            <label for="">Username</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              onChange={onChange}
              value={values.name}
            />
          </div>
          <div className="form-field--wrapper">
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={values.password}
            />
          </div>
          <div className="form-field--wrapper">
            <label for="">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={values.email}
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
