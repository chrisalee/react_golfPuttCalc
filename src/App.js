// import { useState } from "react";
import "./App.css";
// import data from "./data";
import UserChoices from "./components/UserChoices";
import WheelMap from "./components/WheelMap";

const App = ({currentSkillLevel, distanceFromHole}) => {

  return (
    <div style={{margin: "20px"}}>
      <UserChoices  />
      <WheelMap currentSkillLevel={currentSkillLevel} distanceFromHole={distanceFromHole}/>
    </div>
  );
}

export default App;
