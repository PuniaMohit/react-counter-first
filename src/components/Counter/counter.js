import React, { useState, useEffect, useRef } from "react";
import "./counter.css";

function Counter({ onTimeChange }) {
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const handleButtonClick = () => {
    setIsRunning(!isRunning);
  };
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
        onTimeChange(1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }
  }, [isRunning]);

  return (
    <div className="each-counter">
      <button class="counter-start-button" onClick={handleButtonClick}>
        {isRunning ? "Stop" : "Start"} Counter
      </button>
      <div className="showing-counter">{seconds}</div>
    </div>
  );
}

export default Counter;
