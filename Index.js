const lightMode = document.querySelector(".button2");
const darkMode = document.querySelector(".button");

function light() {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
}

function Dark() {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
}

lightMode.addEventListener("click", () => {
  setTimeout(() => {
    lightMode.style = "display:none";
    darkMode.style = "display:block";
  }, 200);
});
darkMode.addEventListener("click", () => {
  setTimeout(() => {
    darkMode.style = "display:none";
    lightMode.style = "display:flex";
  }, 100);
});

const listOfSongs = [
  "always.mp3",
  "come-and-go.mp3",
  "chike.mp3",
  "second-sermon.mp3",
  "Adesanya.mp3",
  "Dani.wav",
  "chike.mp3",
  "traveler.mp3",
];
let currentAudio = null;

document.querySelectorAll(".lovebuttonicon").forEach((button, index) => {
  const button2 = document.querySelectorAll(".lovebuttonicon2")[index];
  const audio = new Audio(listOfSongs[index]);

  button2.style.display = "none";

  button.addEventListener("click", () => {
    if (currentAudio) currentAudio.pause();
    audio.play();
    button.style.display = "none";
    button2.style.display = "block";
    setTimeout(() => {
      button2.style.display = "block";
    }, 200);
    currentAudio = audio;
  });

  // Pause
  button2.addEventListener("click", () => {
    audio.pause();
    button2.style.display = "none";
    button.style.display = "block";
    currentAudio = null;
  });

  // Reset icons when audio ends
  audio.addEventListener("ended", () => {
    button2.style.display = "none";
    button.style.display = "block";
    currentAudio = null;
  });
});

function openLightbox(src, caption) {
  document.getElementById("lightbox-img").src = src;
  // document.getElementById("lightbox-caption").innerText = caption;
  document.getElementById("lightbox").classList.remove("hidden");
  document.getElementById("lightbox").classList.add("flex");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("flex");
  document.getElementById("lightbox").classList.add("hidden");
}

// Example usage:
// getSpotifyToken().then(token => {
//   console.log("✅ Got Spotify Token:", token);
// });
