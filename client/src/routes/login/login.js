import React, { useState } from "react";

const Login = () => {
  // Hooks
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [setSubmitted] = useState(false);

  // Handlers
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
        <h2>Login</h2>
      </header>
      <form className="form--wrapper login" onSubmit={handleSubmit}>
        <section>
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
            <button type="submit">Login</button>
          </div>
        </section>
      </form>
    </>
  );
};

export default Login;
