window.addEventListener('keydown', function(e) { //will catch the key number
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  console.log(e); //log Keyboard event
  //console.log(e.keyCode); //number of the key
  //console.log("Audio element: ");
  //console.log(audio);
  //console.log("Key element: ");
  //console.log(key);
  if (!audio) return; //will stop the function from running
  audio.currentTime = 0;// rewind audio
  audio.play();
  key.classList.add('playing');
})
