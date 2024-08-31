import React from "react";
import { GrPowerReset } from 'react-icons/gr';

function Dashboard({ progress, onResetProgress }) {
  const displayProgress = isNaN(progress) ? 0 : progress;

  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-4 mb-4 relative">
      <button
        onClick={onResetProgress}
        className="absolute top-2 right-4 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      >
        <GrPowerReset size={20} />
      </button>
      <h2 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
        Progress Dashboard
      </h2>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${displayProgress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
        {displayProgress.toFixed(2)}% completed
      </p>
    </div>
  );
}

export default Dashboard;
