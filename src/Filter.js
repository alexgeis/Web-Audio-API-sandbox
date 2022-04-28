import React from "react";

function Filter() {
  var audioContext = new AudioContext();

  //function below filters all frequences LOWER than 10,000hz
  function handleButtonClick(e) {
    e.preventDefault();
    play(0, 3, 0.5);
    play(1, 10, 0.5);
    play(2, 15, 0.5);

    function play(delay, pitch, duration) {
      var startTime = audioContext.currentTime + delay;
      var endTime = startTime + duration;

      var oscillator = audioContext.createOscillator();
      //BiquadFilterNode shapes audio output frequencies
      var filter = audioContext.createBiquadFilter();
      // routing goes from source -> fx -> destination
      // [oscillator]  ->  [filter]  -> [destination]
      filter.connect(audioContext.destination);
      oscillator.connect(filter);

      //filter types: 'lowpass', 'highpass', 'bandpass','lowshelf', 'peaking', 'notch','allpass'
      filter.type = "highpass";
      filter.frequency.value = 10000;

      oscillator.type = "sawtooth";
      oscillator.detune.value = pitch * 100;

      oscillator.start(startTime);
      oscillator.stop(endTime);
    }
  }

  return (
    <>
      <p>
        an Oscillator outputting a sawtooth sequence - filtered w/ a high pass
        filter @ 10,000hz E*
      </p>
      <button onClick={handleButtonClick}>Start Oscillator</button>
    </>
  );
}

export default Filter;
