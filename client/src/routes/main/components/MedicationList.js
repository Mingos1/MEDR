import React from "react";

import "./MedicationList.css";

import sun from "./images/sun.png";
import sunrise from "./images/sunrise.png";
import night from "./images/night.png";

import SectionTitle from  "./SectionTitle"
import MedicationBox from "./MedicationBox"

// TODO: Add "Add" and "Edit" functions to the modals
// TODO: minor. Fix formatting on dashboard page components
// TODO: Implement refresh token

function MedicationList(props) {
  const medication = props.medication;

  const morning = [];
  const evening = [];
  const afternoon = [];

  medication.forEach((medication) => {
    if (medication.afternoon === true) {
      afternoon.push(medication);
    }
    if (medication.morning === true) {
      morning.push(medication);
    }
    if (medication.evening === true) {
      evening.push(medication);
    }
  });

  return (
    <>
      <SectionTitle />
      <div className="time--wrapper">
        <section className="time--container">
          <header className="time--container-header" id="morning">
            <div>
              <h2>Morning</h2>
            </div>
            <div>
              <img src={sunrise} alt="Logo" />
            </div>
          </header>
          <ul>
            <MedicationBox list={morning} />
          </ul>
        </section>
        <section className="time--container">
          <header className="time--container-header" id="afternoon">
            <div>
              <h2>Afternoon</h2>
            </div>
            <div>
              <img src={sun} alt="Logo" />
            </div>
          </header>
          <ul>
            <MedicationBox list={afternoon} />
          </ul>
        </section>
        <section className="time--container">
          <header className="time--container-header" id="evening">
            <div>
              <h2>Evening</h2>
            </div>
            <div>
              <img src={night} alt="Logo" />
            </div>
          </header>
          <ul>
            <MedicationBox list={evening} />
          </ul>
        </section>
      </div>
    </>
  );
}

export default MedicationList;
