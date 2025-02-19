import { Button } from "@mui/material";
import { useState } from "react";
import "./CounterApp.css";

function CounterApp() {
  const [count, setCount] = useState(0);

  // Calculate background color based on count using a gradient effect
  const getBackgroundColor = () => {
    const intensity = Math.min(255, count * 15); // Limit max intensity
    return `rgb(${255 - intensity}, ${255 - intensity}, 255)`; // Adjust color dynamically
  };

  return (
    <div
      className="counterapp-container"
      style={{ backgroundColor: getBackgroundColor() }}
    >
      <div className="counterapp-content">
        <span className="counter-value">{count}</span>
      </div>

      <div className="btn-container">
        <Button
          variant="contained"
          color="success"
          onClick={() => setCount(count + 1)}
        >
          +
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setCount(0)}
        >
          Reset
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setCount(count - 1)}
        >
          -
        </Button>
      </div>
    </div>
  );
}

export default CounterApp;
