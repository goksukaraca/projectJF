import React from "react";

const FormItem = ( {value, label} ) => {

    return(<li key = {value}><a href={`https://form.jotform.com/${value}`} target="_blank" >{label}</a></li>)
    
}
export default FormItem;