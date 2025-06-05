const playPauseBtn = document.getElementById('playPauseBtn');
let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
  isPlaying = !isPlaying;
  playPauseBtn.classList.toggle('playing', isPlaying);

  // Aqui você pode controlar o áudio real:
  // const audio = document.getElementById('audio');
  // if (isPlaying) audio.play();
  // else audio.pause();
});