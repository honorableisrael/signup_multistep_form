import axios from "axios";
import React from "react";
import "./signin.css";

const Success = (props) => {
  return (
    <div className="container">
      <div className="card">
        <div className="card1">
          <div className="card2">
            <i className="checkmark">✓</i>
          </div>
          <h1>Success</h1>
          <p>
            Congratulations
            <br /> you have successfully registered!
          </p>
        </div>
      </div>
    </div>
  );
};
export default Success;
