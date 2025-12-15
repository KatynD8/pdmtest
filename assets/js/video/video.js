// assets/js/video/video.js

export function initVideoCards() {
  const videoCards = document.querySelectorAll(".video-card");

  if (!videoCards.length) return;

  videoCards.forEach((card) => {
    const video = card.querySelector("video");
    const playBtn = card.querySelector(".btn-play");

    if (!video || !playBtn) return;

    playBtn.addEventListener("click", () => {
      stopAllVideos(videoCards);

      card.classList.add("is-playing");

      video.muted = false;
      video.controls = true;
      video.play();
    });

    // Quand la vidéo est mise en pause
    video.addEventListener("pause", () => {
      card.classList.remove("is-playing");
      video.controls = false;
    });

    // Quand la vidéo se termine
    video.addEventListener("ended", () => {
      card.classList.remove("is-playing");
      video.controls = false;
      video.currentTime = 0;
    });
  });
}

/* --- Helpers --- */
function stopAllVideos(cards) {
  cards.forEach((card) => {
    const video = card.querySelector("video");

    if (!video) return;

    video.pause();
    video.muted = true;
    video.controls = false;
    card.classList.remove("is-playing");
  });
}
