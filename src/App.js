import "./App.css";
import Display from "./Components/Display";
import Pads from "./Components/Pads";
import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

function App() {
  const [soundPlayed, setSoundPlayed] =
    useState("");
  return (
    <div className="App">
      <AppContext.Provider
        value={{ soundPlayed, setSoundPlayed }}
      >
        <div id="drum-machine">
          <Pads />
          <Display />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default App;
