import React, { useEffect, useState } from "react";
import Select from "react-select";

const apiKey = `3d3e67d7703a9d49cccfc8e5686daa94`;

const SelectFrom = ({onChange}) => {

    const [data, setData] = useState([]);    
    const [selectedList, setSelectedList] = useState([]);
    const [checkname, setCheckName] = useState('');

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
        //[...localStorage.getItem("checklist") || [] ]
        console.log(JSON.stringify(e)); 
        localStorage.setItem("checklist", JSON.stringify(e));
        setSelectedList(e);
        console.log(localStorage.getItem("checklist"))
    }
    
    const handleSave = event => {
        event.preventDefault();
        console.log(selectedList); 
        let item = JSON.parse(localStorage.getItem("checklist")) ;//nasıl localden value çekilir.
        console.log(item); 
        onChange(checkname);       
    }
    return(
        <div>
            <input placeholder="Name your Checklist" className="input-box" onChange={(e) => onChange(setCheckName(e.target.value))}></input>
            <p></p>
            <Select isMulti="true" name="list-box" value={selectedList} onChange={handleChange} 
                options={option}/>
            <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
            
    );
}
export default SelectFrom;
