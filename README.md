# Skill Obsolescence Scanner

**Industry:** Education / EdTech / Career Intelligence  
**Part of 100-Day AI App Challenge**

## The Problem

Students spend months (or years) learning skills that are losing value in the job market. Most education paths don’t update fast enough, and career advice is often generic. As AI changes industries quickly, students need a way to check whether their current learning plan is becoming outdated—and what to learn next with confidence.

## The Solution

**Skill Obsolescence Scanner** is a Gen Z-friendly AI app that maps a student’s current and planned learning path against projected **5-year job demand**. It identifies which skills are declining, which are rising, and recommends actionable next steps to upgrade the learning plan.

### skill_obsolescence_insights

- **Obsolescence Score** – Rates how “future-safe” the student’s current learning plan is  
- **Emerging vs Declining Skills** – Highlights what’s trending up and what’s fading  
- **Market Demand Snapshot** – Shows 5-year outlook for related roles and skills  
- **Skill Gap Map** – Identifies missing high-demand skills based on goals  
- **Plan Upgrade Suggestions** – Recommends swaps (remove X, add Y) with reasons  
- **Confidence Builder** – Converts insights into a clear, motivating action plan  

## Why This Can’t Be Done in ChatGPT

This app needs structured inputs (courses, goals, timelines), consistent scoring logic, and a repeatable experience that tracks progress over time. ChatGPT can give general suggestions, but it can’t persist a student’s learning plan, compare versions, track skill improvements, or deliver an interactive “scan → score → upgrade → track” workflow.

## Who This Is For

- High school and college students choosing what to learn next  
- Bootcamp and certification learners building job-ready skills  
- Career switchers who want a future-proof learning roadmap  
- Students who feel overwhelmed by “what skills matter now?”  

## Prompt Used

> Build a Gen Z-friendly education app using Google App Studio that takes a student’s current and planned learning path, extracts skills, compares them against projected 5-year job market demand, detects skill obsolescence, and outputs actionable upskilling/reskilling recommendations with an interactive, motivational UI.

## Tools Used

- Gemini + aistudio.google (ideation + prompting)  
- Google Stitch (UI design and prototyping)  
- Google Opal (UI design and prototyping)  
- Replit (UI design and prototyping)  
- Base44 (UI design and prototyping)  
- Kimi (UI design and prototyping)  
- Rocket (UI design and prototyping)  
- Google AI Studio (Gemini 2.5 Flash)  
- React + TypeScript  
- Material Design principles  

## Action Plan (for Building + Iteration)

### action_steps

1. **Onboarding:** capture goal role, timeframe, interests, and current learning plan  
2. **Skill Extraction:** parse courses/projects into a clean skill list (auto + manual edit)  
3. **Market Mapping:** tag skills as rising/declining/stable using 5-year demand signals  
4. **Obsolescence Scan:** generate an Obsolescence Score + explain “why” in simple language  
5. **Plan Upgrade:** recommend 3–5 high-impact skill swaps (remove/add/upgrade)  
6. **Interactive Decisions:** allow students to swipe/choose options and build a final plan  
7. **Progress Tracking:** weekly check-ins and “confidence milestones”  
8. **Validate UX:** test if students can complete “scan → plan upgrade” in under 2 minutes  
9. **Privacy Review:** minimize stored data, clear consent, and transparent settings  

## Gen Z UX Notes

- Mobile-first layout, fast scanning, minimal typing  
- Progress gamification (streaks, badges, “future-proof score”)  
- Motivational language (no fear tactics, clarity + empowerment)  
- Short explainers and visuals instead of long paragraphs  

## Privacy & Data Safety

- Collect only what’s needed (learning plan + goals)  
- Clear consent for any saved profile data  
- Transparent “delete my data” option  
- No sharing with third parties by default  

## Time to Build

⏱️ 30–45 minutes (concept → working prototype)

## Revenue Potential

- **$5–15/month per student**
- Students pay for career tools when outcomes feel clear  
- Perfect for semester-based subscriptions  
- B2B potential for schools, bootcamps, and career centers  

## Summary

### summary

**Skill Obsolescence Scanner** helps students avoid wasting time on outdated skills by scanning their learning path against projected 5-year job demand. It delivers clear market insights, personalized recommendations, and an interactive plan upgrade experience designed to boost motivation and career confidence.

---

**Part of my 100-Day AI App Challenge**  
Building one future-facing, industry-specific AI app every day using Google App Studio.

### Follow the journey

- Instagram: **@social_icm**  
- TikTok: **@social_media_coach**  
- LinkedIn: **Maher – AI Strategist**  
- GitHub: **https://github.com/maherkhan-builds**
