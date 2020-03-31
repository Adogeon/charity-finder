import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");

  const fetchMsg = async () => {
    const response = await fetch("/api/test");
    const result = await response.json();
    setMsg(result);
  };

  useEffect(() => {
    fetchMsg();
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>{msg.Message}</h1>
    </div>
  );
}

export default App;
