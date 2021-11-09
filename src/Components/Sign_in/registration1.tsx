import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import "./signin.css";
import Steps from '../step';
import { Appcontext } from "../../config";

const Registration1 = (props) => {
  const { state, setState }: any = useContext(Appcontext);
  const { email, name, errorMessage, isloading } = state;
  const onchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
      errorMessage:""
    });
  };
  const save_step1 =(e)=>{
    e.preventDefault()
    if(!email||!name){
     return setState({
        ...state,
        errorMessage:"all fields are required"
      })
    }
    setState({
      ...state,
      step1:false,
      step2:true
    })
  }
  return (
    <div>
      <div className="container">
      <Steps step={1}/>
        <div className="card">
          <div className="card-image">
            <h2 className="card-heading">
              Get started
              <small>Let us create your account</small>
            </h2>
          </div>
          <form className="card-form" onSubmit={save_step1}>
            <div className="text-center text-danger">{errorMessage}</div>
            <div className="input">
              <input
                type="text"
                className="input-field"
                value={name}
                onChange={onchange}
                name={"name"}
                required
              />
              <label className="input-label">Full name</label>
            </div>
            <div className="input">
              <input
                type="text"
                className="input-field"
                value={email}
                name={"email"}
                onChange={onchange}
                required
              />
              <label className="input-label">Email</label>
            </div>
            <div className="action">
              <button className="action-button" onClick={save_step1}>Get started</button>
            </div>
          </form>
          <div className="card-info">
            <p>
              By signing up you are agreeing to our{" "}
              <a href="#">Terms and Conditions</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration1;
