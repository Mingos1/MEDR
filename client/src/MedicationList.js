import React from "react";
import "./MedicationList.css";

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
  console.log(morning);
  console.log(afternoon);
  console.log(evening);

  return (
    <div className="time--container">
      <section>
        <header>
          <h2>Morning</h2>
        </header>
        <ul>
          {morning.map((item) => {
            return (
              <li key={item.id}>
                <h3>{`${item.name} ${item.dosage_size} ${item.dosage_unit}`}</h3>
                <p>
                  <span>{`${item.dosage} ${item.type}`}</span>
                </p>
                <p>
                  <span>{`${
                    item.taken === true ? "Taken" : "Not taken"
                  }`}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <header>
          <h2>Afternoon</h2>
        </header>
        <ul>
          {afternoon.map((item) => {
            return (
              <li key={item.id}>
                <h3>{`${item.name} ${item.dosage_size} ${item.dosage_unit}`}</h3>
                <p>
                  <span>{`${item.dosage} ${item.type}`}</span>
                </p>
                <p>
                  <span>{`${
                    item.taken === true ? "Taken" : "Not taken"
                  }`}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <header>
          <h2>Evening</h2>
        </header>
        <ul>
          {evening.map((item) => {
            return (
              <li key={item.id}>
                <h3>{`${item.name} ${item.dosage_size} ${item.dosage_unit}`}</h3>
                <p>
                  <span>{`${item.dosage} ${item.type}`}</span>
                </p>
                <p>
                  <span>{`${
                    item.taken === true ? "Taken" : "Not taken"
                  }`}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default MedicationList;
