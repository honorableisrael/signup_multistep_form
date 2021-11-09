import axios from "axios";
import React from "react";


const Steps = (props) => {
  return (
    <div>
      <div className="row jcenter">
        <div className="col-md-4">
          <svg
            version="1.1"
            id="svg_form_time"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 824 24"
          >
            <rect
              x="12"
              y="9"
              width="200"
              height="6"
              fill="rgb(230, 230, 230)"
            ></rect>
            <circle
              cx="12"
              cy="12"
              r="12"
              width="12"
              height="6"
              fill={props.step==1?"#735400":"rgb(230, 230, 230)"}
            ></circle>
            <rect
              x="212"
              y="9"
              width="200"
              height="6"
              fill="rgb(230, 230, 230)"
            ></rect>
            <circle
              cx="212"
              cy="12"
              r="12"
              width="212"
              height="6"
              fill={props.step==2?"#735400":"rgb(230, 230, 230)"}
            ></circle>
            <circle
              cx="412"
              cy="12"
              r="12"
              width="412"
              height="6"
              fill={props.step==3?"#735400":"rgb(230, 230, 230)"}
            ></circle>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Steps;
