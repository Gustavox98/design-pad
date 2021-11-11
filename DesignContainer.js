import React from "react";
import DesignBoard from "./DesignBoard";
import PadInput from "./PadInput";

function DesignContainer(props) {
  return (
    <div className="designcontainer">
      {/* pad input contains the 8 draggable inputs */}
      {/* edit mode and setCurrentDragged method is passed using props */}
      {/* to display disabled if editmode is false and set currentDragged element to the dragged element */}
      <PadInput
        editMode={props.editMode}
        setCurrentDragged={props.setCurrentDragged}
      />

      {/* button to toggle the state of the edit mode */}
      {/* using props.setEditMode the mehthod is called inside App.js */}
      <button
        className={`edit-button ${props.editMode ? "edit-mode" : ""}`}
        onClick={() => props.setEditMode(true)}
      >
        EDIT
      </button>

      {/* DesignBoard contains the the pads which change its color on being dropped */}
      <DesignBoard currentDragged={props.currentDragged} />
    </div>
  );
}

export default DesignContainer;
