import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { SkillTrend } from '../types';

// Dummy data for the chart, as the Gemini API response is textual insights.
// This aims to visually represent the *concept* of emerging vs. declining skills.
const dummySkillTrends: SkillTrend[] = [
  { category: 'AI/ML', emerging: 90, declining: 5 },
  { category: 'Cloud Computing', emerging: 80, declining: 10 },
  { category: 'Web Dev (Legacy)', emerging: 30, declining: 60 },
  { category: 'Cybersecurity', emerging: 75, declining: 8 },
  { category: 'Data Analysis', emerging: 85, declining: 7 },
  { category: 'Traditional Office', emerging: 20, declining: 70 },
];

export const SkillTrendChart: React.FC = () => {
  return (
    <div className="w-full p-6 bg-white rounded-2xl shadow-xl border border-gray-100 mt-8">
      <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
        <svg className="w-6 h-6 mr-2 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path>
        </svg>
        Projected Skill Demand Overview (5-Year Outlook)
      </h3>
      <p className="text-gray-600 mb-6">
        This chart visualizes the general trend for various skill categories based on market projections.
        (Note: Data shown here is illustrative; detailed insights are in the recommendations above.)
      </p>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={dummySkillTrends}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="category" stroke="#6b7280" className="text-sm" />
          <YAxis stroke="#6b7280" className="text-sm" />
          <Tooltip
            cursor={{ fill: 'rgba(100, 116, 139, 0.1)' }}
            wrapperClassName="rounded-lg shadow-md border-none !bg-white !text-gray-800"
            contentStyle={{ backgroundColor: 'white', border: 'none', borderRadius: '8px' }}
            labelStyle={{ fontWeight: 'bold', color: '#4b5563' }}
            itemStyle={{ color: '#4b5563' }}
            formatter={(value: number, name: string) => [`${value}%`, name === 'emerging' ? 'Emerging Growth' : 'Declining Risk']}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{ paddingTop: '10px' }}
            formatter={(value: string) => (
              <span className="text-gray-700 text-sm">
                {value === 'emerging' ? 'Emerging Growth' : 'Declining Risk'}
              </span>
            )}
          />
          <Bar
            dataKey="emerging"
            fill="url(#colorEmerging)"
            barSize={20}
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="declining"
            fill="url(#colorDeclining)"
            barSize={20}
            radius={[10, 10, 0, 0]}
          />
          <defs>
            <linearGradient id="colorEmerging" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#34d399" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#06b6d4" stopOpacity={0.5}/>
            </linearGradient>
            <linearGradient id="colorDeclining" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#f87171" stopOpacity={0.5}/>
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
