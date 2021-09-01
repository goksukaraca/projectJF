import React, { useState } from "react";
import Popup from "./Popup";
import SavedChecklist from "./SavedCheklist";
import SelectFrom from "./SelectForm";

const PopupButton = () => {
    const [isOpen, setIsOpen] = useState(false);
 
    const togglePopup = () => {
      setIsOpen(!isOpen);  
    }
   
    return (
    <div>
        <input
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
        />
        {isOpen && <Popup
            content={<SelectFrom />}
            handleSave={<SavedChecklist />}
            handleClose={togglePopup}
        />}
    </div>);
}
export default PopupButton;