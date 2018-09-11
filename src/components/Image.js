import React from "react";

const Image = props => (

  <div className="card" onClick={props.imageClick}>

    <div className="img-container">

      <img alt={props.name.replace(".jpg", "")} src={require("../../Images/" + props.name)} width="200" height="170" />

    </div>

  </div>

);



export default Image;