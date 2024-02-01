/* File consists app functionalities
    - Playing media 
    - Searching tracks 
*/

const audio = document.querySelector("audio");
const audioSrc = document.querySelector("source");
const nextBtn = document.querySelector(".next-btn");
const previousBtn = document.querySelector(".previous-btn");
const speed = document.querySelector("select");

var trackPointer = 0;

// Load first track on Reload/Load
document.addEventListener("DOMContentLoaded", loadTrack);

playBtn.addEventListener("click", playMusic);
nextBtn.addEventListener("click", playNext);
previousBtn.addEventListener("click", playPrevious);
speed.addEventListener("change", updateSpeed);

// Player Object
const player = {
  track_name: "",
  track_artist: "",
  track_thumbnail: "",
  track_src: "",
  track_duration: 0,
  track_current_progress: 0,
  initializePlayer: function(track){
    this.track_name = track.name
    this.track_artist = track.artist
    this.track_thumbnail = track.thumbnail
    this.track_src = track.src
  },
  load: function () {
    audio.src = this.track_src
    audio.load();
  },
  updateDOM: function () {
    document.querySelector(".art").src = this.track_thumbnail;
    document.querySelector(".marquee").textContent = this.track_name;
    document.querySelector("h3.artist").textContent = this.track_artist;
    document.querySelector(".current-progress").textContent =
      this.track_current_progress;
    document.querySelector(".total-duration").textContent = this.track_duration;
  },
  updateBar: function () {
    let value = bar.value;
    audio.currentTime = value;
  },
};

// player duration and current time
setInterval(() => {
  document.querySelector(".current-progress").textContent = getCurrentDuration();
  document.querySelector(".total-duration").textContent = getTotalDuration();
}, 1000);

function loadTrack() {
  // Get a track info object
  let track = getTrack(trackPointer); // initial load: returns first track from tracks obj
  player.initializePlayer(track)
  player.track_duration = audio.duration;
  player.track_current_progress = audio.currentTime;

  // update Player DOM and Audio Player
  player.load();
  player.updateDOM();
}

// returns a track from tracks object
function getTrack(trackId) {
  return tracks[trackId];
}

function playMusic() {
  if (audio.dataset.paused == "true") {
    audio.play();
    audio.dataset.paused = "false";
  } else {
    audio.pause();
    audio.dataset.paused = "true";
  }
}

function updateSpeed() {
  audio.playbackRate = speed.value;
}

function playNext() {
    trackPointer = trackPointer+1
    loadTrack()
}

function playPrevious(){

}

// Player Duration Calculators
function getCurrentDuration() {
  let currentDuration = audio.currentTime;
  let min = 0;
  let seconds = Math.floor(currentDuration);

  if (currentDuration >= 60) {
    min = Math.floor(currentDuration / 60);
    seconds = Math.floor(currentDuration - min * 60);
  }

  let bar = document.querySelector("#bar");
  bar.max = audio.duration;
  bar.value = audio.currentTime;

  return `0${min}:${seconds}`;
}

function getTotalDuration() {
  let duration = audio.duration;
  let min = Math.floor(duration / 60) | 0;
  let seconds = Math.floor(duration - min * 60) | 0;

  return `0${min}:${seconds}`;
}
