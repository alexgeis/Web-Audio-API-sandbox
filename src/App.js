import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  var audioContext = new AudioContext();

  var oscillator = audioContext.createOscillator();
  oscillator.type = "sawtooth";
  oscillator.connect(audioContext.destination);

  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 2);

  function handleButtonClick(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={handleButtonClick}></button>
    </div>
  );
}

export default App;
