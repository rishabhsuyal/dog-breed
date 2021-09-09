import React, {useState } from 'react';
import Header from "./component/Header/header";
import Collage from "./component/collage/collage";

function App() {
   const [breed,setbreed]=useState("");
   function handleImage(final){
    console.log(final); 
    setbreed(final);
    }
  return (
    <div>
      <Header finalDog={handleImage} />
      {
      (breed!=="")?
      <Collage Dbreed={breed}/>:null
      }
    </div>
  )
}

export default App;
