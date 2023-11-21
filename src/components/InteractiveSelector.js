import React, { useState } from "react";
import InteractiveElement from "./InteractiveElement";
import Dashboard from "./Dashboard";

const InteractionSelector = () => {
  const [selectedElements, setSelectedElements] = useState([]);
  const [selectionMode, setSelectionMode] = useState(false);

  const handleSelect = (element) => {
    setSelectedElements([...selectedElements, element]);

    console.log(`Event sent to GTM for ${element.type}: ${element.label}`);
  };

  const handleUnselect = (element) => {
    const updatedElements = selectedElements.filter(
      (el) => el.type !== element.type || el.label !== element.label
    );
    setSelectedElements(updatedElements);
  };

  const handleSelectionMode = () => {
    setSelectionMode(!selectionMode);
  };

  return (
    <div>
      <div className="mb-3">
        <button className="btn btn-primary mr-2" onClick={handleSelectionMode}>
          {selectionMode ? "Exit Selection Mode" : "Enter Selection Mode"}
        </button>
      </div>

      <InteractiveElement
        type="button"
        label="Subscribe"
        onSelect={handleSelect}
        onUnselect={handleUnselect}
      />
      <InteractiveElement
        type="button"
        label="Download"
        onSelect={handleSelect}
        onUnselect={handleUnselect}
      />
      <InteractiveElement
        type="button"
        label="Contact Us"
        onSelect={handleSelect}
        onUnselect={handleUnselect}
      />
      <InteractiveElement
        type="link"
        label="Read More"
        onSelect={handleSelect}
        onUnselect={handleUnselect}
      />
      <InteractiveElement
        type="link"
        label="Visit Our Store"
        onSelect={handleSelect}
        onUnselect={handleUnselect}
      />
      <InteractiveElement
        type="video"
        label="Embedded Video"
        onSelect={handleSelect}
        onUnselect={handleUnselect}
      />
      <InteractiveElement
        type="dropdown"
        label="Option 1"
        onSelect={handleSelect}
        onUnselect={handleUnselect}
      />
      <div className="mt-5">
        <Dashboard selectedElements={selectedElements} />
      </div>
    </div>
  );
};

export default InteractionSelector;
