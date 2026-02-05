export type Race = {
  name: string;
  date: string;
  location: string;
  distance: string;
  signupUrl?: string;
};

export const upcomingRaces: Race[] = [
  {
    name: "Woking Half Marathon",
    date: "2026-03-29",
    location: "Woking, Surrey",
    distance: "Half Marathon",
    signupUrl: "https://example.com/signup",
  },
  {
    name: "Surrey Hills 10K",
    date: "2026-05-10",
    location: "Box Hill, Surrey",
    distance: "10K",
    signupUrl: "https://example.com/signup",
  },
  {
    name: "Guildford Summer 5K",
    date: "2026-07-05",
    location: "Guildford, Surrey",
    distance: "5K",
    signupUrl: "https://example.com/signup",
  },
];

export const pastRaces: Race[] = [
  {
    name: "Horsell Common Trail Loop",
    date: "2025-10-19",
    location: "Horsell Common",
    distance: "10 miles",
  },
  {
    name: "Brooklands Santa Run",
    date: "2025-12-14",
    location: "Weybridge, Surrey",
    distance: "5K",
  },
  {
    name: "Surrey Spring 10K",
    date: "2025-04-20",
    location: "Surrey Sports Park",
    distance: "10K",
  },
];
