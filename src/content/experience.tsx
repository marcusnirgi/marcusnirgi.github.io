import { Image, Span, Text } from "@chakra-ui/react";
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
      <Text>
        <Text display="inline-flex" alignItems="center" gap="0.25em">
          Graduated <Image src="/tthk_logo.jpeg" alt="TTHK" h="1em" w="auto" />{" "}
          <Span color="red.400">Tallinn Industrial Education Centre</Span> with
          honors 🏆
        </Text>
        <Text fontSize="sm" color="fg.muted" fontWeight="light">
          - Junior Software Developer qualification
        </Text>
      </Text>
    ),
  },
  {
    date: "2024",
    description: (
      <Text>
        <Text display="inline-flex" alignItems="center" gap="0.25em">
          Started internship at{" "}
          <Image
            src={invendorLogo}
            alt="Invendor"
            style={{ height: "1em", width: "auto", display: "inline-block" }}
          />{" "}
          <Span color="blue.500">Invendor</Span>
        </Text>
        <Text fontSize="sm" color="fg.muted" fontWeight="light">
          - Technical/Software Development Intern
        </Text>
      </Text>
    ),
  },
  {
    date: "2022",
    description: "Studied at Tallinn Polytechnic School",
  },
  {
    date: "2021",
    description: "Graduated Ruila Primary School",
  },
];
