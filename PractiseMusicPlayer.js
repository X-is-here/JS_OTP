const playlistContainerTag = document.getElementsByClassName("playlistContainer")[0];

const audioTag = document.getElementsByClassName("audioTag")[0];

const currentAndTotleTimeTag = document.getElementsByClassName("currentAndTotleTime")[0];

const ProgressBarTag = document.getElementById("ProgressBar");

const CurrentProgressTag = document.getElementById("CurrentProgress");

const playButtonTag = document.getElementsByClassName("playButton")[0];

const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];

const previousButtonTag = document.getElementsByClassName("previousButton")[0];

const nextButtonTag = document.getElementsByClassName("nextButton")[0];

const tracks = [
    { trackId: "music/track1.mp3", title: "December Nya - Lin Nat" },
    { trackId: "music/track2.mp3", title: "Tsaw Ra Ai Tsaw Hkrup Sai - Ann Naw" },
    {
      trackId: "music/track3.mp3",
      title: "Lann Mha Gyee Yey Bey - Wine Suu Khine Thein",
    },
    { trackId: "music/track4.mp3", title: "Yee Zarr Sar - Sai Sai Kham Hlaing " },
  ];


  for (let i = 0;  i < tracks.length ; i++) {
      const tracksTag = document.createElement("div")
      tracksTag.addEventListener("click", () => {
          currentPlayingIndex = i;
          playSong()
          updatePlayandPauseButton()
      })
      tracksTag.classList.add("tracksIteam");
      const title = (i + 1).toString() + ". " + tracks[i].title;
      tracksTag.textContent = title
      playlistContainerTag.append(tracksTag)
  }



let duration = 0;
let durationText = "00:00";


audioTag.addEventListener("loadeddata", () => {
  duration = Math.floor(audioTag.duration);
  durationText = createMinuteAndSecondText(duration)
});

audioTag.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  const currentTimeText = createMinuteAndSecondText(currentTime);
  const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
  currentAndTotleTimeTag.textContent = currentTimeTextAndDurationText;
  UpdateCurrentProgress(currentTime)
});

const UpdateCurrentProgress = (currentTime) => {
  const currentProgressWidth = (500/duration) * currentTime;
  CurrentProgressTag.style.width = currentProgressWidth.toString() + "px"
}


const createMinuteAndSecondText = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;
  return minuteText + ":" + secondsText;
}

let currentPlayingIndex = 0;
const playSong = () => {
   const songIdToPlay = tracks[currentPlayingIndex].trackId;
    audioTag.src = songIdToPlay;
    audioTag.play()
    isPlaying = true
}

let isPlaying = false;

playButtonTag.addEventListener("click", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  isPlaying = true;
  if(currentTime === 0) {
    playSong()
  } else {
    audioTag.play();
    updatePlayandPauseButton()
  }

});

pauseButtonTag.addEventListener("click", () => {
  isPlaying = false;
  audioTag.pause();
  updatePlayandPauseButton();
})

nextButtonTag.addEventListener("click", () => {
  if(currentPlayingIndex === tracks.length - 1) {
    return
  }else {
    currentPlayingIndex += 1;
    playSong()
  }
})

previousButtonTag.addEventListener("click", () => {
  if(currentPlayingIndex === 0) {
    return
  }else {
    currentPlayingIndex -= 1
    playSong()
  }
})

const updatePlayandPauseButton = () => {
  if(isPlaying){
    playButtonTag.style.display = "none";
    pauseButtonTag.style.display = "inline";
  } else {
    playButtonTag.style.display = "inline";
    pauseButtonTag.style.display = "none";
  }
}