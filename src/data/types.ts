import type { ComponentType } from "react";

export interface SocialItem {
  href: string;
  icon: ComponentType<{ size?: number }>;
  label: string;
}

export interface HeroData {
  name: string;
  roles: string[];
  tagline: string;
  email: string;
  socials: SocialItem[];
}

export interface AboutData {
  avatar: string;
  headline: string;
  paragraphs: string[];
  interests: string[];
  stats: {
    years: number;
    projects: number;
  };
}

export type SkillLevel =  "advanced" | "intermediate" | "expert";

export interface Skill {
  name: string;
  icon: string;
  level: SkillLevel;
}

export interface Project {
  id: number;
  emoji: string;
  title: string;
  year: string;
  category: string;
  description: string;
  longDescription: string;
  stack: string[];
  github: string | null;
  live: string | null;
}

export interface ExperienceItem {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
}

export interface ContactData {
  headline: string;
  message: string;
  email: string;
  socials: SocialItem[];
}