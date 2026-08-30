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
        Graduated{" "}
        <Image
          src="/tthk_logo.jpeg"
          alt="TTHK"
          h="1em"
          w="auto"
          display="inline-block"
          verticalAlign="middle"
        />{" "}
        <Span color="red.500" fontWeight="medium">
          Tallinn Industrial Education Centre
        </Span>{" "}
        with honors 🏆
        <Text fontSize="sm" color="fg.muted" fontWeight="light">
          {" "}
          - Junior Software Developer qualification{" "}
        </Text>
      </Text>
    ),
  },
  {
    date: "2024",
    description: (
      <Text>
        <Text>
          Started internship at{" "}
          <Image
            src={invendorLogo}
            alt="Invendor"
            h="1em"
            w="auto"
            display="inline-block"
            verticalAlign="middle"
          />{" "}
          <Span color="blue.500" fontWeight="medium">
            Invendor
          </Span>
        </Text>
        <Text fontSize="sm" color="fg.muted" fontWeight="light">
          - Technical/Software Development Intern
        </Text>
      </Text>
    ),
  },
  {
    date: "2022",
    description: (
      <Text>
        <Text display="inline-flex" alignItems="center" gap="0.25em">
          Attended Tallinn Polytechnic School
        </Text>
        <Text fontSize="sm" color="fg.muted" fontWeight="light">
          - Electrical Engineering
        </Text>
      </Text>
    ),
  },
  {
    date: "2021",
    description: "Graduated Ruila Primary School",
  },
];
