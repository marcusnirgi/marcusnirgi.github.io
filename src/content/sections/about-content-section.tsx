import {
  Box,
  Code,
  SimpleGrid,
  VStack,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import { SectionSeparator, SectionTitle } from "../content-section-title";
import {
  LuBook,
  LuComputer,
  LuInfo,
  LuWrench,
} from "react-icons/lu";
import { SiReact } from "react-icons/si";

export type KnowledgeCard = {
  icon: typeof LuComputer;
  title: string;
  description: string;
};

export type Technology = {
  name: string;
  icon: typeof SiReact;
};

export function AboutContentSection({
  knowledgeCards,
  usedTechnologies,
}: {
  knowledgeCards: KnowledgeCard[];
  usedTechnologies: Technology[];
}) {
  return (
    <>
      <SectionTitle>
        <Icon size="lg">
          <LuInfo />
        </Icon>
        ABOUT ME
      </SectionTitle>
      <SectionSeparator borderWidth="2px" />

      <Text fontSize="lg" lineHeight="1.8" color="fg.muted" maxW="65ch">
        I'm a software developer who got his start at age 13 from playing video
        games made by Valve. My favourite game then, and to this day, is
        Half-Life 2, which holds a special place in my heart. That led me into
        Half-Life 2 Roleplay in Garry's Mod, where I picked up my first
        scripting language:{" "}
        <Text as="span" color="blue.500" fontWeight="medium">
          Lua
        </Text>
        . From there, I started tinkering with just about everything I could get
        my hands on, from manipulating process memory in C++ to building
        software simply to better understand how software works. Along the way,
        I discovered a deep passion for programming and eventually fell in love
        with web development, particularly the combination of engineering and
        great UI. I decided that I wanted to spend my life improving myself,
        building things I'm proud of, and creating things that can do some good
        for society.
        <br />
        <br />
        <Code
          colorPalette="accent"
          variant="subtle"
          fontSize="sm"
          px="3"
          py="1"
          borderRadius="full"
        >
          i &lt;3 programming
        </Code>
      </Text>
      <Box my={4}>
        <SectionTitle>
          <Icon size="lg">
            <LuBook />
          </Icon>
          MY KNOWLEDGE
        </SectionTitle>
        <SectionSeparator />

        <SimpleGrid w="100%" columns={[1, null, 2]} gap="2">
          {knowledgeCards.map((item) => (
            <KnowledgeCard key={item.title} card={item} />
          ))}
        </SimpleGrid>
      </Box>

      <Box my={4}>
        <SectionTitle>
          {" "}
          <Icon size="lg">
            <LuWrench />
          </Icon>
          MY TOOLSET
        </SectionTitle>
        <SectionSeparator />

        <VStack w="100%" alignItems="start" gap="3">
          <HStack w="100%" wrap="wrap" gap="2">
            {usedTechnologies.map((technology) => (
              <TechnologyBadge key={technology.name} technology={technology} />
            ))}
          </HStack>
        </VStack>
      </Box>
    </>
  );
}

function KnowledgeCard({ card }: { card: KnowledgeCard }) {
  const { icon, title, description } = card;

  return (
    <HStack
      bg="bg.subtle"
      p="4"
      borderRadius="md"
      borderStyle="solid"
      borderColor="bg.muted"
      borderWidth="2px"
      gap="4"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxSize="3.5rem"
        flexShrink="0"
        aspectRatio="1"
        bg="bg.emphasized"
        borderRadius="md"
      >
        <Icon w="2rem" h="2rem" color="accent">
          {icon({})}
        </Icon>
      </Box>

      <VStack alignItems="start" minW="0" gap="0">
        <Text textStyle="lg" fontWeight="semibold">
          {title}
        </Text>

        <Text textStyle="md" color="fg.muted">
          {description}
        </Text>
      </VStack>
    </HStack>
  );
}

function TechnologyBadge({ technology }: { technology: Technology }) {
  const { name, icon } = technology;

  return (
    <HStack
      bg="bg.subtle"
      borderWidth="1px"
      borderColor="bg.muted"
      borderRadius="md"
      px="3"
      py="2"
      gap="2"
    >
      <Icon size="sm">{icon({})}</Icon>

      <Text fontSize="sm">{name}</Text>
    </HStack>
  );
}
