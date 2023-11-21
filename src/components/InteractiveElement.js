import React, { useState } from "react";

const InteractiveElement = ({ type, label, onSelect, onUnselect }) => {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    selected ? onUnselect({ type, label }) : onSelect({ type, label });
  };

  return (
    <div
      className={`interactive-element ${selected ? "selected" : ""}`}
      onClick={handleClick}
    >
      {label}
    </div>
  );
};

export default InteractiveElement;
