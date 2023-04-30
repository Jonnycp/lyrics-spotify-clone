const container = document.querySelector("section");
const audio = new Audio(songPath);

// Generazione Lyrics
newLyrics.forEach((lyric) => {
  const p = document.createElement("p");
  p.innerText = lyric.text;
  p.dataset.time = lyric.time;
  container.appendChild(p);
});

// Pulsante Play
const button = document.querySelector("#play");
button.addEventListener("click", () => {
  if (button.dataset.playing === "false") {
    play();
  } else {
    stop();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    if (button.dataset.playing === "false") {
      play();
    } else {
      stop();
    }
  }
});

const play = () => {
  button.dataset.playing = "true";
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="M9 16h2V8H9v8Zm4 0h2V8h-2v8Zm-1 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>`;
  const lyrics = document.querySelectorAll("p");
  let i = 0;
  let currentTime = 0;
  audio.play();
  updateDuration(audio.duration);
  audio.addEventListener("timeupdate", () => {
    currentTime = audio.currentTime;
    if (currentTime >= lyrics[i].dataset.time) {
      lyrics[i].classList.add("active");
      i++;
      lyrics[i].scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
};

//Pause
const stop = () => {
  button.dataset.playing = "false";
  button.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="white" d="m9.5 16.5l7-4.5l-7-4.5v9ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/></svg>`;
  audio.pause();
};


//Click on P
let testi = document.querySelectorAll("p");
testi.forEach((testo, i) => {
  testo.addEventListener("click", () => {
    colorFinoA(testi, i);
      audio.currentTime = testo.dataset.time;
      play();
  });
});


// Progress Bar
const playback = document.querySelector(".playback");
audio.addEventListener("timeupdate", () => {
  playback.querySelector("#time").innerText = convertTime(audio.currentTime);
  playback.querySelector(".bar").style.width = `${
    (audio.currentTime * 100) / audio.duration
  }%`;
});
