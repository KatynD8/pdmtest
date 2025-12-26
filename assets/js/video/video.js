// assets/js/video/video.js

export function initVideoCards() {
  const videoCards = document.querySelectorAll(".video-card");

  if (!videoCards.length) return;

  videoCards.forEach((card) => {
    const video = card.querySelector("video");
    const iframe = card.querySelector("iframe");
    const playBtn = card.querySelector(".btn-play");

    if ((!video && !iframe) || !playBtn) return;

    playBtn.addEventListener("click", () => {
      stopAllVideos(videoCards);

      card.classList.add("is-playing");

      // Si c'est une vidéo classique
      if (video) {
        video.muted = false;
        video.controls = true;
        video.play();
      }

      // Si c'est une iframe YouTube
      if (iframe) {
        const src = iframe.src;
        // Ajoute autoplay=1 si pas déjà présent
        if (!src.includes("autoplay=1")) {
          iframe.src = src + (src.includes("?") ? "&" : "?") + "autoplay=1";
        }
      }
    });

    // Gestion des événements vidéo classique
    if (video) {
      video.addEventListener("pause", () => {
        card.classList.remove("is-playing");
        video.controls = false;
      });

      video.addEventListener("ended", () => {
        card.classList.remove("is-playing");
        video.controls = false;
        video.currentTime = 0;
      });
    }
  });
}

/* --- Helpers --- */
function stopAllVideos(cards) {
  cards.forEach((card) => {
    const video = card.querySelector("video");
    const iframe = card.querySelector("iframe");

    // Arrêter vidéo classique
    if (video) {
      video.pause();
      video.muted = true;
      video.controls = false;
    }

    // Arrêter iframe YouTube (en rechargeant sans autoplay)
    if (iframe) {
      const src = iframe.src.replace(/[?&]autoplay=1/, "");
      iframe.src = src;
    }

    card.classList.remove("is-playing");
  });
}
