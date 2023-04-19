import React, { useState } from "react";
import Counter from "./components/Counter/counter";
import "./App.css";

function App() {
  const [counters, setCounters] = useState([]);
  const [totalTime, setTotalTime] = useState(0);

  const addCounter = () => {
    setCounters([...counters, 0]);
  };
  const handleTimeChange = (seconds) => {
    setTotalTime((prevTotalTime) => prevTotalTime + seconds);
  };
  return (
    <div className="container">
      <div className="count-container">
        <button className="add-counter-button" onClick={addCounter}>
          Add Counter
        </button>
        <div className="counter-show-addition">{totalTime}</div>
      </div>
      <div className="counter-container">
        {counters.map((counter, index) => (
          <div key={index} className="counter-list">
            <Counter onTimeChange={handleTimeChange} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
