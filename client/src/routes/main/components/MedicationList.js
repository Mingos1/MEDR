import React from "react";
import "./MedicationList.css";
import sun from "./images/sun.png";
import sunrise from "./images/sunrise.png";
import night from "./images/night.png";
import EditMed from "./EditMed";

// TODO: Add "Add" and "Edit" functions to the modals
// TODO: minor. Fix formatting on dashboard page components
// TODO: Implement refresh token

function SectionTitle() {
  return (
    <>
      <header className="title">
        <h2>
          {` 
          Glad you're here! Here's your schedule for ${new Date().toLocaleDateString()}.`}
        </h2>
      </header>
    </>
  );
}

const MedicationBox = (props) => {
  return props.list.map((item) => {
    return (
      <li
        key={item.id}
        className="li--wrapper"
        id={`${item.taken === true ? "box--taken" : "box--not-taken"}`}
      >
        <div className="li--container">
          <div className="li--item">
            <h5 className="labels">Medication Name</h5>
            <h3>{`${item.medication_name} ${item.dosage_size} ${item.dosage_unit}`}</h3>
          </div>
          <div className="li--item">
            <EditMed medication={item} />
          </div>
        </div>
        <article className="li--container">
          <div className="li--item">
            <h5 className="labels">Amount</h5>
            <h4>{`${item.dosage} ${
              item.dosage > 1
                ? item.medication_type + "s"
                : item.medication_type
            }`}</h4>
          </div>
          <div className="li--item">
            <h5 className="labels">Course Duration</h5>
            <h4>{`${item.duration} ${
              item.duration > 1 || item.duration === 0
                ? item.duration_unit + "s"
                : item.duration_unit
            } left ${item.duration === 0 ? "Refill needed!" : ""}`}</h4>
          </div>
          <div className="li--item">
            <button
              className="taken-button"
              id={`${item.taken === true ? "taken" : "not-taken"}`}
              // onClick={`Server update for toggle taken`}
            >{`${item.taken === true ? "Taken" : "Not taken"}`}</button>
          </div>
        </article>
      </li>
    );
  });
};

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

  // console.log(morning);
  // console.log(afternoon);
  // console.log(evening);

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
