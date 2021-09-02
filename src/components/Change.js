import React from "react";
import FormItem from "./FormItem";
const Change = ({data}) => {
    console.log("change")
    console.log(data);
    return(
        <form className="right-list">
            <ul>
                {
                    data.map(item => {
                        return(<FormItem {...item} value={item.value} label={item.label}/>)
                    })
                }
            </ul>
        </form>
    );
}
export default Change