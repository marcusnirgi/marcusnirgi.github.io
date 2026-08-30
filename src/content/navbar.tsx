import { Button, HStack, Link } from "@chakra-ui/react";

export type NavBarProps = {
  activeSectionId: string;
  setActiveSectionId: (sectionId: string) => void;
};

export function NavBar({ activeSectionId, setActiveSectionId }: NavBarProps) {
  return (
    <HStack w="100%" justifyContent="end">
      <NavbarButton
        active={activeSectionId === "about"}
        onClick={() => setActiveSectionId("about")}
        text="ABOUT"
        sectionId="about"
      />
      <NavbarButton
        active={activeSectionId === "projects"}
        onClick={() => setActiveSectionId("projects")}
        text="PROJECTS"
        sectionId="projects"
      />
      <NavbarButton
        active={activeSectionId === "experience"}
        onClick={() => setActiveSectionId("experience")}
        text="EXPERIENCE"
        sectionId="experience"
      />
    </HStack>
  );
}

export type NavBarButtonProps = {
  text: string;
  sectionId: string;
  active?: boolean;
  onClick?: () => void;
};

function NavbarButton({ text, sectionId, active, onClick }: NavBarButtonProps) {
  return (
    <Link href={`#${sectionId}`}>
      <Button
        onClick={onClick}
        variant={active ? "subtle" : "ghost"}
        colorPalette="accent"
      >
        {text}
      </Button>
    </Link>
  );
}
