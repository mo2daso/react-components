import React, { useState } from "react";
import "./styles.css";

const UserForm = () => {
  const [name, setName] = useState("");

  return (
    <div className="container card">
      <h2>Enter Your Name</h2>
      <input
        type="text"
        placeholder="Type your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-box"
      />
      <p style={{ fontSize: "1.5rem", marginTop: "10px" }}>
        {name ? `Hello, ${name}! 👋` : "Your name will appear here."}
      </p>
    </div>
  );
};

export default UserForm;
