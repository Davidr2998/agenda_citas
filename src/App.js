import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Textfield from "./Components/Textfield/Textfield";

function App() {
  return (
    <div className="App">
      <Textfield titulo="Nombre" />
      <Textfield titulo="Apellido" />
    </div>
  );
}

export default App;
