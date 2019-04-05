import React from "react";
import "./style.css";


function Header(props) {
  return(
    <div className="container col-md-12">
      <div className="jumbotron">
          <h1>{props.children}</h1> 
      </div>

    </div>
  )

  };
  

export default Header;
