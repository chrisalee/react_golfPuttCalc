import React from "react";

// css clippath maker
// bennettfreely.com/clippy/
const Wheel = () => {

  const handleSpin = () => {
    let wheel = document.querySelector(".wheel");
    let value = Math.ceil(Math.random() * 3600);
    wheel.style.transform = "rotate(" + value + "deg)";
    value += Math.ceil(Math.random() * 3600);
  }

  return (
    <div className="wheel-body">
      <div className="wheel-container">
        <div className="spin-btn" onClick={handleSpin}>Spin</div>
        <div className="wheel">
          <div className="wheel-number one" style={{ '--i':1 }} >
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':2 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':3 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':4 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':5 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':6 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':7 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':8 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':9 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':10 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':11 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':12 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':13 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':14 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':15 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':16 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':17 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':18 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':19 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':20 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':21 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':22 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':23 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':24 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':25 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':26 }} >
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':27 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':28 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':29 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':30 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':31 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':32 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':33 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':34 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':35 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':36 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':37 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':38 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':39 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':40 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':41 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':42 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':43 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':44 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':45 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':46 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':47 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':48 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':49 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':50 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':51 }} >
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':52 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':53 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':54 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':55 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':56 }}>
            <span>1</span>
          </div>
          <div className="wheel-number three" style={{ '--i':57 }}>
            <span>3</span>
          </div>
          <div className="wheel-number one" style={{ '--i':58 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':59 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':60 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':61 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':62 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':63 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':64 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':65 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':66 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':67 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':68 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':69 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':70 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':71 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':72 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':73 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':74 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':75 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':76 }} >
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':77 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':78 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':79 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':80 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':81 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':82 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':83 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':84 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':85 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':86 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':87 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':88 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':89 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':90 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':91 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':92 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':93 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':94 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':95 }}>
            <span>2</span>
          </div>
          <div className="wheel-number one" style={{ '--i':96 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':97 }}>
            <span>1</span>
          </div>
          <div className="wheel-number one" style={{ '--i':98 }}>
            <span>1</span>
          </div>
          <div className="wheel-number two" style={{ '--i':99 }}>
            <span>2</span>
          </div>
          <div className="wheel-number two" style={{ '--i':100 }}>
            <span>2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wheel;
