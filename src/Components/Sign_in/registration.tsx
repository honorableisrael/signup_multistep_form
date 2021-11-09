import axios from "axios";
import React, { useState, useEffect } from "react";
import Registration1 from "./registration1";
import Registration2 from "./registration2";
import "./signin.css";
import { Appcontext } from "../../config";
import Success from "./success";

const Registration = (props) => {
  const [state, setState] = useState({
    password: "",
    confirm_password: "",
    name: "",
    email: "",
    isloading: false,
    step1: true,
    step2: false,
    step3: false,
    errorMessage: "",
  });
  const { step1, step2,step3 } = state;
  return (
    <div>
      <Appcontext.Provider
        value={{
          state,
          setState,
        }}
      >
        {step1 && <Registration1 />}
        {step2 && <Registration2 />}
        {step3 && <Success />}
      </Appcontext.Provider>
    </div>
  );
};
export default Registration;