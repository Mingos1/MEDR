import React from "react";
import "./App.css";
// import data from "./data.json";
import MedicationList from "./MedicationList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user_data: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    fetch("/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.setState({ user_data: data, isLoading: false });
      })
      .catch((err) => console.log(err));
  }

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
          <header>
            <h2>{Date()}</h2>
          </header>
          <MedicationList medication={medication} />
        </>
      );
      // Render real UI ...
    }
  }
}

export default App;

//
