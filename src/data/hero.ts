import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { HeroData } from "./types";

export const hero: HeroData = {
  name: "Ayoub ELKADIRI",

  roles: [
    "Full-Stack Developer",
    "React Developer",
    "Backend Developer",
  ],

  tagline:
    "Full-Stack developer passionate about building modern, scalable, and user-friendly web applications using React, Node.js, Spring Boot, and GraphQL.",

  email: "ayoubelkadiri2001@gmail.com",

  socials: [
    {
      href: "https://github.com/Ayoub94a",
      icon: FiGithub,
      label: "GitHub",
    },
    {
      href: "https://linkedin.com/in/ayoub-elkadiri-755a052a1",
      icon: FiLinkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:ayoubelkadiri2001@gmail.com",
      icon: FiMail,
      label: "Email",
    },
  ],
};