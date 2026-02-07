

# Website Fixes and Content Updates

## Issues Identified

**Critical Bug**: The global body font-size is currently set to `4.0000rem` (64px!) in `src/index.css`. This is causing all spacing and layout issues across the site, including the footer and capability domains sections appearing broken on desktop. This needs to be fixed back to a reasonable size (around `1.0625rem` / 17px as per the project memory).

---

## Changes Overview

### 1. Fix Global Font Size (Root Cause of Layout Issues)
- Fix `src/index.css` body font-size from `4.0000rem` back to `1.0625rem` (17px)
- This will resolve the footer "Explore" section spacing and the "Capability Domains" layout issues on desktop

### 2. Blend the White Line in Hero Section
- Identify and remove or blend the visible white line (likely a border or section divider) so it matches the navy blue background in dark mode

### 3. Publications - Add Article Links
- Update the publications data in `InsightsRecognitionsSection.tsx` so that clicking an article name redirects to the corresponding article URL (currently the "Published" article points to a generic Medium link -- will keep that as-is since it's the actual link, but ensure click behavior works correctly for all items)

### 4. Rename "Technical & Architect Expertise" Heading
- In `SkillsSection.tsx`, change "Technical & Architect Expertise" to "Functional Technical & Architect Expertise"

### 5. Add New Core Competencies
Add four new items to the Core Competencies section in `SkillsSection.tsx`:
- Project / Program Management and PMO expertise
- Six Sigma process improvement and reengineering expertise
- Enterprise Architecture
- ISO 27001 / ISO 27701 Certified

### 6. Add Industry Domain Proficiency Section
Add a new subsection under "Professional Competencies" in `SkillsSection.tsx` combining:
- Retail
- Travel Retail
- Consulting
- Hospitality

### 7. Resize Chatbot "Executive Assistant" Text
- In `AIChatBot.tsx`, reduce the "Executive Assistant" heading font size from `font-semibold` to a smaller, better-balanced size

---

## Technical Details

### Files to Modify

| File | Change |
|------|--------|
| `src/index.css` (line 142) | Fix `font-size: 4.0000rem` to `font-size: 1.0625rem` |
| `src/components/HeroSection.tsx` | Investigate and blend visible white line at section boundary |
| `src/components/InsightsRecognitionsSection.tsx` | Ensure publication click handlers redirect correctly |
| `src/components/SkillsSection.tsx` | Rename heading, add 4 core competencies, add domain proficiency section |
| `src/components/AIChatBot.tsx` (line 277) | Reduce "Executive Assistant" text size (e.g., `text-sm font-medium`) |

### Core Competencies Addition (SkillsSection.tsx)
Will add new items to the `coreCompetencies` array with appropriate icons (e.g., `Briefcase` for PMO, `Award` for Six Sigma, `Building2` for Enterprise Architecture, `Shield` for ISO) and matching gradient colors.

### Domain Proficiency Section (SkillsSection.tsx)
Will add a new "Domain Proficiency" subsection below the existing sections, using badge-style cards for each industry (Retail, Travel Retail, Consulting, Hospitality).
