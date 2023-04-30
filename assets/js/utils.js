const convertTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds <= 9 ? "0" : ""}${seconds}`;
};

const updateDuration = (duration) => {
  playback.querySelector("#duration").innerText = convertTime(duration);
};

const updateElements = () => {
    document.querySelector("img[alt='Cover']").src = coverPath;
    document.querySelector("h1").innerText = songName;
    document.querySelector("h2").innerText = artistName;
};

const colorFinoA = (ps, num) => {
  ps.forEach((p, i) => {
    if (i <= num) {
      p.classList.add("active");
    } else {
      p.classList.remove("active");
    }
  });
};

updateElements();