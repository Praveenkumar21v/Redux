import React from "react";

const useRandomColor = () => {
  const [color, setColor] = React.useState("000");
  let randomColor = Math.random().toString(16).slice(-6);

  const handleColorChange = () => {
    setColor(randomColor);
  };
  return { color, handleColorChange };
};

export default useRandomColor;
