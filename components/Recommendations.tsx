import React from 'react';
import { ApiResponse } from '../types';

interface RecommendationsProps {
  response: ApiResponse;
}

export const Recommendations: React.FC<RecommendationsProps> = ({ response }) => {
  return (
    <div className="w-full space-y-8 p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
      {/* Summary Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl shadow-md">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-3">
          Summary of Your Learning Path
        </h3>
        <p className="text-gray-700 leading-relaxed">
          {response.summary}
        </p>
      </div>

      {/* Skill Obsolescence Insights */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
          </svg>
          Skill Obsolescence Insights & Emerging Trends
        </h3>
        <ul className="list-none space-y-3">
          {response.skill_obsolescence_insights.map((insight, index) => (
            <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="flex-shrink-0 text-purple-500 font-bold mr-3">{index + 1}.</span>
              <p className="text-gray-700">{insight}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Steps */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <svg className="w-6 h-6 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
          </svg>
          Recommended Action Steps
        </h3>
        <ul className="list-none space-y-3">
          {response.action_steps.map((step, index) => (
            <li key={index} className="flex items-start bg-gray-50 p-4 rounded-lg shadow-sm">
              <span className="flex-shrink-0 text-blue-500 font-bold mr-3">{index + 1}.</span>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
