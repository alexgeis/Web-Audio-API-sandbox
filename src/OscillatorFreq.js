import React from "react";

function OscillatorFreq() {
  var audioContext = new AudioContext();

  var oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);

  // WAVEFORM TYPE
  oscillator.type = "sawtooth";
  // FREQUENCY
  oscillator.frequency.value = 220;

  function handleButtonClick(e) {
    e.preventDefault();
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 2);
  }

  return (
    <>
      <p>
        an Oscillator created w/in the audio context and outputting a sawtooth
        wave at 220hz (middle A -1 octave)
      </p>
      <button onClick={handleButtonClick}>Start Oscillator</button>
    </>
  );
}

export default OscillatorFreq;
