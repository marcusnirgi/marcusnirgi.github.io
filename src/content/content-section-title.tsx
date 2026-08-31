import { Separator, Text } from "@chakra-ui/react";

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Text
      textStyle="2xl"
      fontWeight="bold"
      gap="0.25rem"
      display="flex"
      alignItems="center"
    >
      {children}
    </Text>
  );
}

export function SectionSeparator({
  borderWidth = "1px",
}: {
  borderWidth?: string;
}) {
  return (
    <Separator
      orientation="horizontal"
      w="100%"
      borderWidth={borderWidth}
      borderColor="accent"
      mb={4}
    />
  );
}
