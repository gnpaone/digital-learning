import React from 'react';

function VideoInfo({ video }) {
  if (!video) return <div className="text-gray-600 dark:text-gray-300">Loading...</div>;

  const renderDescription = (description) => {
    return description.split('\n').map((line, index) => {
      const colonIndex = line.indexOf(':');
      const periodIndex = line.indexOf('.');

      if (colonIndex !== -1 && periodIndex !== -1) {
        const heading = line.substring(0, colonIndex + 1).trim();
        const paragraph = line.substring(colonIndex + 1, periodIndex + 1).trim();
        
        return (
          <React.Fragment key={index}>
            <h3 className="text-lg font-semibold mb-2">{heading}</h3>
            <p className="mb-2">{paragraph}</p>
          </React.Fragment>
        );
      }
    });
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-5 w-6/6 h-full">
      <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">{video.title}</h2>
      <div className="text-gray-600 dark:text-gray-300">{renderDescription(video.description)}</div>
    </div>
  );
}

export default VideoInfo;
