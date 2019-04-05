import React from "react";
import "./style.css";


function Footer(props) {
  console.log(props);
  return(
    <div>
          <h1>Game Score: {props.children[0]}    Top Score: {props.children[1]}</h1> 
    </div>
  )

  };
  

export default Footer;