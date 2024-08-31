import React, { useState, useEffect } from 'react';

function Layout({ children }) {

  return (
    <div className={`min-h-screen`}>
      <header className="bg-white dark:bg-gray-800 shadow">
        <nav className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-white">Video Library</h1>
              </div>
            </div>
            <div className="flex items-center mr-16">
              
            </div>
          </div>
        </nav>
      </header>
      <main className="mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}

export default Layout;
