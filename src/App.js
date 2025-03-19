import React from "react";
import HelloWorld from "./HelloWorld";
import ClickCounter from "./ClickCounter";
import ItemList from "./ItemList";
import UserForm from "./UserForm";
import "./styles.css";

function App() {
  return (
    <div>
      <HelloWorld />
      <ClickCounter />
      <ItemList />
      <UserForm />
    </div>
  );
}

export default App;
