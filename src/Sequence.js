import React from "react";

function Sequence() {
  var audioContext = new AudioContext();

  function handleButtonClick(e) {
    e.preventDefault();
    play(0, 3, 0.5);
    play(1, 10, 0.5);
    play(2, 15, 0.5);

    // we need to specify the start and stop time of each generator node. This is specified relative to audioContext.currentTime which is time in seconds since the AudioContext was first created.
    function play(delay, pitch, duration) {
      //logic on incoming parameters
      var startTime = audioContext.currentTime + delay;
      var endTime = startTime + duration;
      var semitones = pitch * 100;
      //create our oscillator source, connect to destination, and define its waveform type
      var oscillator = audioContext.createOscillator();
      oscillator.connect(audioContext.destination);
      oscillator.type = "sawtooth";
      //pass in pitch paramater as note values, define duration of oscillator tone
      oscillator.detune.value = semitones;
      oscillator.start(startTime);
      oscillator.stop(endTime);
    }
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
