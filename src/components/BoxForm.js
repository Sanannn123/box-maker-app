import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

    function BoxForm({ boxes, setBoxes }) {
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [color, setColor] = useState("");

  const HeightHandler = (e) => {
    setHeight(e.target.value);
  };

  const WidthHandler = (e) => {
    setWidth(e.target.value);
  };
  const BgcolorHandler = (e) => {
    setColor(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newBox = {
      height: height,
      width: width,
      color: color,
      id: uuidv4(),
    };


    setBoxes([...boxes, newBox]);
    setHeight("");
    setWidth("");
    setColor("");
  };
 
  return (
    <div className="forms">
      <form onSubmit={handleSubmit}>
        <label>Height</label>
        <input value={height} type="text" onChange={HeightHandler}></input>
        <label>Width</label>
        <input value={width} type="text" onChange={WidthHandler}></input>
        <label>Backgorund Color </label>
        <input value={color} type="text" onChange={BgcolorHandler}></input>
        <button onSubmitDown={handleSubmit}>Add</button>
      </form>
    </div>
  );
}

export default BoxForm
