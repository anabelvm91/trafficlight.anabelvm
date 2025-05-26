import React, { useState } from "react";
import "./styles/index.css";

function TrafficLight() {
  const [color, setColor] = useState("");

  return (
    <div className="app">
      <div className="trafficTop"></div>
      <div className="container">
        <div
          className={`light red ${color === "red" ? "glow" : ""}`}
          onClick={() => setColor("red")}
        ></div>
        <div
          className={`light yellow ${color === "yellow" ? "glow" : ""}`}
          onClick={() => setColor("yellow")}
        ></div>
        <div
          className={`light green ${color === "green" ? "glow" : ""}`}
          onClick={() => setColor("green")}
        ></div>
        <div
          className={`light purple ${color === "purple" ? "glow" : ""}`}
          onClick={() => setColor("purple")}
        ></div>
      </div>

      <button className="extra-button" onClick={() => setColor("purple")}>
        Activar luz púrpura 🟣
      </button>
    </div>
  );
}

export default TrafficLight;