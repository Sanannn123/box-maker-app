import React, { useState } from 'react';
import Box from "./components/Box";
import BoxForm from "./components/BoxForm"
import './App.css';

const App =()=> {
 
  const [boxes,setBoxes] = useState([]);
  return (
    <div className="App">
       <BoxForm setBoxes={setBoxes} boxes={boxes} />
      <Box boxes={boxes}/>
    </div>
  );
}

export default App;