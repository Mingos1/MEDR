import React from "react";
import "./MedicationList.css";
import sun from "./sun.png";
import sunrise from "./sunrise.png";
import night from "./night.png";

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
          <img src={sunrise} alt="Logo" />
        </header>
        <ul>
          {morning.map((item) => {
            return (
              <li key={item.id}>
                <h3>{`${item.name} ${item.dosage_size} ${item.dosage_unit}`}</h3>
                <article>
                  <span>{`${item.dosage} ${item.type}`}</span>
                  <span>{`${
                    item.taken === true ? "Taken" : "Not taken"
                  }`}</span>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <header>
          <h2>Afternoon</h2>
          <img src={sun} alt="Logo" />
        </header>
        <ul>
          {afternoon.map((item) => {
            return (
              <li key={item.id}>
                <h3>{`${item.name} ${item.dosage_size} ${item.dosage_unit}`}</h3>
                <article>
                  <span>{`${item.dosage} ${item.type}`}</span>
                  <span>{`${
                    item.taken === true ? "Taken" : "Not taken"
                  }`}</span>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
      <section>
        <header>
          <h2>Evening</h2>
          <img src={night} alt="Logo" />
        </header>
        <ul>
          {evening.map((item) => {
            return (
              <li key={item.id}>
                <h3>{`${item.name} ${item.dosage_size} ${item.dosage_unit}`}</h3>
                <article>
                  <span>{`${item.dosage} ${item.type}`}</span>
                  <span>{`${
                    item.taken === true ? "Taken" : "Not taken"
                  }`}</span>
                </article>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default MedicationList;
