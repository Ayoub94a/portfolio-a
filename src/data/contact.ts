import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import type { ContactData } from "./types";

export const contact: ContactData = {
  headline: "Open to Full-Stack Developer opportunities",
  message:
    "I'm currently looking for new opportunities as a Full-Stack Developer. Feel free to contact me for internships, junior developer positions, freelance projects, or collaborations. I'll get back to you as soon as possible.",

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