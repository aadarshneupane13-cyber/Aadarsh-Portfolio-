export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  icon: string;
}

export interface ProfileData {
  name: string;
  brand: string;
  location: string;
  tagline: string;
  dynamicStatement: string;
  supportingParagraph: string;
  exploringTopics: string[];
  email: string;
  instagram: string;
  linkedin: string;
  profileImage: string;
  logoImage?: string;
  fallbackInitials: string;
}

export interface WorldPillar {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  accent: string;
  stats?: string;
}

export interface EducationMilestone {
  id: string;
  institution: string;
  degree: string;
  status: string;
  year: string;
  location: string;
  description: string;
  website?: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  description: string;
  levelText?: string;
  category: 'core' | 'creative' | 'technical' | 'management';
  icon: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  featured?: boolean;
}

export interface FeaturedEventCaseStudy {
  title: string;
  subtitle: string;
  location: string;
  date?: string;
  venue?: string;
  team?: string;
  role: string;
  artists: string[];
  tagline: string;
  responsibilities?: string[];
  stages: {
    title: string;
    step: string;
    description: string;
  }[];
  audienceNote: string;
  bannerPhrases: string[];
  image: string;
  eventPhotos?: string[];
  posters?: string[];
  videoUrl?: string;
}

export interface ProjectItem {
  id: string;
  name: string;
  title: string;
  description: string;
  tagline: string;
  category: string;
  role: string;
  technology: string[];
  technologies: string[];
  idea: string;
  build: string;
  result: string;
  github?: string;
  live?: string;
  video?: string;
  image: string;
  featured?: boolean;
}

export interface TravelDestination {
  id: string;
  name: string;
  country: string;
  countryFlag: string;
  region: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  altitude?: string;
  story: string;
  highlight: string;
  photoCount: number;
  image: string;
  galleryImages: string[];
  year?: string;
  videoUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ALL' | 'TRAVEL' | 'MOTORCYCLES' | 'EVENTS' | 'FILMMAKING' | 'LIFE';
  location?: string;
  caption: string;
  image: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  credentialUrl?: string;
  link?: string;
  image?: string;
  category?: string;
  featured?: boolean;
}
