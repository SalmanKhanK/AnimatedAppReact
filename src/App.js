import React from 'react';
import './App.css';
import cloud1 from './images/cloud3.png'
import cloud2 from './images/cloud2.png'
import cloud3 from './images/cloud1.png'
import airplane from './images/airplane.png'
import ship from './images/ship.png'
import useWebAnimations from "@wellyshen/use-web-animations";
function App() {
  const { ref:cloudn1} = useWebAnimations({
    keyframes: [
      {transform:"translateX(-1500px)"},
      {transform:"translateX(1500px)"}
    ],
    timing: {
      duration: 8000, 
      iterations: Infinity, 
     
    },
  });
  const { ref:cloudn2} = useWebAnimations({
    keyframes: [
      {transform:"translateX(-1500px)"},
      {transform:"translateX(1500px)"}
    ],
    timing: {
      duration: 8000, 
      iterations: Infinity, 
     
    },
  });
  const { ref:cloudn3} = useWebAnimations({
    keyframes: [
      {transform:"translateX(-1500px)"},
      {transform:"translateX(1500px)"}
    ],
    timing: {
      duration: 8000, 
      iterations: Infinity, 
     
    },
  });
  const { ref:airplanes} = useWebAnimations({
    keyframes: [{ transform: 'translate(0,-10px)' }, 
                { transform: 'translate(300px,-70px)' },
                { transform: 'translate(500px,-150px)' },
                {transform: 'translate(700px,-250px)' },
                {transform: 'translate(1000px,-350px)' },
              
  ],
    timing: {
      duration: 10000, 
      iterations: Infinity, 
     
    },
  });
  const { ref:shipref} = useWebAnimations({
    keyframes: [
      {transform:"translateX(1500px)"},
      {transform:"translateX(-1500px)"}
    ],
    timing: {
      duration: 20000, 
      iterations: Infinity, 
     
    },
  });
  return (
    <div className="img"  >
        <div className="sky" >
        <img src={cloud1} alt="cloud1" ref={cloudn1} width={500} />
        <img src={cloud2} alt="cloud2" ref={cloudn2} width={400} />
        <img src={cloud3} alt="cloud3" ref={cloudn3} width={300}  />
        <img src={airplane} alt="airplane"  ref={airplanes} width={400} />
        <div className="bgsea">
        <img src={ship} alt="ship" className="ship" ref={shipref} />
        </div>
        </div>
   </div>
  );
}

export default App;
