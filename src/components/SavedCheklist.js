import React from "react";
import ShowList from "./ShowList";

const SavedChecklist = ({selectedList}) => {

    console.log("burası savedCheckList");
    
    return(
        <li onClick={() => <ShowList selectedList={selectedList}/>}>
            Checklist - 1
        </li>
    );
    
}

export default SavedChecklist;