import React, { useState } from 'react';
import data from "../data";


const RandomClick = () => {
      // this test data is the percent chance of putts a professional has of making a 5 foot putt
  // 77% chance of a 1-putt
  // 23% chance of a 2-putt
  const initalTestData = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 
    1, 1, 1, 1, 1, 1, 1, 2, 2, 2
  ];

  const [numPutts, setNumPutts] = useState(null);

  const handleSpin = () => {
    let randomNumber = Math.floor(Math.random() * initalTestData.length);
    let puttValue = initalTestData[randomNumber];
    // console.log(randomNumber, puttValue);
    setNumPutts(puttValue);
  };
  return (
    <div>
        <h3>chance of number of putts</h3>
      <h4>from 5 feet away</h4>
      <p>{data.pro.distance[5].onePutt}% chance 1 putt</p>
      <p>{data.pro.distance[5].twoPutt}% chance 2 putt</p>
      <p>{data.pro.distance[5].threePutt}% chance 3 putt</p>
      <button onClick={handleSpin} style={{margin: "20px", padding: "10px"}}>Click to see how many putts it takes you to make it</button>
      <p className="results" style={{color: "green", fontSize: "20px", fontWeight: "700"}}>{numPutts}</p>
    </div>
  )
}

export default RandomClick