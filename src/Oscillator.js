import React from "react";

function Oscillator() {
  var audioContext = new AudioContext();

  var oscillator = audioContext.createOscillator();
  oscillator.type = "square";
  oscillator.connect(audioContext.destination);

  function handleButtonClick(e) {
    e.preventDefault();
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 2);
  }

  return (
    <>
      <p>
        an Oscillator created w/in the audio context and outputting a square
        wave
      </p>
      <button onClick={handleButtonClick}>Start Oscillator</button>
    </>
  );
}

export default Oscillator;
