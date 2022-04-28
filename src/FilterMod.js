import React from "react";

function FilterMod() {
  var audioContext = new AudioContext();

  //FILTER MODULATION
  // each note has a highpass filter that sweeps from 10000 Hz to 500 Hz over the duration of the sound (linear).
  function handleButtonClick(e) {
    e.preventDefault();
    var audioContext = new AudioContext();

    play(0, 3, 0.5);
    play(1, 10, 0.5);
    play(2, 15, 0.5);

    function play(delay, pitch, duration) {
      var startTime = audioContext.currentTime + delay;
      var endTime = startTime + duration;

      var filter = audioContext.createBiquadFilter();
      filter.connect(audioContext.destination);
      filter.type = "highpass";
      // preset value to avoid popping on start
      filter.frequency.value = 10000;
      // schedule the start time
      // setValueAtTime(value, time)
      filter.frequency.setValueAtTime(10000, startTime);

      // ramp the value, and set end time!
      filter.frequency.linearRampToValueAtTime(500, endTime);
      //   filter.frequency.exponentialRampToValueAtTime(500, endTime);

      var oscillator = audioContext.createOscillator();
      oscillator.connect(filter);

      oscillator.type = "sawtooth";
      oscillator.detune.value = pitch * 100;

      oscillator.start(startTime);
      oscillator.stop(endTime);
    }
  }

  return (
    <>
      <p>
        sawtooth sequence - filtered w/ a high pass filter @ 10,000hz -
        MODULATING from 10k Hz to 500hz
      </p>
      <button onClick={handleButtonClick}>Filter Mod</button>
    </>
  );
}

export default FilterMod;
