import React, { useState, useEffect } from "react";
// import data from "./data.json";
// import MedicationList from "./components/MedicationList";
// import Navigation from "./components/Navigation";

const Dashboard = ({ setAuth }) => {
  // const [values, setValues] = useState({ data });
  const [name, setName] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setName(parseRes.user_name);
    } catch (err) {
      console.error(err.message);
    }
  }

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };

  useEffect(() => {
    getName();
  }, []);

  // const userData = values.data;
  // const medication = userData.medication;
  // console.log(medication);

  return (
    <>
      <p>{name}</p>
      <button onClick={(e) => logout(e)}>Logout</button>
      {/* <Navigation user_data={userData} /> */}
      {/* <MedicationList medication={medication} /> */}
    </>
  );
};

export default Dashboard;
