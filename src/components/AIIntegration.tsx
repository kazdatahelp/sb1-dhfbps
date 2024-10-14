import React, { useState } from 'react';
import { Brain, MessageSquare, TrendingUp } from 'lucide-react';

const AIIntegration: React.FC = () => {
  const [sentimentAnalysis, setSentimentAnalysis] = useState('');
  const [generatedContent, setGeneratedContent] = useState('');
  const [dataInsights, setDataInsights] = useState('');

  const performSentimentAnalysis = () => {
    // Simulating sentiment analysis
    setSentimentAnalysis('Positive sentiment detected in 70% of the processed data.');
  };

  const generateContent = () => {
    // Simulating content generation
    setGeneratedContent('AI-generated summary: The analyzed data suggests a growing trend in renewable energy adoption across various industries.');
  };

  const provideInsights = () => {
    // Simulating data-driven insights
    setDataInsights('Key insight: There is a 25% increase in user engagement when content is personalized based on browsing history.');
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">AI Integration</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <button
            onClick={performSentimentAnalysis}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
          >
            <Brain className="mr-2" size={20} />
            Sentiment Analysis
          </button>
          <p className="mt-2 text-sm">{sentimentAnalysis || 'Click to perform sentiment analysis'}</p>
        </div>
        <div>
          <button
            onClick={generateContent}
            className="w-full bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 flex items-center justify-center"
          >
            <MessageSquare className="mr-2" size={20} />
            Generate Content
          </button>
          <p className="mt-2 text-sm">{generatedContent || 'Click to generate content'}</p>
        </div>
        <div>
          <button
            onClick={provideInsights}
            className="w-full bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center justify-center"
          >
            <TrendingUp className="mr-2" size={20} />
            Data Insights
          </button>
          <p className="mt-2 text-sm">{dataInsights || 'Click to get data-driven insights'}</p>
        </div>
      </div>
    </div>
  );
};

export default AIIntegration;