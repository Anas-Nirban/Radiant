// Flag to track if the anthem is currently playing
var isPlaying = false;
// Flag to track if the anthem has been played
var anthemPlayed = false;
// Reference to the audio element
var audio;

document.addEventListener("DOMContentLoaded", function() {
  // Create the audio element
  audio = new Audio('jan.mp3');
  setInterval(checkTime, 1000); // Check time every second

  // Add event listener to the play/pause button
  document.getElementById("playPauseButton").addEventListener("click", togglePlayback);
});

function togglePlayback() {
  if (!isPlaying) {
    // Start playback
    audio.play();
    isPlaying = true;
    // Update button text
    document.getElementById("playPauseButton").innerText = "Pause";
  } else {
    // Pause playback
    audio.pause();
    isPlaying = false;
    // Update button text
    document.getElementById("playPauseButton").innerText = "Play";
  }
}

function checkTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  
  // Add leading zero if minutes < 10
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  
  // Log the current time for debugging
  console.log("Current Time:", hours + ":" + minutes);
  
  // Check if it's 12:06 PM and anthem has not been played yet
  if (hours === 23 && minutes === 54 && !anthemPlayed) {
    playNationalAnthem();
    // Set the flag to true to indicate that anthem has been played
    anthemPlayed = true;
  }
}

function playNationalAnthem() {
  // Start playback
  audio.play();
  isPlaying = true;
  // Update button text
  document.getElementById("playPauseButton").innerText = "Pause";
  // Show the play/pause button
  document.getElementById("playPauseButton").classList.remove("hidden");
  // Log that the national anthem is being played for debugging
  console.log("Playing the National Anthem...");
}