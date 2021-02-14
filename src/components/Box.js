import React from "react";

function Box({ boxes }) {
  return (
    <div>
      {boxes.map((box) => (
        <div
          style={{
            width: box.width,
            height: box.height,
            backgroundColor: box.color,
          }}
        ></div>
      ))}
    </div>
  );
}

export default Box