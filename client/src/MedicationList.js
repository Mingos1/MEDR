import React from "react";

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
    <>
      <section>
        <header>
          <h2>Morning</h2>
        </header>
        <ul>
          {morning.map((item) => {
            return (
              <li>
                <h3>{item.name}</h3>
                <p>
                  <span>{item.dosage}</span>
                  <span>{item.type}</span>
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
              <li>
                <h3>{item.name}</h3>
                <p>
                  <span>{item.dosage}</span>
                  <span>{item.type}</span>
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
              <li>
                <h3>{item.name}</h3>
                <p>
                  <span>{item.dosage}</span>
                  <span>{item.type}</span>
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}

export default MedicationList;
