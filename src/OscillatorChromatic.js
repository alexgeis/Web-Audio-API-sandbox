import React from "react";

function OscillatorChromatic() {
  var audioContext = new AudioContext();

  var oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);

  // WAVEFORM TYPE
  oscillator.type = "sawtooth";
  // FREQUENCY
  oscillator.frequency.value = 220;
  // FORMULA TO CALCULATE CHROMATIC INTERVALS
  //   baseFrequency * Math.pow(2, noteOffset / 12)

  // ex. transpose middle A up 7 semitones to E
  // oscillator.frequency.value = 440 * Math.pow(2, 7 / 12)

  // DETUNE METHOD
  // ex. transpose middle A up 7 semitones to E
  // detune units are in 100ths of semitones
  oscillator.detune.value = 700;

  function handleButtonClick(e) {
    e.preventDefault();
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 2);
  }

  return (
    <>
      <p>
        an Oscillator outputting a sawtooth detuned up 7 semitones *middle A to
        E*
      </p>
      <button onClick={handleButtonClick}>Start Oscillator</button>
    </>
  );
}

export default OscillatorChromatic;
