import { useState } from "react";
import Nav from "./Nav.jsx";
import Contain from "./Contain.jsx";
import "./App.css";

function App() {
  const [change, setChange] = useState(false);
  function handleChange() {
    setChange((prev) => !prev);
  }

  if (change) {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  } else {
    document.body.style.backgroundColor = "";
    document.body.style.color = "";
  }

  const varry = change ? "overall-container" : "";
  return (
    <div className={varry}>
      <Nav handleChange={handleChange} change={change} varry={varry} />
      <Contain varry={varry} />
    </div>
  );
}

export default App;
