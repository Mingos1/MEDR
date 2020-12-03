import React from "react";

function RegisterForm() {
  return (
    <form>
      <header>
        <h2>Register</h2>
      </header>
      <section>
        <label for="">Username</label>
        <input type="text" required />
        <label for="">Password</label>
        <input type="password" required />
        <label for="">Email</label>
        <input type="text" required />
        <button type="submit">Register</button>
        <input />
      </section>
    </form>
  );
}

export default RegisterForm;
