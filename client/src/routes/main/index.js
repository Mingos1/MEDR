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

import MedicationList from "./components/MedicationList";
import "./components/Navigation.css";
import AddMed from "./components/AddMed";

const Dashboard = ({ setAuth }) => {

  const [medication, setMedication] = useState([]);
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");

  async function getName() {
    try {
      const response = await fetch("http://localhost:5000/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseRes = await response.json();
      setName(parseRes.user_name);
      setUserId(parseRes.user_id);
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
  
  useEffect(() => {
    getName();
  }, []);
  
  useEffect(() => {
    getMed();
  }, []);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setAuth(false);
  };
  
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
     
      >
        <Flex align="center">
          <h2 className="logo">medr.</h2>
        </Flex>
        <Box margin={2}>
          <AddMed user_id={userId} />
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
      <MedicationList medication={medication} />
    </>
  );
};

export default Dashboard;
