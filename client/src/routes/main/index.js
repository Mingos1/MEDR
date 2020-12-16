import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
// import data from "./data.json";
// import MedicationList from "./components/MedicationList";
// import Navigation from "./components/Navigation";
import "./components/Navigation.css";
import AddMed from "./components/AddMed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPen } from "@fortawesome/free-solid-svg-icons";

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
      <nav>
        <section>
          <h2 className="logo">medr.</h2>
        </section>
        <section>
          <div>
            <AddMed />
            {/* <button className="nav--button input--button">
              <FontAwesomeIcon icon={faPen} className="icon pen" />
              <h3 className="nav--words">Delete!</h3>
            </button> */}
          </div>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <h3>{name}</h3>
            <button onClick={(e) => logout(e)}>
              <h3>Logout</h3>
            </button>
          </div>
        </section>
      </nav>

      {/* <Navigation user_data={userData} /> */}
      {/* <MedicationList medication={medication} /> */}
    </>
  );
};

export default Dashboard;
