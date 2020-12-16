import React, { useState } from "react";
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
} from "@chakra-ui/react";

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
          <FormControl>
            <FormLabel for="name">Username</FormLabel>
            <Input
              type="text"
              name="name"
              placeholder="Username"
              onChange={onChange}
              value={name}
            />
          </FormControl>

          <FormControl id="email">
            <FormLabel for="email">Email</FormLabel>
            <Input
              type="text"
              name="email"
              placeholder="Email"
              onChange={onChange}
              value={email}
            />
          </FormControl>
          <FormControl>
            <FormLabel for="password">Password</FormLabel>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={password}
            />
          </FormControl>

          <div className="form-field--wrapper">
            <Button mt={4} colorScheme="teal" type="submit">
              Register
            </Button>
          </div>
        </section>
      </form>
    </>
  );
};

export default Register;
