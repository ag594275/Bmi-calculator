import { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(70);
  const [height, setHeight] = useState(180);

  function weightHandler(event) {
    setWeight(event.target.value);
  }

  function heightHandler(event) {
    setHeight(event.target.value);
  }

  const output = useMemo(() => {
    const calculateHeight = height / 100;

    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          type="range"
          step="1"
          min="40"
          max="200"
          className="input-slider"
          onChange={weightHandler}
        />
        <p className="slider-output">height: {height} cm</p>
        <input
          type="range"
          step="1"
          min="140"
          max="220"
          className="input-slider"
          onChange={heightHandler}
        />
      </div>
      <div className="output-section">
        <p>Your BMI is</p>
        <p className="output">{output}</p>
      </div>
    </main>
  );
}

export default App;
