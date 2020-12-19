import React, { useState, useEffect } from "react";
import {
  Flex,
  Menu,
  Box,
  Button,
  Text,
  Wrap,
  Avatar,
  Center,
} from "@chakra-ui/react";
// import data from "./data.json";
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
        backgroundColor="white"
        borderRadius="4px"
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
        w="100%"
        px={5}
        py={4}
        // borderColor="black"
        // borderWidth="3px"
      >
        <Flex align="center">
          <h2 className="logo">medr.</h2>
        </Flex>
        <Box margin={2}>
          <AddMed />
        </Box>
        <Flex align="flex-end" justifyContent="space-around">
          <Box margin={2}>
            <Text fontSize="lg" fontWeight="600">
              {name}
            </Text>
          </Box>
          <Box margin={2}>
            <Button backgroundColor="skyblue" onClick={(e) => logout(e)}>
              <h3>Logout</h3>
            </Button>
          </Box>
        </Flex>
      </Flex>

      {/* <Navigation user_data={userData} /> */}
      <MedicationList medication={medication} />
    </>
  );
};

export default Dashboard;
