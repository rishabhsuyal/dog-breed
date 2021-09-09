import React,{useEffect, useState} from 'react';
import "./collage.css";

function Collage({Dbreed}) {

    const [pics,setpic]=useState([]);
    useEffect(() => {
        const fetchData=async()=>{
            const res = await fetch(`https://dog.ceo/api/breed/${Dbreed}/images`);
            const resJson=await res.json();
            setpic(resJson.message);
        }
        fetchData();

    }, [Dbreed])

    return (
        <div>
        {
            pics.map((pic)=>
            <img key={pic} className="image" alt="dog" src={pic} width="400" height="400" />
            )
        }
        </div>
    )
}

export default Collage;
