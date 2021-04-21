import React from "react";
import { images } from "../../../assets/images.js"


function Counter(props) {

  return (
    <div className="counter-block-wrapper">
    <div className="counter-block">
      <h5>{props.title}</h5>
      <span className="value">{props.value}</span>
    </div>
    </div>
  );
}

export default Counter;
