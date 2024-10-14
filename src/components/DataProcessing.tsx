import React, { useState } from 'react';
import { FileText } from 'lucide-react';

const DataProcessing: React.FC = () => {
  const [processedData, setProcessedData] = useState<string[]>([]);

  const handleProcessData = () => {
    // Simulating data processing
    const simulatedProcessedData = [
      'Removed duplicate entries',
      'Normalized text data',
      'Extracted relevant keywords',
      'Categorized content',
      'Applied sentiment analysis'
    ];
    setProcessedData(simulatedProcessedData);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Data Processing</h2>
      <button
        onClick={handleProcessData}
        className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 flex items-center"
      >
        <FileText className="mr-2" size={20} />
        Process Data
      </button>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Processing Results:</h3>
        {processedData.length > 0 ? (
          <ul className="list-disc pl-5">
            {processedData.map((result, index) => (
              <li key={index} className="mb-1">{result}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No processed data yet. Click the button to start processing.</p>
        )}
      </div>
    </div>
  );
};

export default DataProcessing;