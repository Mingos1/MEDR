import React, { useState } from "react";
import "./MedicationList.css";
import sun from "./images/sun.png";
import sunrise from "./images/sunrise.png";
import night from "./images/night.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";

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

const customStyles = {
  content: {
    top: "50%",
    bottom: "50%",
    left: "50%",
    right: "50%",
    height: "400px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(255,255,255, 0.3)",
  },
  overlay: {},
};

const MedicationBox = (props) => {
  Modal.setAppElement();
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [values, setValues] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [setSubmitted] = useState(false);

  // Handlers
  const handlePaswordInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(values);
  };

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "rgba(255,255,255, 0.3";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
            <h3>{`${item.name} ${item.dosage_size} ${item.dosage_unit}`}</h3>
          </div>
          <div classname="li--item">
            <button
              className="edit-button"
              id="modal-button"
              onClick={openModal}
            >
              <FontAwesomeIcon icon={faEllipsisV} />
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>

              <header>
                <button onClick={closeModal}>close</button>
              </header>
              <form onSubmit={handleSubmit}>
                <section>
                  <div>
                    <label for="">Email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      onChange={handleEmailInputChange}
                      value={values.email}
                    />
                  </div>
                  <div>
                    <label for="">Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={handlePaswordInputChange}
                      placeholder={item.name}
                      value={values.password}
                    />
                  </div>
                  <div>
                    <button type="submit">Login</button>
                  </div>
                </section>
              </form>
            </Modal>
          </div>
        </div>
        <article className="li--container">
          <div className="li--item">
            <h5 className="labels">Amount</h5>
            <h4>{`${item.dosage} ${
              item.dosage > 1 ? item.type + "s" : item.type
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
          <div classname="li--item">
            <button
              className="taken-button"
              id={`${item.taken === true ? "taken" : "not-taken"}`}
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

  console.log(morning);
  console.log(afternoon);
  console.log(evening);

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
