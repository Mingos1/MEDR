import React from "react";
import "./Navigation.css";
import AddMed from "./AddMed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPen } from "@fortawesome/free-solid-svg-icons";

function Navigation(props) {
  const user_name = props.user_data;
  return (
    <nav className="nav--wrapper">
      <section className="nav--container">
        <h2 className="logo">medr.</h2>
      </section>
      <section className="nav--container">
        <div className="nav--item nav--item-input">
          <AddMed />
          <button className="nav--button input--button">
            <FontAwesomeIcon icon={faPen} className="icon pen" />
            <h3 className="nav--words">Delete!</h3>
          </button>
        </div>
        <div className="nav--item nav--item-user">
          <button className="nav--button-user">
            <FontAwesomeIcon icon={faUser} className="icon icon--user" />
          </button>
          <h3 className="nav--words nav--words-username">
            {user_name.username}
          </h3>
          <button className="nav--button input--button">
            <h3 className="nav--words">Logout!</h3>
          </button>
        </div>
      </section>
    </nav>
  );
}

export default Navigation;
