import { For, Stack, Timeline } from "@chakra-ui/react";
import { SectionTitle, SectionSeparator } from "../content-section-title";
import { experiences } from "../experience";

export function ExperienceContentSection() {
  return (
    <Stack gap="8" w="100%">
      <Stack gap="2" alignItems="start">
        <SectionTitle>EXPERIENCE</SectionTitle>
        <SectionSeparator borderWidth="2px" />
      </Stack>

      <Timeline.Root
        colorPalette="accent"
        showLastSeparator
        size="md"
        variant="outline"
      >
        <Timeline.Item>
          <Timeline.Content width="auto" minW="6rem">
            <Timeline.Title whiteSpace="nowrap" color="fg.muted">
              Sept 2026
            </Timeline.Title>
          </Timeline.Content>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Timeline.Title>
              Started looking for more exciting opportunities
            </Timeline.Title>
          </Timeline.Content>
        </Timeline.Item>
        <For each={experiences}>
          {(experience) => (
            <Timeline.Item key={experience.date}>
              <Timeline.Content width="auto" minW="6rem">
                <Timeline.Title whiteSpace="nowrap" color="fg.muted">
                  {experience.date}
                </Timeline.Title>
              </Timeline.Content>
              <Timeline.Connector>
                <Timeline.Separator />
                <Timeline.Indicator />
              </Timeline.Connector>
              <Timeline.Content>
                <Timeline.Title>{experience.description}</Timeline.Title>
              </Timeline.Content>
            </Timeline.Item>
          )}
        </For>
      </Timeline.Root>
    </Stack>
  );
}
