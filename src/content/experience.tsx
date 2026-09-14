import { Image, Span } from "@chakra-ui/react";
import type { ReactNode } from "react";
import invendorLogo from "../assets/invendor_logo_small.svg";

export type Experience = {
  date: string;
  description: ReactNode;
};

export const experiences: Experience[] = [
  {
    date: "Sept 2026",
    description: "Graduated military service",
  },
  {
    date: "Sept 2025",
    description: "Began military service",
  },
  {
    date: "Jun/Jul 2025",
    description: (
      <>
        Graduated{" "}
        <Image
          src="/tthk_logo.jpeg"
          alt="TTHK"
          h="1em"
          w="auto"
          display="inline-block"
          verticalAlign="middle"
        />{" "}
        <Span color="accent.fg" fontWeight="medium">
          Tallinn Industrial Education Centre
        </Span>{" "}
        with honors 🏆
        <Span display="block" fontSize="sm" color="fg.muted" fontWeight="light">
          - Junior Software Developer qualification
        </Span>
      </>
    ),
  },
  {
    date: "2024",
    description: (
      <>
        Started internship at{" "}
        <Image
          src={invendorLogo}
          alt="Invendor"
          h="1em"
          w="auto"
          display="inline-block"
          verticalAlign="middle"
        />{" "}
        <Span color="accent.fg" fontWeight="medium">
          Invendor
        </Span>
        <Span display="block" fontSize="sm" color="fg.muted" fontWeight="light">
          - Software Developer / Technical Intern
        </Span>
      </>
    ),
  },
  {
    date: "2022",
    description: (
      <>
        Attended Tallinn Polytechnic School
        <Span display="block" fontSize="sm" color="fg.muted" fontWeight="light">
          - Electrical Engineering
        </Span>
      </>
    ),
  },
  {
    date: "2021",
    description: "Graduated Ruila Primary School",
  },
];
