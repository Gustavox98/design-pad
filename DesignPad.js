import React from "react";
import PadInput from "./PadInput";

function DesignPad(props) {
  return (
    // dragover event
    // this event does not allow other elements to be dropped by default
    // so to overcome that use preventDefault();

    <div
      className="design-pad"
      onDragOver={(e) => e.preventDefault()}
      //   on calling ondrop event the classList is changed by appending current Dragged element using the props
      onDrop={(e) => {
        console.log("Here");
        e.preventDefault();
        e.target.classList.add(`pad-${props.currentDragged}`);
      }}
    ></div>
  );
}

export default DesignPad;
