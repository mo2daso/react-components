import React, { useState } from "react";
import "./styles.css";

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container card">
      <h2>Click Counter</h2>
      <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};

export default ClickCounter;
