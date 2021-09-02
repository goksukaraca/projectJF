import React, { useState } from "react";
import Popup from "./Popup";
import SelectFrom from "./SelectForm";

const PopupButton = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);  
    }
   
    return (
    <div >
        <input
        className="popup-btn"
            type="button"
            value="Create Checklist"
            onClick={togglePopup}
        />
        {isOpen && <Popup
            content={<SelectFrom />}
            handleClose={togglePopup}
        />}
    </div>);
}
export default PopupButton;