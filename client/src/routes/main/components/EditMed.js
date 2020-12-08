import React, { useState } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

const EditMed = (props) => {
  // console.log(props.medication);
  const medication = props.medication;
  Modal.setAppElement();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [values, setValues] = useState({
    name: String,
    dosage_size: Number,
    dosage_unit: String,
    dosage: Number,
    type: String,
    taken: Boolean,
    duration: Number,
    duration_unit: String,
    morning: Boolean,
    afternoon: Boolean,
    evening: Boolean,
  });

  const [submitted, setSubmitted] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  // Handlers
  const handleMedicationInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };
  const handleDosageSizeInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      dosage_size: event.target.value,
    }));
  };
  const handleDosageInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      dosage: event.target.value,
    }));
  };
  const handleDosageUnitInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      dosage_unit: event.target.value,
    }));
  };

  // const handleDurationInputChange = (event) => {
  //   event.persist();
  //   setValues((values) => ({
  //     ...values,
  //     duration: event.target.value,
  //   }));
  // };

  const handleMorningCheckChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      morning: event.target.value,
    }));
  };

  const handleAfternonCheckChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      afternoon: event.target.value,
    }));
  };

  const handleEveningCheckChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      evening: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    console.log(values);
  };

  return (
    <>
      <button className="edit-button" id="modal-button" onClick={openModal}>
        <FontAwesomeIcon icon={faEllipsisV} />
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="modal--wrapper"
        overlayClassName="modal--overlay"
        contentLabel="Example Modal"
      >
        <header className="modal--header">
          <h2>Edit your med</h2>
        </header>
        <form onSubmit={handleSubmit}>
          <section>
            <div className="modal--inline">
              <div className="modal--inline-item">
                <label for="">Medication Name</label>
                <input
                  type="text"
                  name="medication-name"
                  placeholder={medication.name}
                  onChange={handleMedicationInputChange}
                  value={values.name}
                />
              </div>
              <div className="modal--inline-item">
                <label for="">Medication type</label>
                <select
                  id="medicationType"
                  name="type"
                  defaultValue={medication.type}
                  onChange={``}
                >
                  <option value="pill">Pill</option>
                  <option value="caplet">Caplet</option>
                  <option value="tablet">Tablet</option>
                  <option value="shot">Shot</option>
                </select>
              </div>
            </div>
            <div className="modal--inline">
              <div className="modal--inline-item">
                <label for="">Times per day?</label>
                <input
                  type="number"
                  name="dosage"
                  placeholder={medication.dosage}
                  onChange={handleDosageInputChange}
                  value={values.dosage}
                />
              </div>
              <div className="modal--inline-item">
                <label for="">Dosage</label>
                <input
                  type="number"
                  name="dosageAmount"
                  onChange={handleDosageSizeInputChange}
                  placeholder={medication.dosage_size}
                  value={values.dosage_size}
                />
              </div>
              <div className="modal--inline-item">
                <label for="dosageStrength">Dosage Strength</label>
                <select
                  id="dosageStrength"
                  name="dosageStrength"
                  onChange={handleDosageUnitInputChange}
                  defaultValue={medication.dosage_unit}
                >
                  <option value="mg">milligram(mg)</option>
                  <option value="g">gram(g)</option>
                  <option value="kg">kilogram(kg)</option>
                  <option value="mcg">microgram(mcg)</option>
                  <option value="L">liter(L)</option>
                  <option value="ml">millilitre(ml)</option>
                  <option value="cc">cubic centimeter(cc)</option>
                  <option value="m">mole(mol)</option>
                  <option value="mmol">millimole(mmol)</option>
                </select>
              </div>
            </div>

            <section className="modal--inline">
              <div class="switch modal--inline-item">
                <label>Morning</label>
                <input
                  type="checkbox"
                  defaultChecked={medication.morning ? true : false}
                  onChange={handleMorningCheckChange}
                ></input>
              </div>
              <div class="switch modal--inline-item">
                <label>Afternoon</label>
                <input
                  type="checkbox"
                  defaultChecked={medication.afternoon ? true : false}
                  onChange={handleAfternonCheckChange}
                ></input>
              </div>
              <div class="switch modal--inline-item">
                <label>Evening</label>
                <input
                  type="checkbox"
                  onChange={handleEveningCheckChange}
                  defaultChecked={medication.evening ? true : false}
                  value={``}
                ></input>
              </div>
            </section>
          </section>

          <div class="modal--footer">
            <button type="submit" className="save-button">
              Save changes
            </button>
            <button className="close-button" onClick={closeModal}>
              close
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default EditMed;
