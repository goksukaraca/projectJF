import React from "react";
import SavedChecklist from "./SavedCheklist";
 
const Popup = props => {
  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>x</span>
        {props.content}
        <span className="save-btn" onClick={() => <SavedChecklist />}>Save</span>
      </div>
    </div>
  );
};
 
export default Popup;