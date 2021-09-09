import React, { useEffect, useState } from 'react';
import DropDown from "../dropdown/dropDown";
import "./header.css"

function Header(props) {

    const [breed, setbreed] = useState("");
    
    const [dog, setdog] = useState({});
    const [options, setoptions] = useState([]);
    const [suboptions, setsuboptions] = useState([]);
    
    useEffect(()=>{
        const fectData=async()=>{
            const response=await fetch('https://dog.ceo/api/breeds/list/all');
            const resJson=await response.json();
            setdog(resJson.message);
            var keys = Object.keys(resJson.message);
            setoptions(keys);
        }
        fectData();
    },[])

    function handleChange(breed){
        setbreed(breed)
        setsuboptions(dog[breed]);
    }
    function handleChanges(subbreed){ 
        console.log(subbreed);
    }

    function handleDog(){
        props.finalDog(breed);
        setbreed("");
    }


    return (
        <div className="container">
            <DropDown className="dropdown" items={options} handleActive={handleChange} />
            {
             (suboptions.length===0)?null:<DropDown items={suboptions} handleActive={handleChanges} />
            }
            <button className="button" onClick={handleDog}>GET IMAGE</button>
            
        </div>
    )
}

export default Header;
