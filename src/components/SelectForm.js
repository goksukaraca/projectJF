import React, {  useEffect, useState } from "react";
import Select from "react-select";
import CheckList from "./CheckList";

const apiKey = `3d3e67d7703a9d49cccfc8e5686daa94`;

const SelectFrom = () => {

    const [data, setData] = useState([]);    
    const [name, setName] = useState('');
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
        localStorage.setItem(name, JSON.stringify(e));
        setSelectedList(e);
    }
 
    return(
        <div>
            <input placeholder="Name your Checklist..." className="input-box" onChange={(e) => setName(e.target.value)}></input>
            <p></p>
            <Select isMulti="true" name="list-box" value={selectedList} onChange={handleChange} 
                options={option}/>
            <button className="save-btn" onClick={() => <CheckList name={name} selectedList={selectedList} setSelectedList={setSelectedList}/>}>Save</button>
            <p>Your Checklist name: {name}</p>
        </div>
            
    );
}
export default SelectFrom;
