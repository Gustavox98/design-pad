import React from "react";
import { useState } from "react";
import DesignContainer from "./components/DesignContainer";
import "./index.css";

function App() {
  // used to track of the  dragged element
  const [currentDragged, setCurrentDragged] = useState(null);

  // used to change the state of edit mode
  // by clicking on the edit button, set the edit mode to true
  const [editMode, setEditMode] = useState(false);

  return (
    // App component
    <div className="App">
      {/* The designer contains the pad-input, designboard and edit button */}
      <DesignContainer
        setEditMode={setEditMode}
        editMode={editMode}
        currentDragged={currentDragged}
        setCurrentDragged={setCurrentDragged}
      />
    </div>
  );
}

export default App;