import React from "react";
// import { Formik } from "formik";
// import * as Yup from "yup";

const Register = () => (
  <form>
    <header>
      <h2>Register</h2>
    </header>
    <section>
      <label for="">Username</label>
      <input type="text" />
      <label for="">Password</label>
      <input type="password" />
      <label for="">Email</label>
      <input type="text" />
      <button type="submit">Register</button>
      <input />
    </section>
  </form>
);

export default Register;
