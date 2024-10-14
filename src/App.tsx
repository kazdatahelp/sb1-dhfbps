import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Home, Globe, BarChart } from 'lucide-react';
import DataGathering from './components/DataGathering';
import DataProcessing from './components/DataProcessing';
import AIIntegration from './components/AIIntegration';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex-shrink-0 flex items-center">
                  <Globe className="h-8 w-8 text-indigo-600" />
                  <span className="ml-2 text-xl font-bold text-gray-800">Crawl4AI App</span>
                </div>
                <div className="ml-6 flex space-x-8">
                  <Link to="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900">
                    <Home className="h-5 w-5 mr-1" />
                    Home
                  </Link>
                  <Link to="/process" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    <BarChart className="h-5 w-5 mr-1" />
                    Process
                  </Link>
                  <Link to="/analyze" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900">
                    <BarChart className="h-5 w-5 mr-1" />
                    Analyze
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <Routes>
              <Route path="/" element={<DataGathering />} />
              <Route path="/process" element={<DataProcessing />} />
              <Route path="/analyze" element={<AIIntegration />} />
            </Routes>
          </div>
        </main>

        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © 2024 Crawl4AI App. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;