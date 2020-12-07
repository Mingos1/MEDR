import React, { useState } from "react";
import data from "./data.json";
import MedicationList from "./components/MedicationList";
import Navigation from "./components/Navigation";

// class Dashboard extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       user_data: data,
//     };
//   }

//   // componentDidMount() {
//   //   this.setState({ user_data: data, isLoading: false });
//   // }

//   // componentDidMount() {
//   //   fetch("/users")
//   //     .then((res) => res.json())
//   //     .then((data) => {
//   //       console.log(data);
//   //       this.setState({ user_data: data, isLoading: false });
//   //     })
//   //     .catch((err) => console.log(err));
//   // }

//   render() {
//     const { user_data } = this.state;
//     //console.log(user_data);
//     const medication = user_data.medication;
//     console.log(medication);
//     // if (isLoading === true) {
//     //   return (
//     //     <>
//     //       <h2>loading...</h2>
//     //     </>
//     //   );
//     //   // Render loading state ...
//     // } else {
//     return (
//       <>
//         <Navigation user_data={user_data} />
//         <MedicationList medication={medication} />
//       </>
//     );
//     // }
//   }
// }

const Dashboard = () => {
  const [values, setValues] = useState({ data });

  const userData = values.data;
  const medication = userData.medication;
  console.log(medication);

  return (
    <>
      <Navigation user_data={userData} />
      <MedicationList medication={medication} />
    </>
  );
};

export default Dashboard;
