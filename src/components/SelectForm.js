import React, { useState } from "react";
import FormItem from "./FormItem";
import Select from 'react-select';

const apiKey = `3d3e67d7703a9d49cccfc8e5686daa94`;

const SelectFrom = () => {
    const [data, setData] = useState([]);

    fetch(`https://api.jotform.com/user/forms?apikey=${apiKey}&orderby=id`)
    .then(response => response.json()).then(veri => {
    setData(veri.content);
    console.log(veri.content)
    });
    
    const [selectedList, setSelectedList] = useState([]);
 
    const handleChange = e => {
        let { options } = e.target;
        options = Array.apply(null, options)
        const selectedValues = options.filter(x => x.selected).map(x => x.value);
        setSelectedList(selectedValues);
        console.log("selectedvalues:"+ selectedValues);
    }
 
    return(
        <div>
            <Select isMulti name="list-box" onChange={handleChange} 
                options=
                    {data.map(item => {return(
                        <FormItem {...item} id={item.id} title={item.title}/>)
                    })}
                />
            <b>Output:</b>
            <pre>{JSON.stringify(selectedList)}</pre>  
        </div>
            
    );
}
export default SelectFrom;