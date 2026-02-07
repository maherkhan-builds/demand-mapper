import React, { useState, useCallback, useRef } from 'react';
import { GoogleGenAI, Type, GenerateContentResponse } from '@google/genai';
import { ApiResponse } from './types';
import { GEMINI_MODEL, PLACEHOLDER_SKILLS } from './constants';
import { ActionButton } from './components/ActionButton';
import { LoadingSpinner } from './components/LoadingSpinner';
import { SkillInput } from './components/SkillInput';
import { Recommendations } from './components/Recommendations';
import { SkillTrendChart } from './components/SkillTrendChart';

const App: React.FC = () => {
  const [skillsInput, setSkillsInput] = useState<string>(PLACEHOLDER_SKILLS);
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const apiCallCounter = useRef(0); // To ensure we always use the latest API_KEY

  const analyzeSkills = useCallback(async () => {
    setLoading(true);
    setError(null);
    setApiResponse(null);

    const currentCallId = ++apiCallCounter.current;

    try {
      // Create a new GoogleGenAI instance on each API call to ensure it uses the most up-to-date API key
      // if the user switches keys via aistudio.openSelectKey().
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const prompt = `
        You are an AI career advisor and market trend analyst specializing in future job market projections (5-year outlook). Your goal is to help students align their learning paths with market demand by scanning for skill obsolescence and providing actionable recommendations.

        A student has provided their current and planned skills:
        "${skillsInput}"

        Analyze these skills against projected job market trends for the next 5 years.
        Identify:
        1.  **Skill Obsolescence Insights**: Which of these skills (or related skill areas) show signs of declining demand or becoming obsolete? Provide clear reasons and supporting trends. Also, identify emerging skills that complement the student's existing profile or are critical for future success in related fields.
        2.  **Action Steps**: Based on your insights, what concrete steps should the student take? This should include personalized recommendations for reskilling, upskilling, or focusing on emerging areas. Be specific with learning resources or types of courses (e.g., "learn Python for data analysis on Coursera," "explore cloud computing certifications").
        3.  **Summary**: A concise, motivational summary of the student's current learning path's alignment with future market trends, emphasizing confidence-building and informed decision-making.

        Provide your response in JSON format, strictly adhering to the following schema:
        {
          "skill_obsolescence_insights": ["string"],
          "action_steps": ["string"],
          "summary": "string"
        }
      `;

      const response: GenerateContentResponse = await ai.models.generateContent({
        model: GEMINI_MODEL,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              skill_obsolescence_insights: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'List of insights on declining/emerging skills.'
              },
              action_steps: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: 'List of actionable steps for the student.'
              },
              summary: {
                type: Type.STRING,
                description: 'A motivational summary of the analysis.'
              },
            },
            required: ["skill_obsolescence_insights", "action_steps", "summary"],
            propertyOrdering: ["skill_obsolescence_insights", "action_steps", "summary"],
          },
        },
      });

      // Only update state if this is the most recent API call
      if (currentCallId === apiCallCounter.current) {
        const jsonString = response.text.trim();
        const parsedResponse: ApiResponse = JSON.parse(jsonString);
        setApiResponse(parsedResponse);
      }
    } catch (e: any) {
      // Only update state if this is the most recent API call
      if (currentCallId === apiCallCounter.current) {
        console.error('API Error:', e);
        // Check for specific error message for API key reset
        if (e.message?.includes("Requested entity was not found.") && window.aistudio && window.aistudio.openSelectKey) {
          setError("API key not found or invalid. Please select your API key.");
          window.aistudio.openSelectKey(); // Prompt user to select key
        } else {
          setError(`Failed to analyze skills: ${e.message || 'An unknown error occurred.'}`);
        }
      }
    } finally {
      // Only update state if this is the most recent API call
      if (currentCallId === apiCallCounter.current) {
        setLoading(false);
      }
    }
  }, [skillsInput]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-gray-800">
      {/* Sticky Header with Logo and Title */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg p-4 flex flex-col sm:flex-row items-center justify-between rounded-b-xl">
        <div className="flex items-center space-x-3 mb-2 sm:mb-0">
          <img src="https://picsum.photos/40/40" alt="SkillSight AI Logo" className="rounded-full" />
          <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            SkillSight AI
          </h1>
        </div>
        {window.aistudio && window.aistudio.hasSelectedApiKey && (
          <div className="flex items-center space-x-2">
            <button
              onClick={() => window.aistudio.openSelectKey()}
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out text-sm"
            >
              Select API Key
            </button>
            <a
              href="https://ai.google.dev/gemini-api/docs/billing"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline"
            >
              Billing Info
            </a>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex flex-col items-center w-full max-w-4xl mt-24 mb-20 p-6 bg-white rounded-3xl shadow-2xl relative">
        <section className="w-full text-center mb-8">
          <p className="text-lg text-gray-600">
            Align your learning with tomorrow's job market. Enter your skills below and let AI guide your future.
          </p>
        </section>

        {/* Skill Input Section */}
        <SkillInput
          skillsInput={skillsInput}
          setSkillsInput={setSkillsInput}
          isDisabled={loading}
        />

        {/* Action Button - Always visible, but might be part of a persistent CTA at the bottom */}
        {/* For now, keeping it here as a primary action in the main flow */}
        <ActionButton
          onClick={analyzeSkills}
          isDisabled={loading || !skillsInput.trim()}
          text={loading ? "Analyzing..." : "Analyze Skills"}
          className="w-full md:w-auto px-8 py-3 mt-8 text-lg"
        />

        {/* Loading and Error States */}
        {loading && <LoadingSpinner />}
        {error && (
          <div className="mt-8 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg w-full">
            <p className="font-semibold">Error:</p>
            <p>{error}</p>
            {error.includes("API key not found") && (
              <p className="text-sm mt-2">Please ensure you have selected a valid API key for a paid GCP project.</p>
            )}
          </div>
        )}

        {/* Results Section */}
        {apiResponse && !loading && (
          <section className="mt-12 w-full space-y-8 animate-fade-in">
            <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 mb-6">
              Your Personalized Skill Insight
            </h2>
            <Recommendations response={apiResponse} />
            <SkillTrendChart /> {/* Placeholder chart */}
          </section>
        )}
      </main>

      {/* Persistent CTA at the bottom for mobile/smaller screens - Optional, but good for Gen Z */}
      {/* <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-t-lg sm:hidden flex justify-center z-40">
        <ActionButton
          onClick={analyzeSkills}
          isDisabled={loading || !skillsInput.trim()}
          text={loading ? "Analyzing..." : "Analyze Skills"}
          className="w-full px-8 py-3 text-lg"
        />
      </div> */}
    </div>
  );
};

export default App;
