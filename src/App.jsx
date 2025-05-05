import React, { useState, useEffect } from 'react';
import { ChartBarIcon, TableCellsIcon, UserGroupIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import Dashboard from './pages/Dashboard';

const navigation = [
  { name: 'Dashboard', href: '#', icon: ChartBarIcon, current: true },
  { name: 'Users', href: '#', icon: UserGroupIcon, current: false },
  { name: 'Data', href: '#', icon: TableCellsIcon, current: false },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-comfort-light-bg dark:bg-comfort-dark-bg transition-colors duration-200">
      {/* Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col border-r border-comfort-light-border dark:border-comfort-dark-border bg-comfort-light-card dark:bg-comfort-dark-card">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <h1 className="text-2xl font-bold text-primary-600 dark:text-primary-400">Saral Lite</h1>
            </div>
            <nav className="mt-5 flex-1 space-y-1 bg-comfort-light-card dark:bg-comfort-dark-card px-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`
                    group flex items-center px-2 py-2 text-sm font-medium rounded-md
                    ${item.current
                      ? 'bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400'
                      : 'text-comfort-light-text dark:text-comfort-dark-text hover:bg-gray-50 dark:hover:bg-gray-800'
                    }
                  `}
                >
                  <item.icon
                    className={`
                      mr-3 h-6 w-6 flex-shrink-0
                      ${item.current ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-500 dark:group-hover:text-gray-400'}
                    `}
                    aria-hidden="true"
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col md:pl-64">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-comfort-light-card dark:bg-comfort-dark-card shadow-sm">
          <div className="flex flex-1 justify-end px-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium rounded-md text-comfort-light-text dark:text-comfort-dark-text hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <main className="flex-1">
          <div className="py-6">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
              <Dashboard />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App; 