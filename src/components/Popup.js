import React from "react";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <span className="save-btn" onClick={props.handleSave}>Save</span>
      </div>
    </div>
  );
};
 
export default Popup;