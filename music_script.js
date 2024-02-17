const backgroundMusic = document.getElementById('background-music');
const musicToggleDiv = document.getElementById('music-toggle');

// Set the start time in seconds (e.g., 30 seconds)
const startTime = 3;

// Set the volume level (0.0 to 1.0)
const volumeLevel = 0.06;

backgroundMusic.currentTime = startTime;
backgroundMusic.volume = volumeLevel;

musicToggleDiv.addEventListener('click', () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicToggleDiv.innerHTML = "Hudba zapnuta";
  } else {
    backgroundMusic.pause();
    musicToggleDiv.innerHTML = "Hudba vypnuta";
  }
});

