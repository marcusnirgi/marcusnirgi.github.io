import { LuBinary } from "react-icons/lu";
import {
  SiTypescript,
  SiReact,
  SiVite,
  SiNodedotjs,
  SiPython,
  SiSharp,
  SiCplusplus,
  SiC,
  SiLua,
  SiPostgresql,
  SiLinux,
  SiDocker,
  SiGit,
  SiNatsdotio,
  SiFigma,
} from "react-icons/si";
import type { Technology } from "./sections/about-content-section";

export const usedTechnologies: Technology[] = [
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Vite", icon: SiVite },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Python", icon: SiPython },
  { name: "C#", icon: SiSharp },
  { name: "C++", icon: SiCplusplus },
  { name: "C", icon: SiC },
  { name: "Lua", icon: SiLua },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Linux", icon: SiLinux },
  { name: "Docker", icon: SiDocker },
  { name: "Git", icon: SiGit },
  { name: "NATS.io", icon: SiNatsdotio },
  { name: "Figma", icon: SiFigma },
  { name: "ImHex", icon: LuBinary },
];
