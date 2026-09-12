import { ExperienceItem, FeaturedEventCaseStudy } from '../types';

export const experienceData: ExperienceItem[] = [
  {
    id: 'event-vibes',
    role: 'Digital Marketing Manager & Event Coordinator',
    company: 'Event Vibes',
    period: '2023 — Present',
    location: 'Nepal',
    type: 'Leadership & Production',
    description: 'Working on digital marketing strategy, promotional campaigns, and real-world concert and event management for live musical productions in Nepal.',
    responsibilities: [
      'Leading digital marketing campaigns and online promotional strategies across social platforms',
      'Assisting in real-world event coordination, artist liaison, and backstage logistics',
      'Coordinating on-ground event management, media coverage, and live engagement',
      'Collaborating with event production teams to ensure smooth audience and stage operations'
    ],
    featured: true
  },
  {
    id: 'creative-technology-explorer',
    role: 'Visual Creator & Technology Explorer',
    company: 'Independent / Creative Projects',
    period: '2022 — Present',
    location: 'Nepal',
    type: 'Creative & Engineering',
    description: 'Exploring software development, visual filmmaking, photography, and motorcycle expeditions across Nepal and India.',
    responsibilities: [
      'Documenting motorcycle travel routes, high-altitude terrain, and cultural experiences',
      'Filmmaking, photography, and digital video editing for storytelling',
      'Prototyping software applications and exploring AI workflows'
    ],
    featured: false
  }
];

export const featuredEventCaseStudy: FeaturedEventCaseStudy = {
  title: "From an idea to a real event.",
  subtitle: "Concert in Butwal",
  location: "Butwal, Nepal",
  date: "Editable Date", // Room to add exact date
  venue: "Editable Venue / Stadium, Butwal", // Room to add venue
  team: "Event Vibes Core Team & Production Crew", // Room to add team
  role: "Digital Marketing Manager & On-Ground Coordination",
  artists: ["Neetesh Jung Kunwar", "Rockheads"],
  tagline: "Bringing thousands of music lovers together for an unforgettable night of live sound and collective celebration in Butwal.",
  responsibilities: [
    "Digital marketing campaigns & social media rollout",
    "On-ground logistics & artist coordination",
    "Stage timing & backstage communication support",
    "Live event management and audience flow coordination"
  ],
  image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1400&auto=format&fit=crop",
  bannerPhrases: [
    "IDEA",
    "PLANNING",
    "PROMOTION",
    "COORDINATION",
    "EVENT",
    "EXPERIENCE"
  ],
  stages: [
    {
      step: "01",
      title: "Idea",
      description: "Recognizing the passion for live music in Butwal and envisioning an electric concert featuring Nepal's beloved acts: Neetesh Jung Kunwar and Rockheads."
    },
    {
      step: "02",
      title: "Planning",
      description: "Mapping out the stage requirements, production timelines, vendor alignment, venue layouts, and artist schedules for a seamless execution."
    },
    {
      step: "03",
      title: "Promotion",
      description: "Crafting targeted digital marketing campaigns, teaser reels, artist announcements, and distribution strategies to build anticipation across the city."
    },
    {
      step: "04",
      title: "Coordination",
      description: "Managing on-ground coordination, artist hospitality, soundcheck schedules, backstage passes, and technical communications."
    },
    {
      step: "05",
      title: "Event",
      description: "Executing the live concert day: gate management, stage transitions, lighting, and real-time troubleshooting behind the scenes."
    },
    {
      step: "06",
      title: "Experience",
      description: "When the lights lit up the stage and the artists performed their anthems with the crowd chanting every lyric — a shared, lasting memory for Butwal."
    }
  ],
  audienceNote: "Statistics and exact attendance figures are maintained officially by the Event Vibes production archives. Room is provided below for photographs, posters, and video footage.",
  eventPhotos: [
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop"
  ],
  posters: [],
  videoUrl: undefined
};
