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

  const [submitted, setSubmitted] = useState(false);

  // Handlers
  const handleUsernameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      username: event.target.value,
    }));
  };

  const handlePaswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
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
      <form onSubmit={handleSubmit}>
        <section>
          <div>
            <label for="">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleUsernameInputChange}
              value={values.username}
            />
          </div>
          <div>
            <label for="">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handlePaswordInputChange}
              value={values.password}
            />
          </div>
          <div>
            <label for="">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              onChange={handleEmailInputChange}
              value={values.email}
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </section>
      </form>
    </>
  );
};

export default Register;
