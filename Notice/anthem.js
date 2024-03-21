// Flag to track if the anthem is currently playing
var isPlaying = false;
// Flag to track if the anthem has been played
var anthemPlayed = false;
// Reference to the audio elements
var audio;
var bell;

document.addEventListener("DOMContentLoaded", function() {
  // Create the audio elements
  audio = new Audio('jan.mp3');
  bell = new Audio('bell.mp3');
  setInterval(checkTime, 1000); // Check time every second

  // Add event listener to the play/pause button
  document.getElementById("playPauseButton").addEventListener("click", togglePlayback);

  // Start countdown timer
  startCountdown();
});

function startCountdown() {
  // Set the time for the national anthem (12:05 AM)
  var anthemTime = new Date();
  anthemTime.setHours(1); // 11:00 PM
  anthemTime.setMinutes(30);
  anthemTime.setSeconds(0);

  // Update countdown every second
  var timer = setInterval(function() {
    var now = new Date().getTime();
    var distance = anthemTime - now;

    // Calculate remaining time
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown in the "countdown" paragraph
    document.getElementById("countdown").innerHTML = "Countdown: " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, display a message and clear the interval
    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("countdown").innerHTML = "National anthem is playing!";
    }
  }, 1000);
}

function togglePlayback() {
  if (!isPlaying) {
    // Start playback of the bell sound
    bell.play();
    // When the bell sound ends, start playback of the national anthem
    bell.onended = function() {
      audio.play();
      isPlaying = true;
      // Update button text
      document.getElementById("playPauseButton").innerText = "Pause";
    };
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
  
  // Check if it's 11:54 PM and anthem has not been played yet
  if (hours === 1 && minutes === 30 && !anthemPlayed) {
    playNationalAnthem();
    // Set the flag to true to indicate that anthem has been played
    anthemPlayed = true;
  }
}

function playNationalAnthem() {
  // Start playback of the bell sound
  bell.play();
  // When the bell sound ends, start playback of the national anthem
  bell.onended = function() {
    audio.play();
    isPlaying = true;
    // Update button text
    document.getElementById("playPauseButton").innerText = "Pause";
    // Show the play/pause button
    document.getElementById("playPauseButton").classList.remove("hidden");
    // Log that the national anthem is being played for debugging
    console.log("Playing the National Anthem...");
  };
}
