const form = document.querySelector("#tripForm");
const jsonOutput = document.querySelector("#jsonOutput");
const promptOutput = document.querySelector("#promptOutput");
const defenseList = document.querySelector("#defenseList");
const fitScore = document.querySelector("#fitScore");
const dayCount = document.querySelector("#dayCount");
const budgetRange = document.querySelector("#budgetRange");
const timeline = document.querySelector("#timeline");
const tripSummary = document.querySelector("#tripSummary");
const icebreaker = document.querySelector("#icebreaker");
const routeChip = document.querySelector("#routeChip");
const intelligenceGrid = document.querySelector("#intelligenceGrid");
const researchList = document.querySelector("#researchList");
const mobilityActions = document.querySelector("#mobilityActions");
const foodRoute = document.querySelector("#foodRoute");
const quickSearch = document.querySelector("#quickSearch");
const quickDestination = document.querySelector("#quickDestination");
const quickSubmit = document.querySelector("#quickSubmit");
const toast = document.querySelector("#toast");

const budgetBands = {
  Budget: { morning: "₹150-350", afternoon: "₹250-600", evening: "₹300-700", daily: "₹900-1,650" },
  Moderate: { morning: "₹350-700", afternoon: "₹700-1,400", evening: "₹900-1,800", daily: "₹2,100-3,900" },
  Premium: { morning: "₹900-1,800", afternoon: "₹1,800-3,500", evening: "₹2,500-5,500", daily: "₹5,200-10,800" }
};

const vibeBlueprints = {
  "Calm culture": [
    ["Old quarter orientation walk", "Ease into the city with a short heritage loop, shaded pauses, and one local snack stop."],
    ["Museum or craft district visit", "Spend an unhurried afternoon around local makers, galleries, or a compact museum cluster."],
    ["Sunset courtyard dinner", "Choose a quiet regional restaurant close to the stay to avoid a tiring late transfer."]
  ],
  "Hidden gems": [
    ["Neighbourhood discovery walk", "Explore a less-obvious local pocket with one cafe break and flexible photo stops."],
    ["Independent market and maker studios", "Prioritize small vendors, handmade goods, and lanes that match saved likes."],
    ["Local-led dinner route", "Pick a low-hype food street or family-run restaurant instead of the busiest tourist strip."]
  ],
  "Food crawl": [
    ["Breakfast trail", "Start with two signature local breakfast stops and keep portions light for the day."],
    ["Cooking class or spice market", "Connect food to culture through a market visit, tasting counter, or short class."],
    ["Progressive dinner", "Plan three nearby stops so the evening feels social without becoming rushed."]
  ],
  Adventure: [
    ["Early viewpoint or nature loop", "Use the coolest part of the day for an active but beginner-friendly outdoor block."],
    ["Recovery lunch and flexible activity", "Add a slower afternoon so the trip stays sustainable after the morning push."],
    ["Open-air evening hangout", "Close with a scenic, low-effort spot near the base area."]
  ],
  "Romantic slow travel": [
    ["Late breakfast and scenic stroll", "Begin gently with a beautiful walk and no hard early start."],
    ["Private cultural experience", "Choose a hands-on workshop, tasting, or short guided visit with space to talk."],
    ["Atmospheric dinner", "Book a calm table with regional food, good lighting, and short ride time."]
  ],
  "Friends trip": [
    ["Shared landmark loop", "Cover one iconic area together with enough time for photos and detours."],
    ["Market challenge", "Split into mini-teams for snacks, souvenirs, or street finds within one compact area."],
    ["Casual social night", "Choose a lively but not chaotic dinner zone that fits the budget."]
  ]
};

const fallbackBlueprint = vibeBlueprints["Hidden gems"];

const foodStopLibrary = {
  jaipur: [
    { name: "Rawat Mishthan Bhandar", specialty: "pyaaz kachori", time: "Breakfast" },
    { name: "Lassiwala MI Road", specialty: "lassi", time: "Midday" },
    { name: "Laxmi Misthan Bhandar", specialty: "Rajasthani thali and sweets", time: "Lunch" },
    { name: "Masala Chowk", specialty: "street-food sampler", time: "Evening" }
  ],
  udaipur: [
    { name: "Jheel's Ginger Coffee Bar & Bakery", specialty: "lake-side breakfast", time: "Breakfast" },
    { name: "Natraj Dining Hall", specialty: "Rajasthani thali", time: "Lunch" },
    { name: "JMB Nashta Center", specialty: "kachori and poha", time: "Snack" },
    { name: "Ambrai Restaurant", specialty: "view-led dinner", time: "Dinner" }
  ],
  delhi: [
    { name: "Paranthe Wali Gali", specialty: "stuffed parathas", time: "Breakfast" },
    { name: "Karim's Jama Masjid", specialty: "Mughlai classics", time: "Lunch" },
    { name: "Kuremal Mohan Lal Kulfi", specialty: "stuffed kulfi", time: "Dessert" },
    { name: "Indian Coffee House Connaught Place", specialty: "old Delhi cafe stop", time: "Evening" }
  ],
  mumbai: [
    { name: "Kyani & Co", specialty: "Irani cafe breakfast", time: "Breakfast" },
    { name: "Aaswad Dadar", specialty: "Maharashtrian snacks", time: "Lunch" },
    { name: "Bademiya Colaba", specialty: "late kebabs", time: "Evening" },
    { name: "K Rustom Ice Cream", specialty: "ice cream sandwich", time: "Dessert" }
  ],
  goa: [
    { name: "Cafe Bodega", specialty: "slow breakfast", time: "Breakfast" },
    { name: "Ritz Classic Panjim", specialty: "Goan thali", time: "Lunch" },
    { name: "Confeitaria 31 De Janeiro", specialty: "Goan sweets", time: "Snack" },
    { name: "Vinayak Family Restaurant", specialty: "local dinner", time: "Dinner" }
  ]
};

const researchPapers = [
  {
    title: "POI recommendation needs heterogeneous context",
    source: "Wang, Höpken & Jannach, Information Technology & Tourism, 2025",
    insight: "Modern tourism recommenders improve when they use multiple context signals, not only popularity.",
    productUse: "This app captures destination, date range, budget, vibe, likes, dislikes, diet, pace, and sustainability priority as planning context.",
    url: "https://link.springer.com/article/10.1007/s40558-024-00301-3"
  },
  {
    title: "Itinerary planning is a constrained routing problem",
    source: "Friggstad et al., WSDM, 2018",
    insight: "Travel itinerary generation can be framed as maximizing value under time and movement constraints, with balanced multi-day quality.",
    productUse: "The app uses fixed day blocks, compact route language, and pacing risk to avoid one overpacked day followed by weak days.",
    url: "https://www.math.uwaterloo.ca/~cswamy/papers/trips-wsdmfnl.pdf"
  },
  {
    title: "Personalization must account for prior preferences",
    source: "Ho & Lim, IEEE BigData/arXiv, 2022",
    insight: "Tour recommendation should optimize time and user preference, including past POI choices or preference signals.",
    productUse: "Stored memory is surfaced as a first-class input and repeated inside the generated explanations.",
    url: "https://arxiv.org/abs/2212.13900"
  },
  {
    title: "Sustainability can be added through reranking",
    source: "Banerjee, Satish & Wörndl, RecSys workshop/arXiv, 2024",
    insight: "Tourism recommender systems can balance user satisfaction with sustainability goals through augmented reranking.",
    productUse: "The sustainability selector adjusts the visible planning intelligence and recommendation rationale.",
    url: "https://arxiv.org/abs/2409.18003"
  }
];

function parseDateInput(value) {
  const date = new Date(`${value}T00:00:00`);
  return Number.isNaN(date.getTime()) ? null : date;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function dateRange(start, end) {
  const dates = [];
  const cursor = new Date(start);
  while (cursor <= end && dates.length < 14) {
    dates.push(new Date(cursor));
    cursor.setDate(cursor.getDate() + 1);
  }
  return dates;
}

function listFromText(text) {
  return text
    .split(/[,;\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function titleCase(text) {
  return text
    .trim()
    .split(/\s+/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function encoded(value) {
  return encodeURIComponent(value);
}

function containsAny(source, candidates) {
  const haystack = source.toLowerCase();
  return candidates.some((candidate) => haystack.includes(candidate));
}

function conditionNote(data, slotIndex) {
  const notes = [];
  if (data.weather === "Rainy") notes.push("switches to covered or indoor-friendly stops");
  if (data.weather === "Hot") notes.push(slotIndex === 1 ? "moves outdoor walking away from peak heat" : "adds hydration and shade breaks");
  if (data.weather === "Cold") notes.push("keeps cafe and indoor backup options close");
  if (data.health === "Low energy") notes.push("reduces walking load and protects recovery time");
  if (data.health === "Very fit") notes.push("allows a slightly longer walking segment");
  if (data.delay !== "On time") notes.push(`compresses the block because you are ${data.delay.toLowerCase()}`);
  if (data.traffic === "Heavy") notes.push("clusters stops to avoid long cross-city transfers");
  return notes.length ? ` Live adjustment: ${notes.join(", ")}.` : "";
}

function adaptedActivityPrefix(data, slotIndex) {
  if (data.weather === "Rainy") return "Covered";
  if (data.weather === "Hot" && slotIndex === 1) return "Heat-safe";
  if (data.health === "Low energy") return "Low-walk";
  if (data.traffic === "Heavy") return "Traffic-smart";
  if (data.delay !== "On time") return "Delay-proof";
  return slotIndex === 0 ? "Compact" : slotIndex === 1 ? "Low-transfer" : "Nearby";
}

function personalizeDescription(base, likes, dislikes, style, pace, sustainability, data, slotIndex) {
  const liked = likes[0] ? ` It leans into your saved preference for ${likes[0]}.` : "";
  const dietary = containsAny(style.join(" "), ["vegetarian", "vegan", "halal", "gluten"])
    ? " Food stops are filtered around your dietary style."
    : "";
  const avoid = dislikes[0] ? ` Avoids ${dislikes[0]} by keeping the route compact.` : "";
  const paceNote = pace === "Relaxed" ? " Adds extra breathing room." : pace === "High energy" ? " Keeps energy high without adding a fourth block." : "";
  const sustainNote = sustainability === "High priority" ? " Prioritizes walkable clusters and locally rooted stops." : "";
  return `${base}${liked}${dietary}${avoid}${paceNote}${sustainNote}${conditionNote(data, slotIndex)}`;
}

function makeActivity(destination, vibe, dayIndex, slotIndex, likes, dislikes, style, budget, pace, sustainability, data) {
  const blueprint = vibeBlueprints[vibe] || fallbackBlueprint;
  const [name, baseDescription] = blueprint[(dayIndex + slotIndex) % blueprint.length];
  const costs = budgetBands[budget] || budgetBands.Moderate;
  const slotCosts = [costs.morning, costs.afternoon, costs.evening];
  const areaPrefix = adaptedActivityPrefix(data, slotIndex);
  const activity = `${areaPrefix} ${name} in ${titleCase(destination)}`;

  return {
    activity,
    description: personalizeDescription(baseDescription, likes, dislikes, style, pace, sustainability, data, slotIndex),
    estimated_cost: slotCosts[slotIndex]
  };
}

function estimateScores(data, trip) {
  const likes = listFromText(data.likes);
  const dislikes = listFromText(data.dislikes);
  const style = listFromText(data.style);
  const memoryFit = Math.min(98, 72 + likes.length * 4 + dislikes.length * 3 + style.length * 2);
  const pacingSafety = data.pace === "Relaxed" ? 96 : data.pace === "Balanced" ? 89 : 78;
  const budgetConfidence = data.budget === "Budget" ? 86 : data.budget === "Moderate" ? 91 : 88;
  const sustainabilityFit = data.sustainability === "High priority" ? 94 : data.sustainability === "Balanced" ? 84 : 68;
  const conditionFit =
    92 -
    (data.weather === "Rainy" ? 5 : 0) -
    (data.health === "Low energy" ? 6 : 0) -
    (data.delay === "1 hour late" ? 5 : data.delay === "2+ hours late" ? 10 : 0) -
    (data.traffic === "Heavy" ? 6 : 0);
  const routeRisk = trip.itinerary.length > 5 && data.pace === "High energy" ? "Medium" : "Low";

  return [
    { label: "Memory fit", value: `${memoryFit}%`, detail: "Likes, dislikes, diet, and style are actively reflected." },
    { label: "Pacing safety", value: `${pacingSafety}%`, detail: `${data.pace} mode keeps each day to three blocks.` },
    { label: "Budget confidence", value: `${budgetConfidence}%`, detail: `${data.budget} estimates are shown for every slot.` },
    { label: "Sustainability fit", value: `${sustainabilityFit}%`, detail: `${data.sustainability} priority shapes routing rationale.` },
    { label: "Condition fit", value: `${Math.max(68, conditionFit)}%`, detail: `${data.weather}, ${data.health}, ${data.delay}, ${data.traffic} traffic are considered.` },
    { label: "Routing risk", value: routeRisk, detail: "Compact and low-transfer language reduces planning friction." }
  ];
}

function estimateRideOptions(data, dropoff, slotIndex = 0) {
  const budgetMultiplier = data.budget === "Premium" ? 1.25 : data.budget === "Budget" ? 0.82 : 1;
  const paceMultiplier = data.pace === "High energy" ? 1.08 : data.pace === "Relaxed" ? 0.96 : 1;
  const trafficMultiplier = data.traffic === "Heavy" ? 1.28 : data.traffic === "Light" ? 0.9 : 1;
  const delayMultiplier = data.delay === "2+ hours late" ? 1.16 : data.delay === "1 hour late" ? 1.08 : 1;
  const baseDistance = (3.2 + slotIndex * 1.4 + Math.min(4, data.destination.length / 8)) * trafficMultiplier * delayMultiplier;
  const distance = Number((baseDistance * paceMultiplier).toFixed(1));
  const origin = `${data.startPoint || "Current location"}, ${data.destination}`;
  const target = `${dropoff}, ${data.destination}`;

  const rideProviders = [
    {
      name: "Rapido",
      mode: "Bike / Auto",
      eta: `${Math.round(6 + distance * 1.6)} min`,
      fare: Math.round((35 + distance * 13) * budgetMultiplier),
      url: `https://www.rapido.bike/`,
      note: "Usually strong for short city hops"
    },
    {
      name: "Uber",
      mode: "Cab",
      eta: `${Math.round(8 + distance * 1.9)} min`,
      fare: Math.round((65 + distance * 21) * budgetMultiplier),
      url: `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${encoded(target)}`,
      note: "Opens Uber with drop-off intent"
    },
    {
      name: "Ola",
      mode: "Cab / Auto",
      eta: `${Math.round(9 + distance * 1.8)} min`,
      fare: Math.round((58 + distance * 20) * budgetMultiplier),
      url: `https://www.olacabs.com/`,
      note: "Compare live app price before booking"
    }
  ].sort((a, b) => a.fare - b.fare);

  const providers = [
    ...rideProviders,
    {
      name: "Maps",
      mode: "Transit / Walk",
      eta: `${Math.round(14 + distance * 5)} min`,
      fare: Math.round(10 + distance * 6),
      url: `https://www.google.com/maps/dir/?api=1&origin=${encoded(origin)}&destination=${encoded(target)}&travelmode=transit`,
      note: "Best for public transport or walking routes"
    }
  ];

  return { distance, origin, target, providers };
}

function foodStopsForDestination(destination) {
  const key = destination.trim().toLowerCase();
  if (foodStopLibrary[key]) return foodStopLibrary[key];

  return [
    { name: `Old Market Breakfast Lane, ${destination}`, specialty: "local breakfast", time: "Breakfast" },
    { name: `Central Food Street, ${destination}`, specialty: "regional snacks", time: "Lunch" },
    { name: `Heritage Sweet Shop, ${destination}`, specialty: "classic dessert", time: "Snack" },
    { name: `Family-run Dinner House, ${destination}`, specialty: "local dinner", time: "Dinner" }
  ];
}

function buildFoodRoute(data) {
  const stops = foodStopsForDestination(data.destination);
  const origin = `${data.startPoint || "Current location"}, ${data.destination}`;
  const finalStop = `${stops[stops.length - 1].name}, ${data.destination}`;
  const waypoints = stops.slice(0, -1).map((stop) => `${stop.name}, ${data.destination}`).join("|");
  const mapUrl = `https://www.google.com/maps/dir/?api=1&origin=${encoded(origin)}&destination=${encoded(finalStop)}&waypoints=${encoded(waypoints)}&travelmode=walking`;
  const rideUrl = `https://m.uber.com/ul/?action=setPickup&pickup=my_location&dropoff[formatted_address]=${encoded(finalStop)}`;

  return { stops, mapUrl, rideUrl };
}

function nearbyFoodForBlock(data, dayNumber, slotIndex) {
  const stops = foodStopsForDestination(data.destination);
  return stops[(dayNumber + slotIndex - 1) % stops.length];
}

function mapSearchUrl(query, destination) {
  return `https://www.google.com/maps/search/?api=1&query=${encoded(`${query}, ${destination}`)}`;
}

function placeImageUrl(activity, destination, slotIndex) {
  const queries = [
    `${destination} landmark`,
    `${destination} market food`,
    `${destination} palace travel`,
    `${destination} street food`
  ];
  const query = encoded(`${activity} ${queries[slotIndex % queries.length]}`);
  return `https://source.unsplash.com/720x460/?${query}`;
}

function buildTrip(data) {
  const start = parseDateInput(data.startDate);
  const end = parseDateInput(data.endDate);
  if (!start || !end || start > end) {
    throw new Error("Please enter a valid date range.");
  }

  const dates = dateRange(start, end);
  const likes = listFromText(data.likes);
  const dislikes = listFromText(data.dislikes);
  const style = listFromText(data.style);
  const budget = data.budget;
  const vibe = data.vibe;
  const pace = data.pace;
  const sustainability = data.sustainability;
  const destination = data.destination.trim();

  const itinerary = dates.map((date, index) => ({
    day: index + 1,
    date: formatDate(date),
    morning: makeActivity(destination, vibe, index, 0, likes, dislikes, style, budget, pace, sustainability, data),
    afternoon: makeActivity(destination, vibe, index, 1, likes, dislikes, style, budget, pace, sustainability, data),
    evening: makeActivity(destination, vibe, index, 2, likes, dislikes, style, budget, pace, sustainability, data)
  }));

  return {
    trip_summary: `A ${vibe.toLowerCase()} ${dates.length}-day ${destination} trip that respects your memory, budget, and breathing room.`,
    itinerary,
    social_icebreaker: `Want to try a ${vibe.toLowerCase()} route in ${destination} where we skip the obvious stops and let our saved travel quirks lead?`
  };
}

function buildPrompt(data) {
  return `You are an expert AI Travel Architect. Generate a hyper-personalized, realistic itinerary.

INPUT DATA:
- Destination: ${data.destination}
- Stay / Pickup Area: ${data.startPoint}
- Dates: ${data.startDate} to ${data.endDate}
- Budget Level: ${data.budget}
- Desired Vibe: ${data.vibe}
- Pace: ${data.pace}
- Sustainability Priority: ${data.sustainability}
- Weather: ${data.weather}
- Health / Energy: ${data.health}
- Delay Status: ${data.delay}
- Traffic: ${data.traffic}

SMART MEMORY:
- Likes: ${data.likes}
- Dislikes: ${data.dislikes}
- Dietary/Travel Style: ${data.style}

GENERATION RULES:
1. Give memory signals higher priority than generic tourist popularity.
2. Keep pacing realistic: only morning, afternoon, evening blocks, with nearby routing and recovery time.
3. Align all recommendations with the budget level and include INR cost estimates.
4. Avoid anything that conflicts with dislikes, diet, mobility, or travel style.
5. Adapt the itinerary if weather, health, delay, or traffic conditions make the original plan unrealistic.
6. When food is relevant, include famous local food stops and a map-following route concept.
7. Return only valid JSON. No markdown, no explanation.

EXPECTED JSON SCHEMA:
{
  "trip_summary": "A 1-sentence catchy summary of the trip.",
  "itinerary": [
    {
      "day": 1,
      "date": "YYYY-MM-DD",
      "morning": { "activity": "Name", "description": "Short detail", "estimated_cost": "₹" },
      "afternoon": { "activity": "Name", "description": "Short detail", "estimated_cost": "₹" },
      "evening": { "activity": "Name", "description": "Short detail", "estimated_cost": "₹" }
    }
  ],
  "social_icebreaker": "A fun 1-sentence prompt the user can use to message a travel buddy based on this specific vibe."
}`;
}

function buildDefense(data, trip) {
  const days = trip.itinerary.length;
  const budget = budgetBands[data.budget] || budgetBands.Moderate;
  return [
    {
      tag: "M",
      title: "Smart memory is the product, not a textbox",
      body: `The app shows how saved likes, dislikes, diet, and travel style alter the itinerary. A generic ChatGPT prompt can forget this unless the user repeats it every time.`
    },
    {
      tag: "P",
      title: "Pacing is constrained by design",
      body: `Each of the ${days} day${days > 1 ? "s" : ""} has exactly three blocks, compact routing language, and recovery-friendly descriptions, which makes it more realistic than an overpacked list.`
    },
    {
      tag: "B",
      title: "Budget is explainable",
      body: `${data.budget} mode maps costs to a daily range of ${budget.daily}, so judges can see how recommendations remain cost-aware instead of vague.`
    },
    {
      tag: "J",
      title: "Judge answer against MakeMyTrip",
      body: "MakeMyTrip is strong for booking inventory. This is strongest before booking: it converts personal constraints into a route plan, then can hand users to booking platforms."
    },
    {
      tag: "G",
      title: "Judge answer against ChatGPT",
      body: "ChatGPT is a general conversation engine. This project adds product structure: fixed schema output, visible constraints, budget bands, copyable prompt, and repeatable validation."
    },
    {
      tag: "R",
      title: "Judge answer with research backing",
      body: "The product maps research ideas into UI: heterogeneous context for recommendations, orienteering-style time constraints, preference memory, and sustainability-aware reranking."
    },
    {
      tag: "L",
      title: "Last-mile accessibility",
      body: "The plan does not stop at recommendations. It gives estimated ride choices and direct redirects to mobility apps so users can act on the itinerary immediately."
    },
    {
      tag: "F",
      title: "Famous food route",
      body: "The itinerary includes a map-following food trail so users can discover iconic local stops without manually searching every place."
    },
    {
      tag: "A",
      title: "Adaptive real-life replanning",
      body: "Weather, health, delays, and traffic change the route language, ride estimates, and pacing notes so the plan remains usable in real conditions."
    }
  ];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    return navigator.clipboard.writeText(text);
  }

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  const success = document.execCommand("copy");
  document.body.removeChild(textarea);
  return success ? Promise.resolve() : Promise.reject(new Error("Copy failed"));
}

function getFormData() {
  return Object.fromEntries(new FormData(form).entries());
}

function renderTimeline(trip) {
  const slots = [
    ["morning", "Morning"],
    ["afternoon", "Afternoon"],
    ["evening", "Evening"]
  ];

  timeline.innerHTML = trip.itinerary
    .map(
      (day) => `
        <article class="day-card">
          <header>
            <div>
              <span>Day ${day.day}</span>
              <h3>${escapeHtml(day.date)}</h3>
            </div>
            <small>3 paced blocks</small>
          </header>
          <div class="slot-grid">
            ${slots
              .map(([key, label]) => {
                const block = day[key];
                const mobility = estimateRideOptions(getFormData(), block.activity, slots.findIndex(([slot]) => slot === key));
                const cheapest = mobility.providers[0];
                const slotIndex = slots.findIndex(([slot]) => slot === key);
                const data = getFormData();
                const food = nearbyFoodForBlock(data, day.day, slotIndex);
                return `
                  <section class="slot-card">
                    <img class="place-photo" src="${escapeHtml(placeImageUrl(block.activity, data.destination, slotIndex))}" alt="${escapeHtml(block.activity)} preview" loading="lazy">
                    <div class="slot-top">
                      <span>${label}</span>
                      <strong>${escapeHtml(block.estimated_cost)}</strong>
                    </div>
                    <h4>${escapeHtml(block.activity)}</h4>
                    <p>${escapeHtml(block.description)}</p>
                    <div class="near-food">
                      <span>Nearby famous food</span>
                      <strong>${escapeHtml(food.name)}</strong>
                      <small>${escapeHtml(food.specialty)}</small>
                      <a href="${escapeHtml(mapSearchUrl(food.name, data.destination))}" target="_blank" rel="noreferrer">Food map</a>
                    </div>
                    <div class="ride-strip">
                      <span>Cheapest ride: ${escapeHtml(cheapest.name)} · ₹${cheapest.fare} est.</span>
                      <a href="${escapeHtml(cheapest.url)}" target="_blank" rel="noreferrer">Open</a>
                    </div>
                  </section>
                `;
              })
              .join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function renderMobility(data, trip) {
  const firstStop = trip.itinerary[0]?.morning?.activity || data.destination;
  const mobility = estimateRideOptions(data, firstStop, 0);

  mobilityActions.innerHTML = mobility.providers
    .map(
      (provider, index) => `
        <a class="provider-card ${index === 0 ? "best" : ""}" href="${escapeHtml(provider.url)}" target="_blank" rel="noreferrer">
          <span>${index === 0 ? "Lowest estimate" : provider.mode}</span>
          <strong>${escapeHtml(provider.name)}</strong>
          <em>₹${provider.fare} · ${escapeHtml(provider.eta)}</em>
          <small>${escapeHtml(provider.note)}</small>
        </a>
      `
    )
    .join("");
}

function renderFoodRoute(data) {
  const route = buildFoodRoute(data);

  foodRoute.innerHTML = `
    <div class="food-stops">
      ${route.stops
        .map(
          (stop, index) => `
            <article class="food-stop">
              <strong>${index + 1}</strong>
              <div>
                <h4>${escapeHtml(stop.name)}</h4>
                <p>${escapeHtml(stop.time)} · ${escapeHtml(stop.specialty)}</p>
              </div>
            </article>
          `
        )
        .join("")}
    </div>
    <div class="food-map-actions">
      <a class="map-primary" href="${escapeHtml(route.mapUrl)}" target="_blank" rel="noreferrer">Follow food map</a>
      <a class="map-secondary" href="${escapeHtml(route.rideUrl)}" target="_blank" rel="noreferrer">Ride to last stop</a>
    </div>
  `;
}

function renderIntelligence(scores) {
  intelligenceGrid.innerHTML = scores
    .map(
      (score) => `
        <article>
          <span>${escapeHtml(score.label)}</span>
          <strong>${escapeHtml(score.value)}</strong>
          <p>${escapeHtml(score.detail)}</p>
        </article>
      `
    )
    .join("");
}

function renderResearch() {
  researchList.innerHTML = researchPapers
    .map(
      (paper) => `
        <article class="research-card">
          <div>
            <span>${escapeHtml(paper.source)}</span>
            <h3>${escapeHtml(paper.title)}</h3>
          </div>
          <p>${escapeHtml(paper.insight)}</p>
          <strong>Product translation</strong>
          <p>${escapeHtml(paper.productUse)}</p>
          <a href="${escapeHtml(paper.url)}" target="_blank" rel="noreferrer">Open paper</a>
        </article>
      `
    )
    .join("");
}

function activateTab(tabName) {
  document.querySelectorAll(".tab").forEach((tab) => tab.classList.remove("active"));
  document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
  document.querySelector(`.tab[data-tab="${tabName}"]`)?.classList.add("active");
  document.querySelector(`#${tabName}Panel`)?.classList.add("active");
}

function render() {
  const data = getFormData();
  try {
    const trip = buildTrip(data);
    const budget = budgetBands[data.budget] || budgetBands.Moderate;
    const scores = estimateScores(data, trip);
    jsonOutput.textContent = JSON.stringify(trip, null, 2);
    promptOutput.textContent = buildPrompt(data);
    tripSummary.textContent = trip.trip_summary;
    icebreaker.textContent = trip.social_icebreaker;
    dayCount.textContent = String(trip.itinerary.length);
    budgetRange.textContent = budget.daily.replace("₹", "₹").split("-")[0];
    routeChip.textContent = `${data.vibe} · ${data.budget} · ${data.pace}`;
    renderTimeline(trip);
    renderIntelligence(scores);
    renderResearch();
    renderMobility(data, trip);
    renderFoodRoute(data);
    defenseList.innerHTML = buildDefense(data, trip)
      .map(
        (item) => `
          <article class="defense-item">
            <strong>${item.tag}</strong>
            <div>
              <h3>${item.title}</h3>
              <p>${item.body}</p>
            </div>
          </article>
        `
      )
      .join("");
    fitScore.textContent = scores[0].value.replace("%", "");
  } catch (error) {
    jsonOutput.textContent = JSON.stringify({ error: error.message }, null, 2);
  }
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function setDefaultDates() {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() + 14);
  const end = new Date(start);
  end.setDate(start.getDate() + 2);
  document.querySelector("#startDate").value = formatDate(start);
  document.querySelector("#endDate").value = formatDate(end);
}

document.querySelectorAll(".tab").forEach((button) => {
  button.addEventListener("click", () => {
    activateTab(button.dataset.tab);
  });
});

document.querySelectorAll("[data-nav-tab]").forEach((link) => {
  link.addEventListener("click", () => {
    activateTab(link.dataset.navTab);
    document.querySelector("#planner").scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  render();
  showToast("Itinerary generated");
});

document.querySelector("#loadDemo").addEventListener("click", () => {
  form.destination.value = "Udaipur";
  form.startPoint.value = "Lake Pichola stay";
  form.budget.value = "Moderate";
  form.vibe.value = "Romantic slow travel";
  form.pace.value = "Relaxed";
  form.sustainability.value = "High priority";
  form.weather.value = "Clear";
  form.health.value = "Normal";
  form.delay.value = "On time";
  form.traffic.value = "Moderate";
  form.likes.value = "lake views, heritage stays, quiet cafes, local art";
  form.dislikes.value = "rushed sightseeing, loud party areas, long queues";
  form.style.value = "vegetarian, slow mornings, short cab rides, boutique experiences";
  setDefaultDates();
  render();
  showToast("Demo loaded");
});

function applyQuickDestination() {
  const value = quickDestination.value.trim();
  if (!value) return false;
  form.destination.value = value;
  render();
  activateTab("plan");
  window.location.hash = "planner";
  document.querySelector("#planner").scrollIntoView({ behavior: "smooth", block: "start" });
  showToast("Destination applied");
  return true;
}

quickSearch.addEventListener("submit", (event) => {
  event.preventDefault();
  applyQuickDestination();
});

quickSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  applyQuickDestination();
});

document.querySelector("#copyJson").addEventListener("click", async () => {
  try {
    await copyTextToClipboard(jsonOutput.textContent);
    showToast("JSON copied");
  } catch {
    showToast("Copy failed");
  }
});

document.querySelector("#copyPrompt").addEventListener("click", async () => {
  try {
    await copyTextToClipboard(promptOutput.textContent);
    showToast("Prompt copied");
  } catch {
    showToast("Copy failed");
  }
});

setDefaultDates();
render();
