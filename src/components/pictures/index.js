import React from "react";
import "./style.css";

function Picture(props) {
  // console.log('picture props: ',props);
  return (
    <img style={{width: '150px', height:'150px'}}  src={props.image} alt="Nature Pics" onClick={props.onClick} id={props.id}/>     
    );
}
export default Picture;
