import React, { useState } from "react";
import data from "../data";

const UserChoices = () => {
  const skillLevel = Object.keys(data.skillLevel);
  const distances = Object.keys(data.skillLevel.pro.distance);
  // console.log(skillLevel);

  // const [currentSkillLevel, setCurrentSkillLevel] = useState("pro");
  // const [isSkillActive, setIsSkillActive] = useState(false);
  const [currentDistance, setCurrentDistance] = useState("5");
  const [isDistanceActive, setIsDistanceActive] = useState(false);

  // const selectSkillLevel = (skill) => {
  //   setIsSkillActive();
  //   setCurrentSkillLevel(skill);
  //   console.log(`skillLevel now set to`, skill);
  // };
  // console.log(currentSkillLevel);

  // const selectDistanceToHole = (dist) => {
  //   setIsDistanceActive(true);
  //   setCurrentDistance(dist);
  //   console.log(`distance now set to `, dist);
  // }
  // console.log(currentDistance);

  return (
    <div className="choices-container">
      <h3>Skill Level</h3>
      <ul className="handicap-select">
        {skillLevel.map((skill) => (
          <li
            type="button"
            key={skill}
            value={skill}
            // onClick={() => selectSkillLevel(skill)}
            // onChange={selectSkillLevel}
            // className={isSkillActive === skill ? "active" : ""}
          >
            {skill}
          </li>
        ))}
      </ul>

      <h3>Distance to the Hole (in feet)</h3>
      <div className="distance-select">
        {distances.map((currDist) => (
          <input
            type="button"
            key={currDist}
            value={currDist}
            // onClick={() => selectDistanceToHole(currDist)}
            // active={isDistanceActive}
            // className={isDistanceActive ? "active" : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default UserChoices;
