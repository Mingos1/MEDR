import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  useEffect(() => {
    axios.get("/api/hello").then((res) => setState(res.data));
  }, []);

  const [state, setState] = useState("");

  return (
    <>
      <h1>HOME</h1>
      <p>{state}</p>
    </>
  );
};
export default Home;
