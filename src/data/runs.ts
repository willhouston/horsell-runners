export type RunInfo = {
  id: string;
  name: string;
  schedule: string;
  time: string;
  distance: string;
  pace: string;
  meetingPoint: string;
  whatToBring: string;
  whoFor: string;
  extra?: string;
};

export const runs: RunInfo[] = [
  {
    id: "wednesday-runs",
    name: "Wednesday Night Runs",
    schedule: "Every Wednesday evening",
    time: "19:15 start",
    distance: "3–6 miles, with regroup points",
    pace: "Chatty pace, with optional pick-ups for those who want them",
    meetingPoint: "Outside the Beijing Restaurant, Horsell, Surrey",
    whatToBring: "Hi-vis gear, a head torch in winter, and a sense of humour",
    whoFor: "All paces, from first-timers to seasoned runners",
    extra: "We offer a separate guided walk option on the same evening.",
  },
  {
    id: "wednesday-walks",
    name: "Wednesday Night Walks",
    schedule: "Every Wednesday evening",
    time: "19:15 start (same meeting point)",
    distance: "2–3 miles",
    pace: "Relaxed walk with friendly chat",
    meetingPoint: "Outside the Beijing Restaurant, Horsell, Surrey",
    whatToBring: "Comfortable shoes and layers",
    whoFor: "Anyone who prefers to walk but still wants the club vibe",
  },
  {
    id: "breakfast-club",
    name: "Saturday Breakfast Club",
    schedule: "Every Saturday morning",
    time: "08:00 start",
    distance: "4–8 miles, with route choices",
    pace: "Steady to social, finishing with coffee",
    meetingPoint: "Outside the Beijing Restaurant, Horsell, Surrey",
    whatToBring: "Cash or card for coffee, and a good appetite",
    whoFor: "Runners who like an early start and a breakfast reward",
  },
  {
    id: "duvet-club",
    name: "Sunday Duvet Club",
    schedule: "Every Sunday morning",
    time: "09:00 start",
    distance: "5–10 miles",
    pace: "Mostly easy, keeping the group together",
    meetingPoint: "Outside the Beijing Restaurant, Horsell, Surrey",
    whatToBring: "Water and layers depending on the weather",
    whoFor: "Ideal for longer, gentle weekend runs",
  },
];
