import React, { useState } from "react";
import {
  useDisclosure,
  Select,
  Button,
  Modal,
  FormControl,
  FormLabel,
  Input,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  NumberInputField,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputStepper,
  NumberInput,
  HStack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";

export default function AddMed() {
  // Hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [submitted, setSubmitted] = useState(false);

  // values
  const [values, setValues] = useState({
    name: "",
    dosage_size: 0,
    dosage_unit: "",
    dosage: 0,
    type: "",
    duration: 0,
    duration_unit: "day",
    morning: false,
    afternoon: false,
    evening: false,
  });

  let {
    name,
    dosage_size,
    dosage_unit,
    dosage,
    type,
    duration,
    duration_unit,
    morning,
    afternoon,
    evening,
  } = values;

  // Handlers
  const handleChange = (e) => {
    const { target } = e;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const { name } = target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log(values);
  };

  return (
    <div className="App">
      <Button backgroundColor="salmon" onClick={onOpen}>
        Add
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} zIndices="">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a New Medication</ModalHeader>
          <ModalCloseButton />
          <form onSubmit={handleSubmit}>
            <ModalBody p={10} m={2}>
              <FormControl>
                <FormLabel>Medication Name</FormLabel>
                <Input
                  onChange={handleChange}
                  defaultValue={name}
                  name="name"
                />
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Medication Type</FormLabel>
                <Select
                  name="type"
                  placeholder="Select type"
                  onChange={handleChange}
                >
                  <option value="pill">Pill</option>
                  <option value="caplet">Caplet</option>
                  <option value="tablet">Tablet</option>
                  <option value="shot">Shot</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>How many should you take per day?</FormLabel>
                <NumberInput
                  min={0}
                  onChange={(e) => {
                    setValues({
                      ...values,
                      dosage: e,
                    });
                  }}
                  defaultValue={dosage}
                  name="dosage"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl>
                <FormLabel>Dosage Size</FormLabel>
                <NumberInput
                  min={0}
                  onChange={(e) => {
                    setValues({
                      ...values,
                      dosage_size: e,
                    });
                  }}
                  defaultValue={dosage_size}
                  name="dosage_size"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Dosage Unit</FormLabel>
                <Select
                  name="dosage_unit"
                  placeholder="Select unit"
                  onChange={handleChange}
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
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel>How many days should you take it?</FormLabel>
                <NumberInput
                  min={0}
                  defaultValue={duration}
                  onChange={(e) => {
                    setValues({
                      ...values,
                      duration: e,
                    });
                  }}
                  name="duration"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </FormControl>

              <FormControl>
                <FormLabel>When do you take it?</FormLabel>
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Morning?</FormLabel>
                <Select
                  name="morning"
                  placeholder="Select an option"
                  onChange={handleChange}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Select>
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Afternoon?</FormLabel>
                <Select
                  name="afternoon"
                  placeholder="Select an option"
                  onChange={handleChange}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Select>
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Evening?</FormLabel>
                <Select
                  name="evening"
                  placeholder="Select an option"
                  onChange={handleChange}
                >
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} type="submit">
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </div>
  );
}

//   // Handlers
//   // const onChange = (e) => {
//   //   setValues({
//   //     ...values,
//   //     [e.target.name]: e.target.value,
//   //   });
//   // };
//     className="nav--button input--button"
//     id="modal-button"
//     onClick={openModal}
//   >
//     <FontAwesomeIcon icon={faPen} className="icon pen " />
//     <h3 className="nav--words">Add!</h3>
//   </button>

//   <Modal
//     isOpen={modalIsOpen}
//     onAfterOpen={afterOpenModal}
//     onRequestClose={closeModal}
//     className="modal--wrapper"
//     overlayClassName="modal--overlay"
//     contentLabel="Example Modal"
//   >
//     <header className="modal--header">
//       <h2>Add a Med</h2>
//     </header>
//     <form onSubmit={handleSubmit}>
//       <section>
//         <div className="modal--inline">
//           <div className="modal--inline-item">
//             <label for="">Medication Name</label>
//             <input
//               type="text"
//               name="medication-name"
//               onChange={onChange}
//               value={name}
//               required
//             />
//           </div>
//           <div className="modal--inline-item">
//             <label for="">Medication type</label>
//             <select id="medicationType" name="type" onChange={``} required>
//               <option value="pill">Pill</option>
//               <option value="caplet">Caplet</option>
//               <option value="tablet">Tablet</option>
//               <option value="shot">Shot</option>
//             </select>
//           </div>
//         </div>
//         <div className="modal--inline">
//           <div className="modal--inline-item">
//             <label for="">Times per day?</label>
//             <input
//               type="number"
//               name="dosage"
//               onChange={onChange}
//               value={dosage}
//             />
//           </div>
//           <div className="modal--inline-item">
//             <label for="">Days till next refill?</label>
//             <input
//               type="number"
//               name="dosage"
//               onChange={onChange}
//               value={duration}
//             />
//           </div>
//           <div className="modal--inline-item">
//             <label for="">Dosage</label>
//             <input
//               type="number"
//               name="dosageAmount"
//               onChange={onChange}
//               value={dosage_size}
//               required
//             />
//           </div>
//           <div className="modal--inline-item">
//             <label for="dosageStrength">Dosage Strength</label>
//             <select
//               id="dosageStrength"
//               name="dosageStrength"
//               onChange={onChange}
//               required
//             >
//               <option value="mg">milligram(mg)</option>
//               <option value="g">gram(g)</option>
//               <option value="kg">kilogram(kg)</option>
//               <option value="mcg">microgram(mcg)</option>
//               <option value="L">liter(L)</option>
//               <option value="ml">millilitre(ml)</option>
//               <option value="cc">cubic centimeter(cc)</option>
//               <option value="m">mole(mol)</option>
//               <option value="mmol">millimole(mmol)</option>
//             </select>
//           </div>
//         </div>

//         <section className="modal--inline">
//           <div class="switch modal--inline-item">
//             <label>Morning</label>
//             <input type="checkbox" onChange={onChange}></input>
//           </div>
//           <div class="switch modal--inline-item">
//             <label>Afternoon</label>
//             <input type="checkbox" onChange={onChange}></input>
//           </div>
//           <div class="switch modal--inline-item">
//             <label>Evening</label>
//             <input type="checkbox" onChange={onChange} value={``}></input>
//           </div>
//         </section>
//       </section>

//       <div class="modal--footer">
//         <button type="submit" className="save-button">
//           Save changes
//         </button>
//         <button className="close-button" onClick={closeModal}>
//           close
//         </button>
//       </div>
//     </form>
//   </Modal>
