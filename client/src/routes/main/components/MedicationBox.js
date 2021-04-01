import React from "react";
import MedicationBoxMenu from "./MedicationBoxMenu"
import EditMed from "./EditMed";

export default function MedicationBox (props) {
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
            <MedicationBoxMenu />
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
