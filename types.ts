// Interface for the structured response from the Gemini API
export interface ApiResponse {
  skill_obsolescence_insights: string[];
  action_steps: string[];
  summary: string;
}

// Interface for hypothetical skill trend data for charting
export interface SkillTrend {
  category: string;
  emerging: number; // e.g., projected growth percentage
  declining: number; // e.g., projected decline percentage
}
