import { Button, HStack, Icon, Link } from "@chakra-ui/react";
import type { IconType } from "react-icons";
import { LuBriefcaseBusiness, LuFolderKanban, LuInfo } from "react-icons/lu";

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
        icon={LuInfo}
        sectionId="about"
      />
      <NavbarButton
        active={activeSectionId === "projects"}
        onClick={() => setActiveSectionId("projects")}
        text="PROJECTS"
        icon={LuFolderKanban}
        sectionId="projects"
      />
      <NavbarButton
        active={activeSectionId === "experience"}
        onClick={() => setActiveSectionId("experience")}
        text="EXPERIENCE"
        icon={LuBriefcaseBusiness}
        sectionId="experience"
      />
    </HStack>
  );
}

export type NavBarButtonProps = {
  text: string;
  icon?: IconType;
  sectionId: string;
  active?: boolean;
  onClick?: () => void;
};

function NavbarButton({
  text,
  icon,
  sectionId,
  active,
  onClick,
}: NavBarButtonProps) {
  return (
    <Link href={`#${sectionId}`}>
      <Button
        onClick={onClick}
        variant={active ? "subtle" : "ghost"}
        colorPalette="accent"
      >
        <Icon>
          <>{icon?.({})}</>
        </Icon>
        {text}
      </Button>
    </Link>
  );
}
