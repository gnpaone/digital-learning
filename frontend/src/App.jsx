import React, { useState, useEffect, useRef } from "react";
import Dashboard from "./components/Dashboard";
import VideoPlayer from "./components/VideoPlayer";
import Layout from "./components/Layout";
import VideoInfo from "./components/VideoInfo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState([]);
  const [completedVideos, setCompletedVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoPlayerRef = useRef(null);

  useEffect(() => {
    fetchVideos();
  }, []);

  useEffect(() => {
    updateProgress();
  }, [completedVideos]);

  const fetchVideos = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BE_URL}/api/videos`);
      const data = await response.json();
      setVideos(data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleVideoComplete = () => {
    if (!completedVideos.includes(currentVideoIndex)) {
      const newCompletedVideos = [...completedVideos, currentVideoIndex];
      setCompletedVideos(newCompletedVideos);

      if (currentVideoIndex < videos.length - 1) {
        setCurrentVideoIndex(currentVideoIndex + 1);
      }
    }
  };

  const updateProgress = () => {
    const newProgress = (completedVideos.length / videos.length) * 100;
    setProgress(newProgress);
  };

  const handleResetProgress = () => {
    videos.forEach((video) => {
      localStorage.removeItem(`video_${video._id}`);
    });

    setCurrentVideoIndex(0);
    setProgress(0);
    setCompletedVideos([]);

    if (videoPlayerRef.current) {
      videoPlayerRef.current.currentTime = 0;
    }
  };

  return (
    <Layout>
      <div className="flex flex-col md:flex-row w-full h-full">
        <div className="w-full md:w-1/4 p-4">
          <VideoInfo video={videos[currentVideoIndex]} />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <Dashboard
            progress={progress}
            onResetProgress={handleResetProgress}
          />
          {videos.length > 0 && (
            <VideoPlayer
              video={videos[currentVideoIndex]}
              onComplete={handleVideoComplete}
              currentVideoIndex={currentVideoIndex}
              totalVideos={videos.length}
              ref={videoPlayerRef}
            />
          )}
        </div>
        <div className="w-full md:w-1/4 p-4">
          <VideoList
            videos={videos}
            currentIndex={currentVideoIndex}
            setCurrentVideoIndex={setCurrentVideoIndex}
            completedVideos={completedVideos}
            progress={progress}
          />
        </div>
      </div>
    </Layout>
  );
}

export default App;
