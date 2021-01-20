export default function MedicationList(props) {
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
}
