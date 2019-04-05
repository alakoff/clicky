import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper col-md-10"> {props.children}</div>;
}

export default Wrapper;
