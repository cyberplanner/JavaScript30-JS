window.addEventListener('keydown', function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  console.log(audio);
  if (!audio) return; //will stop the function from running
  audio.currentTime = 0;
  audio.play();
})
