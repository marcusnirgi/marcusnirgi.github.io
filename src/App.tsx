import {
  Avatar,
  Box,
  Field,
  HStack,
  Icon,
  Link,
  Separator,
  Stack,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";

import { Provider } from "./components/ui/provider";

import {
  AboutContentSection,
  type KnowledgeCard,
  type Technology,
} from "./content/sections/about-content-section";
import { usedTechnologies } from "./content/technology";
import { knowledgeCards } from "./content/knowledge";
import { profileTraits, type ProfileDetails } from "./content/profile";
import { NavBar } from "./content/navbar";
import { useEffect, useState } from "react";
import { ProjectContentSection } from "./content/sections/project-content-section";
import { ExperienceContentSection } from "./content/sections/experience-content-section";
import { SiGithub } from "react-icons/si";

function App() {
  return (
    <Provider>
      <Box
        w="100%"
        minH="100dvh"
        overflowX="hidden"
        alignItems="center"
        justifyItems="center"
        alignContent="center"
        bg="bg"
      >
        <Stack
          w={{ base: "100%", lg: "90%" }}
          h={{ base: "auto", lg: "90dvh" }}
          p="0"
          direction={{ base: "column", lg: "row" }}
          alignItems="stretch"
          justifyContent="center"
          gap={{
            base: "0",
            lg: "4",
          }}
        >
          <ProfilePanel profileDetails={profileTraits} />
          <ContentPanel
            knowledgeCards={knowledgeCards}
            usedTechnologies={usedTechnologies}
          />
        </Stack>
      </Box>
    </Provider>
  );
}

function ProfilePanel({
  profileDetails,
}: {
  profileDetails: ProfileDetails[];
}) {
  return (
    <VStack
      w={{ base: "100%", lg: "33%" }}
      h={{ base: "auto", lg: "100%" }}
      p={{ base: "4", lg: "8" }}
      bg="bg.panel"
      borderStyle="solid"
      borderWidth="2px"
      borderColor="bg.muted"
      borderRadius="md"
      alignItems="start"
    >
      <VStack w="100%" p="4" gap="4">
        <Box w={{ base: "10rem", lg: "12rem" }} h="auto">
          <Avatar.Root size="full">
            <Avatar.Fallback name="Marcus Nirgi" />
            <Avatar.Image src="avatar.png" />
          </Avatar.Root>
        </Box>

        <VStack gap={0}>
          <Text textStyle="xl" fontWeight="semibold">
            Marcus Nirgi
          </Text>

          <Text textStyle="md" fontWeight="normal">
            Software Developer
          </Text>

          <Link
            variant="underline"
            textStyle="md"
            fontWeight="normal"
            href="https://github.com/marcusnirgi/"
          >
            <Icon>
              <SiGithub />
            </Icon>
            github.com/marcusnirgi
          </Link>
        </VStack>
      </VStack>

      <Separator
        orientation="horizontal"
        w="100%"
        borderWidth="1px"
        borderColor="accent"
      />

      <VStack alignItems="start" gap={{ base: "4", lg: "8" }} p="4">
        {profileDetails.map((detail) => (
          <ProfileDetail key={detail.label} detail={detail} />
        ))}
      </VStack>
    </VStack>
  );
}

function ProfileDetail({ detail }: { detail: ProfileDetails }) {
  const { icon, label, value } = detail;

  return (
    <HStack alignItems="stretch">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        aspectRatio="1"
        bg="bg.emphasized"
        borderRadius="md"
      >
        <Icon size="lg" color="accent" minW="3rem">
          {icon({})}
        </Icon>
      </Box>

      <Field.Root>
        <Field.Label color="fg.subtle">{label}</Field.Label>
        <Text>{value}</Text>
      </Field.Root>
    </HStack>
  );
}

const sections = ["about", "projects", "experience"] as const;
type SectionId = (typeof sections)[number];

function sectionFromHash(): SectionId {
  const hash = window.location.hash.replace("#", "");
  return (sections as readonly string[]).includes(hash)
    ? (hash as SectionId)
    : "about";
}

function ContentPanel({
  knowledgeCards,
  usedTechnologies,
}: {
  knowledgeCards: KnowledgeCard[];
  usedTechnologies: Technology[];
}) {
  const [activeSectionId, setActiveSectionId] =
    useState<SectionId>(sectionFromHash);
  const handleSectionChange = (sectionId: string) => {
    if ((sections as readonly string[]).includes(sectionId)) {
      setActiveSectionId(sectionId as SectionId);
    }
  };

  useEffect(() => {
    const onHashChange = () => setActiveSectionId(sectionFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  const showTabs = useBreakpointValue({ base: false, lg: true }) ?? true;

  return (
    <VStack
      flex="1"
      w={{ base: "100%", lg: "auto" }}
      h={{ base: "auto", lg: "100%" }}
      alignItems="start"
      bg="bg.panel"
      borderStyle="solid"
      borderWidth="2px"
      borderColor="bg.muted"
      borderRadius="md"
    >
      {showTabs && (
        <NavBar
          activeSectionId={activeSectionId}
          setActiveSectionId={handleSectionChange}
        />
      )}
      <Box
        w="100%"
        flex="1"
        minH="0"
        overflowY={{ base: "visible", lg: "auto" }}
        p={4}
      >
        {showTabs ? (
          <>
            {activeSectionId === "about" && (
              <AboutContentSection
                knowledgeCards={knowledgeCards}
                usedTechnologies={usedTechnologies}
              />
            )}
            {activeSectionId === "projects" && <ProjectContentSection />}
            {activeSectionId === "experience" && <ExperienceContentSection />}
          </>
        ) : (
          <VStack w="100%" alignItems="stretch" gap="10">
            <AboutContentSection
              knowledgeCards={knowledgeCards}
              usedTechnologies={usedTechnologies}
            />
            <ProjectContentSection />
            <ExperienceContentSection />
          </VStack>
        )}
      </Box>
    </VStack>
  );
}

export default App;
