import React, { useEffect, useState } from "react";
//import FormItem from "./FormItem";
import Select from "react-select";

const apiKey = `3d3e67d7703a9d49cccfc8e5686daa94`;
const SELECT_VALUE_KEY = "MySelectValue";

const SelectFrom = () => {
    const [data, setData] = useState([]);    
    
    const [selectedList, setSelectedList] = useState([]);
    
    useEffect(() => {
        fetch(`https://api.jotform.com/user/forms?apikey=${apiKey}&orderby=id`)
        .then(response => response.json()).then(veri => {
        setData(veri.content);
        });
    }, []); 
    
    let option = data.map(item => {
        return{
            value: item.id, label: item.title
        }  
    })

    const handleChange = e => {
        console.log(e); 
        localStorage.setItem(SELECT_VALUE_KEY, JSON.stringify(e));
        setSelectedList(e);
    }

    return(
        <div>
            <Select isMulti="true" name="list-box" value={selectedList} onChange={handleChange} 
                options={option}/>
        </div>
            
    );
}
export default SelectFrom;
