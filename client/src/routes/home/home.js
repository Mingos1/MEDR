import React from "react";
// import axios from "axios";

const Home = () => {
  // const [state, setState] = useState("");

  // useEffect(() => {
  //   axios.get("/api/hello").then((res) => setState(res.data));
  // }, []);

  return (
    <>
      <h1>HOME</h1>
      <a href="http://localhost:3000/login">
        <button>Login</button>
      </a>
      <a href="http://localhost:3000/register">
        <button>Register</button>
      </a>
    </>
  );
};
export default Home;
