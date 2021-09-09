import React from 'react';
import "./dropDown.css";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

function DropDown(props) {
    // const optionMenu=props.items.map((item)=>
    // <option key={item}>{item}</option>)

    function handleChange(event){
        props.handleActive(event.value);
    }

    return (
        <div >
        <Dropdown className="dropdown" options={props.items} onChange={handleChange}  placeholder="Select an option" />
            {/* <select className="dropdown" onChange={handleChange} required>
                {optionMenu}
            </select> */}
        </div>
    )
}

export default DropDown;
