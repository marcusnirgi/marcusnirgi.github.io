import { HStack, Icon, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { LuBookOpen } from "react-icons/lu";
import { SectionSeparator, SectionTitle } from "../content-section-title";

export type BlogPostItem = {
  id: string;
  title: string;
  description: string;
  pubDate: string;
};

function formatSystemDate(dateString: string): string {
  const date = new Date(dateString);
  return isNaN(date.getTime()) ? dateString : date.toLocaleDateString();
}

export function BlogContentSection({ posts = [] }: { posts?: BlogPostItem[] }) {
  return (
    <Stack gap="8" w="100%">
      <Stack gap="2" alignItems="start">
        <SectionTitle>
          <Icon size="lg">
            <LuBookOpen />
          </Icon>
          BLOG
        </SectionTitle>
        <SectionSeparator borderWidth="2px" />
      </Stack>

      <VStack alignItems="stretch" gap="4" w="100%">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            textDecoration="none"
            className="project-row"
            display="block"
            p="4"
            bg="bg.subtle/50"
            borderRadius="md"
            borderWidth="1px"
            borderColor="border"
            _hover={{
              bg: "bg.subtle",
              borderColor: "accent.muted",
              textDecoration: "none",
            }}
            _focusVisible={{
              outline: "2px solid var(--chakra-colors-accent)",
              outlineOffset: "2px",
            }}
          >
            <HStack
              justifyContent="space-between"
              alignItems="baseline"
              wrap="wrap"
              gap="2"
            >
              <Text textStyle="lg" fontWeight="semibold" color="fg" lineHeight="1.35">
                {post.title}
              </Text>
              <Text as="span" textStyle="sm" color="fg.subtle" whiteSpace="nowrap">
                <time dateTime={post.pubDate}>
                  {formatSystemDate(post.pubDate)}
                </time>
              </Text>
            </HStack>
            {post.description && (
              <Text textStyle="sm" color="fg.muted" mt="1">
                {post.description}
              </Text>
            )}
          </Link>
        ))}
      </VStack>
    </Stack>
  );
}
