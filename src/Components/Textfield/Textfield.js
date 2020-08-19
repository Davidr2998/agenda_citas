import React from "react";
import "./Textfield.css";

const Textfield = ({ titulo }) => {
  return (
    <div className="o-input-container">
      <p>{titulo}</p>
      <input type="text" id="text_input" />
    </div>
  );
};

export default Textfield;
