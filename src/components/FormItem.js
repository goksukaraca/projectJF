import React from "react";

const FormItem = ( {value, label} ) => {
    console.log("formItem");
    
    return(
        <li key={value}><a href={`https://form.jotform.com/${value}`}></a>{label}</li>
    );
}
export default FormItem;