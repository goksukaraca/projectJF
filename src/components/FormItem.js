import React from "react";

const FormItem = ({id, title}) => {
    return(
        <option key={id} value={id}>{title}</option>
    );
}
export default FormItem;