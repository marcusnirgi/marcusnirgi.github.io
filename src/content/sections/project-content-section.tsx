import {
  Box,
  Grid,
  HStack,
  Icon,
  Image,
  Pagination,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { LuEye, LuListTodo } from "react-icons/lu";
import {
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../components/ui/pagination";
import { SectionTitle, SectionSeparator } from "../content-section-title";
import { projects, type Project } from "../project";

export function ProjectContentSection() {
  const [page, setPage] = useState(1);
  const pageSize = useBreakpointValue({ base: 2, md: 4, lg: 6 }) ?? 6;
  const totalPages = Math.ceil(projects.length / pageSize);
  const clampedPage = Math.min(page, totalPages);
  const visibleProjects = projects.slice(
    (clampedPage - 1) * pageSize,
    clampedPage * pageSize,
  );

  return (
    <VStack w="100%" h="100%" gap="4" alignItems="start">
      <Box w="100%" flex="1" minH="0">
        <SectionTitle>
          {" "}
          <Icon size="lg">
            <LuListTodo />
          </Icon>
          WHAT I'VE WORKED ON
        </SectionTitle>

        <SectionSeparator borderWidth="2px" />

        <Grid
          w="100%"
          h="100%"
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          templateRows={{
            base: "repeat(2, minmax(12rem, 16rem))",
            md: "repeat(2, minmax(13rem, 17rem))",
            lg: "repeat(2, minmax(13rem, 13rem))",
          }}
          gap="8"
        >
          {visibleProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </Grid>
      </Box>

      <PaginationRoot
        count={projects.length}
        pageSize={pageSize}
        page={clampedPage}
        onPageChange={({ page }) => setPage(page)}
        w={{ base: "100%", md: "75%", lg: "50%" }}
        mx="auto"
        flexShrink="0"
        size="md"
        variant="solid"
        colorPalette="accent"
      >
        <HStack w="100%" gap="2">
          <PaginationPrevTrigger />
          <Pagination.Context>
            {({ pages }) =>
              pages.map((page, index) =>
                page.type === "ellipsis" ? (
                  <PaginationEllipsis key={index} index={index} flex="1" />
                ) : (
                  <PaginationItem
                    key={index}
                    type="page"
                    value={page.value}
                    flex="1"
                  />
                ),
              )
            }
          </Pagination.Context>
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </VStack>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <VStack alignItems="start" gap="2" h="100%" minH="0">
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "100%",
          flex: "1 1 0%",
          minHeight: 0,
          position: "relative",
          display: "block",
          overflow: "hidden",
          borderRadius: "0.375rem",
        }}
      >
        <Image
          w="100%"
          h="100%"
          display="block"
          objectFit="contain"
          src={project.image}
          alt={`${project.name} preview`}
        />

        <VStack
          position="absolute"
          inset="0"
          alignItems="center"
          justifyContent="center"
          bg="blackAlpha.600"
          color="white"
          opacity="0"
          transition="opacity 0.2s ease"
          _hover={{
            opacity: 1,
          }}
        >
          <LuEye size={32} />
        </VStack>
      </a>

      <Text fontWeight="semibold" lineHeight="1.3">
        {project.name}
      </Text>

      <Text color="fg.subtle" lineHeight="1.3">
        {project.description}
      </Text>
    </VStack>
  );
}
