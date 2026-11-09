import { useCallback, useEffect, useState } from "react";
import { projects } from "../project";
import { ProjectDetailView } from "./project-detail-view";
import { ProjectList } from "./project-list";

const HASH_PREFIX = "#project/";

function slugFromHash(): string | null {
  const hash = window.location.hash;
  if (!hash.startsWith(HASH_PREFIX)) return null;
  const slug = decodeURIComponent(hash.slice(HASH_PREFIX.length));
  return projects.some((project) => project.slug === slug) ? slug : null;
}

export function ProjectContentSection() {
  const [activeSlug, setActiveSlug] = useState<string | null>(slugFromHash);

  useEffect(() => {
    const onHashChange = () => setActiveSlug(slugFromHash());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const openProject = useCallback((slug: string) => {
    setActiveSlug(slug);
    if (window.location.hash !== `${HASH_PREFIX}${slug}`) {
      window.history.pushState(null, "", `${HASH_PREFIX}${slug}`);
    }
  }, []);

  const closeProject = useCallback(() => {
    setActiveSlug(null);
    if (window.location.hash.startsWith(HASH_PREFIX)) {
      window.history.pushState(null, "", "#projects");
    }
  }, []);

  useEffect(() => {
    if (!activeSlug) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeProject();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeSlug, closeProject]);

  const activeProject = projects.find((project) => project.slug === activeSlug);

  if (activeProject) {
    return (
      <ProjectDetailView
        key={activeProject.slug}
        project={activeProject}
        onBack={closeProject}
      />
    );
  }

  return <ProjectList onSelect={openProject} />;
}
