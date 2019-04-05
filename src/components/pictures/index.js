import React from "react";
import "./style.css";

function Picture(props) {
  return (
    <img style={{width: '150px', height:'150px'}}  src={props.image} alt="Nature Pics"  onClick={props.click} id={props.id}/>     
  );
}

export default Picture;
