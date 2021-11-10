import axios from "axios";
import React, { useContext } from "react";
import { Col, Row, Container, Alert, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import "./signin.css";
import Steps from "../step";
import { Appcontext, root } from "../../config";

const Registration2 = (props) => {
  const { state, setState }: any = useContext(Appcontext);
  const { password, confirm_password, email,name,isloading,errorMessage } = state;
  const onchange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const save_step2 =(e)=>{
    e.preventDefault()
    if(!password||!confirm_password){
      return setState({
         ...state,
         errorMessage:"all fields are required"
       })
     }
     if(password!==confirm_password){
      return setState({
        ...state,
        errorMessage:"confirm password must be equal to password"
      }) 
     }
     submitform()
  }
  const submitform = () => {
    setState({
      ...state,
      isloading:true,
    })
    const data = {
      email,
      name,
      password,
    };
    axios.post(`${root}users/user`)
    .then((res)=>{
      setState({
        ...state,
        step1: false,
        step2: true,
      });
    })
    .catch((err)=>{
      setState({
        ...state,
        step1: false,
        step2: true,
        errorMessage:"Failed to register"
      })
    })
  };
  return (
    <div>
      <div className="container">
        <Steps step={2} />
        <div className="card">
          <div className="card-image">
            <h2 className="card-heading">
              Step 2<small>Create password for your new account</small>
            </h2>
          </div>
          <form className="card-form" onSubmit={save_step2}>
          <div className="text-center text-danger">{errorMessage}</div>
            <div className="input">
              <input
                type="password"
                className="input-field"
                value={password}
                name="password"
                onChange={onchange}
                required
              />
              <label className="input-label">Password</label>
            </div>
            <div className="input">
              <input
                type="password"
                value={confirm_password}
                name="confirm_password"
                onChange={onchange}
                className="input-field"
                required
              />
              <label className="input-label">Confirm Password</label>
            </div>
            <div className="action">
              <button className="action-button" onClick={save_step2}>{isloading?"Submitting":"Submit"}</button>
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
export default Registration2;