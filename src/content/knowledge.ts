import { LuComputer, LuPencil, LuMicrochip, LuWrench } from "react-icons/lu";
import type { KnowledgeCard } from "./sections/about-content-section";

export const knowledgeCards: KnowledgeCard[] = [
  {
    icon: LuComputer,
    title: "Full-stack Development",
    description:
      "I build web applications from the frontend to the backend, including APIs, databases, authentication, and everything in between.",
  },
  {
    icon: LuPencil,
    title: "UI/UX Design",
    description:
      "I enjoy turning ideas into interfaces and have spent a lot of time designing and prototyping in Figma.",
  },
  {
    icon: LuMicrochip,
    title: "Embedded Systems",
    description:
      "I've worked on software for SoCs and enjoy getting close to the hardware when a project calls for it.",
  },
  {
    icon: LuWrench,
    title: "Game Scripting & Modding",
    description:
      "This is where I started programming. I've spent years scripting, modifying, and building systems for games.",
  },
];
