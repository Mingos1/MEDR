import React, { useState } from "react";
import {
  FormControl,
  Input,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Button,
  Header,
} from "@chakra-ui/react";

const Login = ({ setAuth }) => {
  // Hooks
  const [values, setValues] = useState({
    password: "",
    email: "",
  });

  const { email, password } = values;

  // Handlers

  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setSubmitted(true);
    const body = { email, password };

    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      console.log(parseRes);
      console.log(body);

      if (parseRes.token !== undefined) {
        localStorage.setItem("token", parseRes.token);
        setAuth(true);
      } else {
        setAuth(false);
      }

      //setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <form className="form--wrapper login" onSubmit={handleSubmit}>
        <header>
          <h2>Login</h2>
        </header>

        <FormControl id="email">
          <FormLabel for="email">Email</FormLabel>
          <Input
            variant="outline"
            size="md"
            type="text"
            name="email"
            placeholder="email"
            onChange={onChange}
            value={email}
          />
        </FormControl>
        <FormControl>
          <FormLabel for="password">Password</FormLabel>
          <Input
            variant="outline"
            size="md"
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
            value={password}
          />
        </FormControl>
        <div className="form-field--wrapper">
          <Button mt={4} colorScheme="pink" type="submit">
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default Login;
