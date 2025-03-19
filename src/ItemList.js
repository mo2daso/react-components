import React from "react";
import "./styles.css";

const ItemList = () => {
  const techStack = [
    "JavaScript ⚡",
    "React.js ⚛️",
    "Node.js 🖥️",
    "C# & .NET 🏗️",
    "Python 🐍",
    "Machine Learning 🤖"
  ];

  return (
    <div className="container card">
      <h2>Item List</h2>
      <ul>
        {techStack.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
