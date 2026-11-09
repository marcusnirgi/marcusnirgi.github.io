import {
  Box,
  HStack,
  Icon,
  Image,
  Pagination,
  Spacer,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { LuArrowUpRight, LuListTodo } from "react-icons/lu";
import {
  PaginationEllipsis,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "../../components/ui/pagination";
import {
  splitPages,
  useFitCount,
  usePagination,
} from "../../lib/use-fit-count";
import { SectionTitle, SectionSeparator } from "../content-section-title";
import { projects, type Project } from "../project";

/**
 * Row metrics, in px. `ROW_HEIGHT` must match what ProjectRow actually renders
 * (row padding + content + border) plus the gap between rows, because it is what
 * the fit calculation divides the list height by.
 */
const ROW_HEIGHT = { base: 78, md: 104, lg: 114 };
const MIN_VISIBLE = 1;
const MAX_VISIBLE = 12;

export function ProjectList({
  onSelect,
}: {
  onSelect: (slug: string) => void;
}) {
  const rowHeight = useBreakpointValue(ROW_HEIGHT) ?? ROW_HEIGHT.lg;
  const isHeightConstrained =
    useBreakpointValue({ base: false, lg: true }) ?? true;

  const { ref: listRef, count: pageSize } = useFitCount<HTMLDivElement>({
    rowHeight,
    min: MIN_VISIBLE,
    max: MAX_VISIBLE,
    enabled: isHeightConstrained,
    fallback: 4,
  });

  // Pages adapt to the measured height. A shorter final page is fine: every
  // row stays fully visible, so there is nothing to redistribute.
  const pages = splitPages(projects, pageSize);
  const { page, setPage } = usePagination(pages.length);
  const visibleProjects = pages[page - 1] ?? [];

  return (
    <VStack
      w="100%"
      h={{ base: "auto", lg: "100%" }}
      gap="4"
      alignItems="stretch"
    >
      <Box w="100%" flexShrink="0">
        <SectionTitle>
          {" "}
          <Icon size="lg">
            <LuListTodo />
          </Icon>
          WHAT I'VE WORKED ON
        </SectionTitle>

        <SectionSeparator borderWidth="2px" />
      </Box>

      <Box
        ref={listRef}
        w="100%"
        flex={{ base: "initial", lg: "1" }}
        minH="0"
        overflowY={{ base: "visible", lg: "auto" }}
        pe="1"
      >
        <VStack as="ul" w="100%" gap="1.5" alignItems="stretch" m="0" p="0">
          {visibleProjects.map((project) => (
            <ProjectRow
              key={project.slug}
              project={project}
              onSelect={onSelect}
            />
          ))}
        </VStack>
      </Box>

      {projects.length > pageSize && (
        <PaginationRoot
          count={projects.length}
          pageSize={pageSize}
          page={page}
          onPageChange={({ page: nextPage }) => setPage(nextPage)}
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
                pages.map((item, index) =>
                  item.type === "ellipsis" ? (
                    <PaginationEllipsis key={index} index={index} flex="1" />
                  ) : (
                    <PaginationItem
                      key={index}
                      type="page"
                      value={item.value}
                      flex="1"
                    />
                  ),
                )
              }
            </Pagination.Context>
            <PaginationNextTrigger />
          </HStack>
        </PaginationRoot>
      )}
    </VStack>
  );
}

const thumbSize = { base: "3.25rem", md: "4rem", lg: "4.5rem" };

function ProjectRow({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (slug: string) => void;
}) {
  return (
    <Box as="li" w="100%" listStyleType="none">
      <a
        href={`#project/${project.slug}`}
        className="group"
        onClick={(event) => {
          if (
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey ||
            event.button !== 0
          ) {
            return;
          }
          event.preventDefault();
          onSelect(project.slug);
        }}
        style={{ display: "block", textDecoration: "none", color: "inherit" }}
      >
        <Box
          className="project-row"
          display="flex"
          alignItems="center"
          w="100%"
          gap={{ base: "3", md: "3.5" }}
          p={{ base: "2", md: "2.5" }}
          bg="bg.subtle"
          borderWidth="2px"
          borderColor="bg.muted"
          borderRadius="md"
          _hover={{
            borderColor: "accent.muted",
            bg: "bg.muted",
          }}
        >
          <Box
            flexShrink="0"
            w={thumbSize}
            h={thumbSize}
            overflow="hidden"
            borderRadius="sm"
            borderWidth="1px"
            borderColor="border.muted"
          >
            <Image
              w="100%"
              h="100%"
              display="block"
              objectFit="contain"
              src={project.image}
              alt={`${project.name} logo`}
              transition="transform 0.25s ease"
              _groupHover={{ transform: "scale(1.06)" }}
            />
          </Box>

          <VStack align="start" gap="0.5" flex="1" minW="0">
            <HStack w="100%" gap="2" minW="0">
              <Text
                fontWeight="semibold"
                fontSize="md"
                lineHeight="1.2"
                truncate
              >
                {project.name}
              </Text>

              <TagChip label={project.category} variant="accent" />

              <Spacer />

              <Icon
                flexShrink="0"
                color="fg.subtle"
                opacity={{ base: "1", md: "0.35" }}
                transition="opacity 0.18s ease, color 0.18s ease"
                _groupHover={{ opacity: "1", color: "accent.fg" }}
              >
                <LuArrowUpRight />
              </Icon>
            </HStack>

            <Text
              className="clamp-2"
              fontSize="sm"
              lineHeight="1.4"
              color="fg.muted"
            >
              {project.description}
            </Text>

            <HStack wrap="wrap" gap="1.5" mt="1" hideBelow="md" w="100%">
              {project.tags.map((tag) => (
                <TagChip key={tag} label={tag} />
              ))}
            </HStack>
          </VStack>
        </Box>
      </a>
    </Box>
  );
}

export function TagChip({
  label,
  variant = "default",
}: {
  label: string;
  variant?: "default" | "accent";
}) {
  const accent = variant === "accent";

  return (
    <Box
      as="span"
      display="inline-flex"
      alignItems="center"
      px="2"
      py="0.5"
      borderRadius="sm"
      borderWidth="1px"
      borderColor={accent ? "accent.muted" : "border.emphasized"}
      bg={accent ? "accent.subtle" : "bg.panel"}
      color={accent ? "accent.fg" : "fg.muted"}
      fontSize="xs"
      fontWeight={accent ? "semibold" : "medium"}
      lineHeight="1.25"
      whiteSpace="nowrap"
      flexShrink="0"
    >
      {label}
    </Box>
  );
}
