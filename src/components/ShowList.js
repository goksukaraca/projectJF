import React from "react";

const ShowList = ( {selectedList} ) => {
    return(
        <ul>
            CheckList - 1
            {selectedList.map(element => 
                (<li key={selectedList.value}>
                    <a target="_blank" href={`https://form.jotform.com/${selectedList.value}`}>{selectedList.label}</a>
            </li>))}
        </ul>
    );
}
export default ShowList;