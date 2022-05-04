import React from "react";

function GainEnv() {
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

      var oscillator = audioContext.createOscillator();
      var amp = audioContext.createGain();
      amp.connect(audioContext.destination);
      oscillator.connect(amp);

      //GAIN NODE - single autrribute, an Audioparam called gain
      //halve the volume
      //amp.gain.value = 0.5

      //SCHEDULING ATTACK AND RELEASE
      // audioParam.setTargetAtTime(targetValue, startTime, timeConstant)
      // attack ranges from 0 to 1

      //"soft" attack - starts at 0
      amp.gain.value = 0;
      //the target is 1, starts when the audio context starts, and decay rate is 0.1 seconds
      amp.gain.setTargetAtTime(1, audioContext.currentTime, 0.1);
      //Release - sweep value back to 0, starting at the endTime, with an exponential decay rate defined by timeConstant, or 0.2
      amp.gain.setTargetAtTime(0, endTime, 0.2);

      oscillator.type = "sawtooth";
      oscillator.detune.value = pitch * 100;

      oscillator.start(startTime);
      oscillator.stop(endTime + 2);
    }
  }

  return (
    <>
      <p>GainNode - modulating volume of source audio - Attack/Release</p>
      <button onClick={handleButtonClick}>Gain Envelope</button>
    </>
  );
}

export default GainEnv;
