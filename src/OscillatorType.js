import React from "react";

function OscillatorType() {
  var audioContext = new AudioContext();

  var oscillator = audioContext.createOscillator();
  oscillator.connect(audioContext.destination);

  // WAVEFORM TYPE
  oscillator.type = "square";
  // FREQUENCY
  //   oscillator.frequency.value = 220

  function handleButtonClick(e) {
    e.preventDefault();
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 2);
  }

  return (
    <>
      <p>
        an Oscillator created w/in the audio context and outputting a square
        wave at 440hz (middle A)
      </p>
      <button onClick={handleButtonClick}>Start Oscillator</button>
    </>
  );
}

export default OscillatorType;
