import React from "react";

function Sequence() {
  var audioContext = new AudioContext();

  play(0, 3, 0.5);
  play(1, 10, 0.5);
  play(2, 15, 0.5);

  // we need to specify the start and stop time of each generator node. This is specified relative to audioContext.currentTime which is time in seconds since the AudioContext was first created.
  function play(delay, pitch, duration) {
    var startTime = audioContext.currentTime + delay;
    var endTime = startTime + duration;
    var semitones = pitch * 100;

    var oscillator = audioContext.createOscillator();
    oscillator.connect(audioContext.destination);
    oscillator.type = "sawtooth";

    oscillator.detune.value = semitones;
    oscillator.start(startTime);
    oscillator.stop(endTime);
  }

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

export default Sequence;
