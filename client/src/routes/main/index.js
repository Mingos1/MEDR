import React, { useState, useEffect } from "react";
import { Flex, Menu, Box } from "@chakra-ui/react";
import data from "./data.json";
import MedicationList from "./components/MedicationList";
// import Navigation from "./components/Navigation";
import "./components/Navigation.css";
import AddMed from "./components/AddMed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPen } from "@fortawesome/free-solid-svg-icons";

const Dashboard = ({ setAuth }) => {
  const [medication, setMedication] = useState([]);
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

  async function getMed() {
    try {
      const response = await fetch(
        "http://localhost:5000/dashboard/medication",
        {
          method: "GET",
          headers: { token: localStorage.token },
        }
      );
      const parseRes = await response.json();
      console.log(parseRes);
      setMedication(parseRes);
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

  useEffect(() => {
    getMed();
  }, []);

  return (
    <>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        mb={3}
        p={3}
        borderColor="black"
        borderWidth="3px"
      >
        <Flex align="center" borderColor="black" borderWidth="3px">
          <h2 className="logo">medr.</h2>
        </Flex>
        <Menu>
          <Box width="50%" borderColor="black" borderWidth="3px">
            <Flex
              align={["center", "center", "center", "center"]}
              justify={["center", "space-between", "flex-end", "flex-end"]}
              direction={["column", "row", "row", "row"]}
              pt={[4, 4, 0, 0]}
            >
              <AddMed />
              {/* <button className="nav--button input--button">
              <FontAwesomeIcon icon={faPen} className="icon pen" />
              <h3 className="nav--words">Delete!</h3>
            </button> */}

              <Box>
                <Flex pt="30px" align="space-between" direction="row">
                  <FontAwesomeIcon icon={faUser} />
                  <h3>{name}</h3>
                  <button onClick={(e) => logout(e)}>
                    <h3>Logout</h3>
                  </button>
                </Flex>
              </Box>
            </Flex>
          </Box>
        </Menu>
      </Flex>

      {/* <Navigation user_data={userData} /> */}
      <MedicationList medication={medication} />
    </>
  );
};

export default Dashboard;
