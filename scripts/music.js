const btn = document.getElementById("musicBtn");
const music = document.getElementById("bgMusic");
let isPlaying = false;

btn.addEventListener("click", () => {
  if (!isPlaying) {
    music.play();
    btn.textContent = "🔈"; // иконка "выключить"
    isPlaying = true;
  } else {
    music.pause();
    btn.textContent = "🔇"; // иконка "включить"
    isPlaying = false;
  }
});
