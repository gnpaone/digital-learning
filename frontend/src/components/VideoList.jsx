import React from "react";
import {
  CheckCircleIcon,
  DotsCircleHorizontalIcon,
  LockClosedIcon,
} from "@heroicons/react/solid";

function VideoList({ videos, currentIndex, setCurrentVideoIndex, completedVideos, progress }) {
  const handleVideoClick = (index) => {
    if (index === currentIndex || completedVideos.includes(index) || index === completedVideos[completedVideos.length - 1] + 1) {
      setCurrentVideoIndex(index);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 h-full">
      <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white">
        Video List
      </h2>
      <ul className="space-y-2">
        {videos.map((video, index) => (
          <li
            key={video._id}
            className={`flex items-center justify-between p-2 rounded-md ${
              index === currentIndex || completedVideos.includes(index) || index === completedVideos[completedVideos.length - 1] + 1
                ? "cursor-pointer"
                : "cursor-not-allowed opacity-50"
            } ${
              index === currentIndex
                ? "bg-blue-100 dark:bg-blue-900"
                : "hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
            onClick={() => handleVideoClick(index)}
          >
            <span
              className={`text-sm ${
                index === currentIndex || completedVideos.includes(index) || index === completedVideos[completedVideos.length - 1] + 1
                  ? "text-gray-800 dark:text-white"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {video.title}
            </span>

            {completedVideos.includes(index) ? (
              <CheckCircleIcon className="h-5 w-5 text-green-500" />
            ) : index === currentIndex || index === completedVideos[completedVideos.length - 1] + 1 ? (
              <DotsCircleHorizontalIcon className="h-5 w-5 text-blue-500" />
            ) : (
              <LockClosedIcon className="h-5 w-5 text-gray-400" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
