import React from "react";
import data from '../data';

const WheelMap = ({ currentSkillLevel, currentDistance }) => {
  // this test data is the percent chance of putts a professional has of making a 5 foot putt
  // 77% chance of a 1-putt
  // 23% chance of a 2-putt
  // const initalTestData = [
  //   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2,
  //   2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  //   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1,
  //   1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 2, 2,
  // ];
  // // randomize the array
  // initalTestData.sort(() => (Math.random() > .5) ? 1 : -1);
  // let onePutts = initalTestData.filter((val) => val === 1).length;
  // let twoPutts = initalTestData.filter((val) => val === 2).length;
  // let threePutts = initalTestData.filter((val) => val === 3).length;
  // console.log(onePutts, twoPutts, threePutts);

  // currentDistance = 15;
  const d = 15;
  // const skillLevel = 'pro';
  const dataDistance = [];
  for(let i = 0; i < data.skillLevel.pro.distance[d].onePutt; i++) {
    dataDistance.push(1);
  }
  for(let i = 0; i < data.skillLevel.pro.distance[d].twoPutt; i++) {
    dataDistance.push(2);
  }
  for(let i = 0; i < data.skillLevel.pro.distance[d].threePutt; i++) {
    dataDistance.push(3);
  }
  dataDistance.sort(() => (Math.random() > .5) ? 1 : -1);
  // console.log(dataDistance);


  let onePutt = dataDistance.filter((val) => val === 1).length;
  let twoPutt = dataDistance.filter((val) => val === 2).length;
  let threePutt = dataDistance.filter((val) => val === 3).length;
  // console.log(onePutt, twoPutt, threePutt);

  const handleSpin = () => {
    let wheel = document.querySelector(".wheel");
    let value = Math.ceil(Math.random() * 3600);
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
  }


  return (
    <div className="wheel-body">
      <div className="wheel-container">
        <div className="spin-btn" onClick={handleSpin}>
          <h2>Click to Spin</h2>
          <h5>{d} feet from hole</h5>
          <p>1-putt: {onePutt}%</p>
          <p>2-putt: {twoPutt}%</p>
          <p>3-putt: {threePutt}%</p>
        </div>
        <div className="wheel">
          {dataDistance.map((currVal, idx) => (
            <div className={`wheel-number putt${currVal}`} style={{ "--i": idx }} key={idx}>
              <span>{currVal}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WheelMap;
