import React, { useState } from "react";

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
      <header>
        <h2>Login</h2>
      </header>
      <form className="form--wrapper login" onSubmit={handleSubmit}>
        <section>
          <div>
            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={onChange}
              value={email}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
              value={password}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </section>
      </form>
    </>
  );
};

export default Login;
