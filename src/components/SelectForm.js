import React, { useEffect, useState } from "react";
import Select from "react-select";

const apiKey = `3d3e67d7703a9d49cccfc8e5686daa94`;

const SelectFrom = () => {

    const [data, setData] = useState([]);    
    const [selectedList, setSelectedList] = useState([]);
    const [name, setName] = useState('');
    
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
        localStorage.setItem(`${name}`, JSON.stringify(e));
        setSelectedList(e);
    }
    
    const handleSave = (event) => {
        event.preventDefault();
        console.log(selectedList); 
        console.log(JSON.stringify(localStorage.key(`${name}`)));
        let item = localStorage.getItem(`${name}`) !== null ? JSON.parse(localStorage.getItem(`${name}`)) : [];//nasıl localden value çekilir.
        console.log(item);
        item.map(element => console.log(element.label));
        
    }
        return(
        <div>
            <input placeholder="Name your Checklist" className="input-box" onChange={(e) => setName(e.target.value)}></input>
            <p></p>
            <Select isMulti="true" name="list-box" value={selectedList} onChange={handleChange} 
                options={option}/>
            <button className="save-btn" onClick={handleSave}>Save</button>
        </div>
            
    );
}
export default SelectFrom;
