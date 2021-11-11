import React from "react";
import DesignPad from "./DesignPad";

function DesignBoard(props) {
  return (
    <div className="design-board">
      {/* 4 design pads as given in the question */}
      {/* currentDragged state is passed using the props */}
      <DesignPad currentDragged={props.currentDragged} />
      <DesignPad currentDragged={props.currentDragged} />
      <DesignPad currentDragged={props.currentDragged} />
      <DesignPad currentDragged={props.currentDragged} />
    </div>
  );
}

export default DesignBoard;