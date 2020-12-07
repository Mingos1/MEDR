import React, { useState } from "react";
import data from "./data.json";
import MedicationList from "./components/MedicationList";
import Navigation from "./components/Navigation";

const Dashboard = () => {
  const [values, setValues] = useState({ data });

  const userData = values.data;
  const medication = userData.medication;
  console.log(medication);

  return (
    <>
      <Navigation user_data={userData} />
      <MedicationList medication={medication} />
    </>
  );
};

export default Dashboard;
