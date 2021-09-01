import React, { useEffect } from "react";
import FormItem from "./FormItem";

const CheckList = ( {name}, {selectedList}, {setSelectedList} ) => {

    useEffect( (e) => {
        e.preventDefault();
        const lastSelected = JSON.parse(localStorage.getItem('name'));
        setSelectedList(lastSelected);
        console.log(selectedList); 
    },[]);

    return(
        <li onClick={() => <FormItem selectedList={selectedList}/>}>
            {name}
        </li>
    )
}
export default CheckList;