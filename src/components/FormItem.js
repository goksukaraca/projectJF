import React from "react";

const FormItem = ( {selectedList} ) => {
    return(
        selectedList.map(element => { return(
            <li key = {element.value}><a href={`https://form.jotform.com/${element.value}`} target="_blank" >{element.label}</a></li>)
        })
    );
}
export default FormItem;