import React, { useState } from "react";
import FormItem from "./FormItem";
import Popup from "./Popup";
import SelectFrom from "./SelectForm";

const PopupButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    //const data = useState(localStorage.getItem("checklist", JSON.stringify("checklist")));
    const data = JSON.parse(localStorage.getItem("checklist"));
    const [checkname, setCheckName] = useState("");

    const togglePopup = () => {
      setIsOpen(!isOpen);  
    }
    const onChange = checkname => {
        console.log(checkname);
        setCheckName(checkname);
    }
    
    return (
    <div>
        <input
        className="popup-btn"
            type="button"
            value="Create Checklist"
            onClick={togglePopup}
        />
        {isOpen && <Popup
            content={<SelectFrom onChange={onChange}/>}
            handleClose={togglePopup}
        />}
        {
        <form>
            <ul className="formleft" onClick={() => {
                console.log(data);
                data.map(item => {
                    console.log(item);
                    return(
                        <FormItem {...item} value={item.value} label={item.label} />
                    );
                })
            }}>
                {checkname}
            </ul>
        </form>
        } 
    </div>
    );
}
export default PopupButton;