import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";

function VideoPlayer({ video, onComplete }) {
  const videoContainerRef = useRef(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (videoContainerRef.current && !playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoContainerRef.current.appendChild(videoElement);

      const player = videojs(videoElement, {
        controls: true,
        controlBar: {
          playToggle: true,
          volumePanel: true,
          currentTimeDisplay: true,
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: true,
          fullscreenToggle: true,
          skipBackward: true,
        },
      });

      playerRef.current = player;

      player.src({ type: "video/mp4", src: `${import.meta.env.VITE_BE_URL}${video.url}` });

      const savedTime = localStorage.getItem(`video_${video._id}`);
      if (savedTime) {
        player.currentTime(parseFloat(savedTime));
      }

      player.on("timeupdate", () => {
        localStorage.setItem(`video_${video._id}`, player.currentTime());
      });

      player.on("ended", onComplete);

      player.ready(() => {
        player.controlBar.progressControl.hide();
      });

      return () => {
        if (player) {
          player.dispose();
          playerRef.current = null;
        }
      };
    }
  }, [video, onComplete]);

  return (
    <div
      className="video-player-wrapper flex items-center justify-center"
      ref={videoContainerRef}
    ></div>
  );
}

export default VideoPlayer;
