import {
  Badge,
  Box,
  Button,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import type { ReactNode } from "react";
import { LuArrowLeft, LuArrowUpRight } from "react-icons/lu";
import { SectionSeparator, SectionTitle } from "../content-section-title";
import type { Project, ProjectLink } from "../project";

export type ProjectBadge = {
  label: string;
  icon?: ReactNode;
};

type ProjectDetailViewProps = {
  project: Project;
  badges?: ProjectBadge[];
  extraContent?: ReactNode;
  onBack: () => void;
};

export function ProjectDetailView({
  project,
  badges = [],
  extraContent,
  onBack,
}: ProjectDetailViewProps) {
  const links: ProjectLink[] =
    project.links && project.links.length > 0
      ? project.links
      : [{ label: project.url.replace(/^https?:\/\//, ""), href: project.url }];

  return (
    <VStack w="100%" alignItems="stretch" gap="0">
      <BackButton onClick={onBack} />

      <VStack alignItems="start" gap="1" w="100%" mt="2" mb="4">
        <HStack w="100%" gap="3" wrap="wrap" alignItems="center">
          <SectionTitle>{project.name}</SectionTitle>

          <Badge
            colorPalette="accent"
            variant="subtle"
            size="sm"
            flexShrink="0"
          >
            {project.category}
          </Badge>
        </HStack>

        {badges.length > 0 && (
          <HStack wrap="wrap" gap="2" w="100%">
            {badges.map((badge) => (
              <HStack
                key={badge.label}
                bg="bg.subtle"
                borderWidth="1px"
                borderColor="bg.muted"
                borderRadius="md"
                px="2"
                py="1"
                gap="1.5"
                color="fg.muted"
                fontSize="sm"
              >
                {badge.icon}
                <Text>{badge.label}</Text>
              </HStack>
            ))}
          </HStack>
        )}
      </VStack>

      <Box
        w="100%"
        bg="bg.subtle"
        borderWidth="2px"
        borderColor="bg.muted"
        borderRadius="md"
        overflow="hidden"
      >
        <Box
          w="100%"
          h={{ base: "11rem", md: "15rem", lg: "18rem" }}
          p={{ base: "3", md: "5" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            maxW="100%"
            maxH="100%"
            objectFit="contain"
            borderRadius="sm"
          />
        </Box>

        <Box w="100%" borderTopWidth="1px" borderColor="bg.muted" />

        <HStack
          w="100%"
          gap={{ base: "3", md: "5" }}
          px={{ base: "3", md: "5" }}
          pt="2.5"
          pb="2.5"
          wrap="wrap"
          bg="bg.panel/60"
        >
          {links.map((link) => (
            <ProjectLinkAnchor key={link.href} link={link} />
          ))}
        </HStack>
      </Box>

      <VStack alignItems="start" gap="4" w="100%" mt="6">
        <Box
          w="100%"
          className="project-detail-body"
          color="fg.muted"
          fontSize={{ base: "sm", md: "md" }}
          lineHeight="1.75"
        >
          {project.details}
        </Box>

        {extraContent}
      </VStack>

      <Box w="100%" mt="8">
        <SectionSeparator />
        <BackButton onClick={onBack} label="Back to all projects" />
      </Box>
    </VStack>
  );
}

function ProjectLinkAnchor({ link }: { link: ProjectLink }) {
  return (
    <Link
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="project-detail-link"
      display="inline-flex"
      alignItems="center"
      gap="1.5"
      fontSize="sm"
      fontWeight="semibold"
      color="accent.fg"
      textDecoration="none"
      _hover={{ color: "accent.emphasized" }}
    >
      <Text as="span" className="project-detail-link-label">
        {link.label}
      </Text>
      <Icon fontSize="sm">
        <LuArrowUpRight />
      </Icon>
    </Link>
  );
}

function BackButton({
  onClick,
  label = "Back to projects",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <Button
      type="button"
      onClick={onClick}
      alignSelf="flex-start"
      px="3"
      py="1.5"
      h="auto"
      borderRadius="md"
      bg="bg.subtle"
      borderWidth="2px"
      borderColor="bg.muted"
      color="fg.muted"
      fontSize="sm"
      fontWeight="semibold"
      cursor="pointer"
      transition="background-color 0.18s ease, border-color 0.18s ease, color 0.18s ease"
      _hover={{
        bg: "bg.muted",
        borderColor: "accent.muted",
        color: "accent.fg",
      }}
      _focusVisible={{
        outline: "2px solid",
        outlineColor: "accent.focusRing",
        outlineOffset: "2px",
      }}
    >
      <Icon>
        <LuArrowLeft />
      </Icon>
      {label}
    </Button>
  );
}
