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
  "come-and-go.mp3",
  "chike.mp3",
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

async function getSong(id) {
  const bearerToken =
    "BQAXOY0uEqBNsiyyUbrnPcg16Di9t26YRW4NLv0AEL2S_81hpJX71JLBuXzVtfSj4Rlq66VOisn3MHkl0S-pYvgz6nS9yBxBVO7rYKsatvZxTv48L3oZSePSv105tYiicCTMQSNgPyQ";
  try {
    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${bearerToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const info = await response.json();
    console.log(info);
    return info;
  } catch (error) {
    console.error("Error fetching song:", error);
  }
}
async function getSongs() {
  const bearerToken =
    "BQAXOY0uEqBNsiyyUbrnPcg16Di9t26YRW4NLv0AEL2S_81hpJX71JLBuXzVtfSj4Rlq66VOisn3MHkl0S-pYvgz6nS9yBxBVO7rYKsatvZxTv48L3oZSePSv105tYiicCTMQSNgPyQ";
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/tracks/11dFghVXANMlKmJXsNCbNl",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const info = await response.json();
    console.log(info);
    return info;
  } catch (error) {
    console.error("Error fetching song:", error);
  }
}
getSongs();

// getSong("11dFghVXANMlKmJXsNCbNl")

async function getSpotifyToken() {
  const clientId = "cda01176078544fab1941682ea85836f";
  const clientSecret = "eebf07a080834948bd99a747ef6a7b2d";

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const data = await response.json();
  console.log("Access Token:", data.access_token);
  return data.access_token;
}

// Example usage:
// getSpotifyToken().then(token => {
//   console.log("✅ Got Spotify Token:", token);
// });
