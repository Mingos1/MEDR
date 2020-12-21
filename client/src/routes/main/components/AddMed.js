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
} from "@chakra-ui/react";

export default function AddMed(props) {
  // ! Add "add medication success/failure" feature
  // props
  let user_id = props.user_id;
  // Hooks
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [submitted, setSubmitted] = useState(false);

  // values
  const [values, setValues] = useState({
    med_id: Date.now(),
    name: "",
    dosage_size: 0,
    dosage_unit: "",
    dosage: 0,
    medication_type: "",
    duration: 0,
    taken: false,
    duration_unit: "day",
    morning: false,
    afternoon: false,
    evening: false,
  });

  let {
    med_id,
    name,
    taken,
    dosage_size,
    dosage_unit,
    dosage,
    medication_type,
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);

    console.log(values);

    const body = {
      med_id,
      user_id,
      name,
      taken,
      dosage_size,
      dosage_unit,
      dosage,
      medication_type,
      duration,
      duration_unit,
      morning,
      afternoon,
      evening,
    };

    try {
      const response = await fetch(
        "http://localhost:5000/dashboard/medication",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(body),
        }
      );

      const parseRes = await response.json();

      console.log(parseRes);
      console.log(body);

      // if (parseRes.token !== undefined) {
      //   localStorage.setItem("token", parseRes.token);
      //   setAuth(true);
      // } else {
      //   setAuth(false);
      // }

      //setAuth(true);
    } catch (err) {
      console.error(err.message);
    }
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
                  name="medication_type"
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
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Select>
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Afternoon?</FormLabel>
                <Select
                  name="afternoon"
                  placeholder="Select an option"
                  onChange={handleChange}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
                </Select>
              </FormControl>

              <FormControl mb={3}>
                <FormLabel>Evening?</FormLabel>
                <Select
                  name="evening"
                  placeholder="Select an option"
                  onChange={handleChange}
                >
                  <option value={true}>Yes</option>
                  <option value={false}>No</option>
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
