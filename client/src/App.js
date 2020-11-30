import React from "react";
import "./App.css";
import data from "./data.json";
import MedicationList from "./MedicationList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user_data: data,
    };
  }

  render() {
    const user_data = this.state;
    const medication = user_data.user_data.medication;
    return (
      <>
        <header>
          <h2>{Date()}</h2>
        </header>
        <MedicationList medication={medication} />
      </>
    );
  }
}

export default App;
