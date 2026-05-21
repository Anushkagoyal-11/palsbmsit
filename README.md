# AI Travel Architect

A deploy-ready static web app for generating memory-aware travel itineraries in a strict JSON schema.

## Problem Statement

Travel planning is still fragmented. Users compare booking apps, map reviews, blogs, short videos, and generic AI answers, but the final route often remains overpacked, weakly personalized, budget-unclear, and hard to reuse.

## Proposed Solution

AI Travel Architect converts user constraints into an explainable itinerary planning cockpit. It uses destination, pickup area, dates, budget, vibe, stored likes, dislikes, diet, travel style, pace, and sustainability priority to generate a paced route, visual day cards, planning intelligence scores, ride redirects, a strict JSON export, and a judge-ready defense.

## What Makes It Stand Out

- Memory-first planning: saved likes, dislikes, diet, and travel style visibly influence recommendations.
- Realistic pacing: each day is limited to morning, afternoon, and evening blocks.
- Budget traceability: each budget mode maps to INR cost bands.
- Pace and sustainability controls: users can tune trip intensity and responsible-routing priority.
- Trip intelligence: the app displays memory fit, pacing safety, budget confidence, sustainability fit, and routing risk.
- Last-mile ride assist: compares estimated Rapido, Uber, Ola, and Maps options and opens the selected provider.
- Famous food map: suggests iconic local food stops and creates a Google Maps route to follow.
- Place preview photos: each itinerary stop displays a destination image preview before the user commits to visiting.
- Condition-aware replanning: weather, health/energy, delays, and traffic change route notes, ride estimates, and pacing.
- Refined hero UI: a polished travel-product first viewport inspired by modern booking/adventure interfaces.
- Research tab: links product decisions to tourism recommender and itinerary-planning research.
- Judge defense panel: explains why this is different from MakeMyTrip and generic ChatGPT.
- Prompt lab: gives a refined production prompt that can be plugged into an LLM API later.

## Research Foundation

- Wang, Höpken & Jannach, 2025: POI recommendation improves when systems use heterogeneous context signals.
- Friggstad et al., 2018: itinerary planning can be modeled as a constrained orienteering problem with time and route budgets.
- Ho & Lim, 2022: personalized tour recommendation should consider past user preference signals and time constraints.
- Banerjee, Satish & Wörndl, 2024: tourism recommender systems can incorporate sustainability-aware reranking.

## Judge Pitch

This is not a booking marketplace like MakeMyTrip. It solves the pre-booking planning layer: "What should my trip actually look like given my constraints?" It is also not just ChatGPT because the experience is structured, repeatable, visually explainable, schema-locked, budget-aware, and grounded in itinerary-planning research.

The last-mile ride assist makes the itinerary actionable. A user can compare estimated ride choices and jump to Uber, Rapido, Ola, or Maps instead of manually copying destinations between apps.

The food-map flow makes the itinerary more local and usable: the app suggests famous food stops for supported destinations and opens a map route that users can follow in order.

The condition-aware layer simulates how the app would behave with live APIs: rain shifts recommendations toward covered stops, heat protects midday pacing, low health reduces walking load, late arrival compresses blocks, and heavy traffic clusters routes.

## Demo Input

- Destination: Udaipur
- Stay / Pickup Area: Lake Pichola stay
- Dates: any 3-day range
- Budget Level: Moderate
- Desired Vibe: Romantic slow travel
- Pace: Relaxed
- Sustainability: High priority
- Weather: Clear
- Health / Energy: Normal
- Delay Status: On time
- Traffic: Moderate
- Likes: lake views, heritage stays, quiet cafes, local art
- Dislikes: rushed sightseeing, loud party areas, long queues
- Dietary/Travel Style: vegetarian, slow mornings, short cab rides, boutique experiences

## Local Run

Because this is a static app, open `index.html` directly or run a small local server:

```bash
python3 -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deployment

Use any static hosting platform:

- Netlify: drag the folder into Netlify Drop.
- Vercel: import the folder as a static project.
- GitHub Pages: publish the repository root.

No build step is required.
# palsbmsit
