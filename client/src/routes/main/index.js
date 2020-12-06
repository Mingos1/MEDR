import React from "react";
import data from "./data.json";
import MedicationList from "./components/MedicationList";
import Navigation from "./components/Navigation";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      user_data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ user_data: data, isLoading: false });
  }

  // componentDidMount() {
  //   fetch("/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       this.setState({ user_data: data, isLoading: false });
  //     })
  //     .catch((err) => console.log(err));
  // }

  render() {
    const { user_data, isLoading } = this.state;
    //console.log(user_data);
    const medication = user_data.medication;
    console.log(medication);
    if (isLoading === true) {
      return (
        <>
          <h2>loading...</h2>
        </>
      );
      // Render loading state ...
    } else {
      return (
        <>
          <Navigation user_data={user_data} />
          <MedicationList medication={medication} />
        </>
      );
      // Render real UI ...
    }
  }
}

export default Dashboard;
