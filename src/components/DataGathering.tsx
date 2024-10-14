import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';

const DataGathering: React.FC = () => {
  const [url, setUrl] = useState('');
  const [crawlResults, setCrawlResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCrawl = async () => {
    setIsLoading(true);
    setError(null);
    setCrawlResults([]);

    try {
      const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(url)}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const html = data.contents;
      const results = analyzeWebpage(html);
      setCrawlResults(results);
    } catch (error) {
      console.error('Error during crawling:', error);
      setError('An error occurred while fetching the webpage. Please try a different URL or check your internet connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const analyzeWebpage = (html: string): string[] => {
    const results: string[] = [];
    
    // Count words
    const wordCount = html.split(/\s+/).length;
    results.push(`Approximate word count: ${wordCount}`);
    
    // Detect main language (very basic)
    const langRegex = /<html[^>]*lang=["']?([^"'\s>]+)/i;
    const langMatch = html.match(langRegex);
    if (langMatch && langMatch[1]) {
      results.push(`Detected language: ${langMatch[1]}`);
    } else {
      results.push('Language not detected');
    }
    
    // Count links
    const linkCount = (html.match(/<a /gi) || []).length;
    results.push(`Number of links: ${linkCount}`);
    
    // Detect meta description
    const metaDescRegex = /<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i;
    const metaDescMatch = html.match(metaDescRegex);
    if (metaDescMatch && metaDescMatch[1]) {
      results.push(`Meta description: ${metaDescMatch[1]}`);
    } else {
      results.push('No meta description found');
    }
    
    return results;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Data Gathering</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL to analyze"
          className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleCrawl}
          disabled={isLoading}
          className="bg-indigo-600 text-white px-4 py-2 rounded-r-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </span>
          ) : (
            <span className="flex items-center">
              <Search className="mr-2" size={20} />
              Analyze
            </span>
          )}
        </button>
      </div>
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md flex items-start">
          <AlertCircle className="mr-2 flex-shrink-0" size={20} />
          <p>{error}</p>
        </div>
      )}
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Analysis Results:</h3>
        {crawlResults.length > 0 ? (
          <ul className="list-disc pl-5">
            {crawlResults.map((result, index) => (
              <li key={index} className="mb-1">{result}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No results yet. Enter a URL and click Analyze to see data.</p>
        )}
      </div>
    </div>
  );
};

export default DataGathering;