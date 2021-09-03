import React from "react";

const FormItem = ({value, label}) => {
    console.log("hello formItem");    
    return(
        <li key={value}>
            <a target="_blank" rel="noreferrer" href={`https://form.jotform.com/${value}`}>
        </a>{label}</li>
    );
}
export default FormItem;