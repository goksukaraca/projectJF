import React, { useEffect, useState } from "react";
//import FormItem from "./FormItem";
import Select from "react-select";

const apiKey = `3d3e67d7703a9d49cccfc8e5686daa94`;

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
        console.log(e); //tıklandığında gelen bilgiler.
        const options = data;
        console.log(options); //all form info.
        //options = Array.apply(null, options)
        //const selectedValues = options.filter(x => x.selected).map(x => x.value);
        let selectedList = e;
        setSelectedList(selectedList);
        console.log(selectedList);
    }
    
    const handleSave = event => {
        event.preventDefault();
        
    }

    return(
        <div>
            <Select isMulti="true" name="list-box" onChange={handleChange} 
                options={option}/>
        <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
            
    );
}
export default SelectFrom;
