import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import OscillatorType from "./OscillatorType";
import OscillatorFreq from "./OscillatorFreq";
import OscillatorChromatic from "./OscillatorChromatic";
import Sequence from "./Sequence";
import Filter from "./Filter";
import FilterMod from "./FilterMod";
import Line from "./Line";
import GainEnv from "./GainEnv";

function App() {
  return (
    <div className="App">
      <Nav />
      {/* <header className="App-header">
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
      </header> */}
      <OscillatorType />
      <Line />
      <OscillatorFreq />
      <Line />
      <OscillatorChromatic />
      <Line />
      <Sequence />
      <Line />
      <Filter />
      <Line />
      <FilterMod />
      <Line />
      <GainEnv />
      <Line />
    </div>
  );
}

export default App;
