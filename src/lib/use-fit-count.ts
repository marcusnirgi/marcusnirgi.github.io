import { useLayoutEffect, useRef, useState } from "react";

export type FitCountOptions = {
  /** Height of a single row in px, including the gap below it. */
  rowHeight: number;
  /** Minimum number of items to show, even when nothing fits. */
  min?: number;
  /** Maximum number of items to show, however much room there is. */
  max?: number;
  /** Set false on layouts where the container is not height-constrained. */
  enabled?: boolean;
  /** Value used before the first measurement. */
  fallback?: number;
};

const DEFAULT_MIN = 1;
const DEFAULT_MAX = 50;

function clampCount(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

/**
 * Measures a container and reports how many fixed-height rows fit inside it.
 * Re-measures whenever the element resizes, so the count is never a hardcoded
 * per-breakpoint constant.
 */
export function useFitCount<T extends HTMLElement>({
  rowHeight,
  min = DEFAULT_MIN,
  max = DEFAULT_MAX,
  enabled = true,
  fallback = DEFAULT_MIN,
}: FitCountOptions) {
  const ref = useRef<T | null>(null);
  const [height, setHeight] = useState<number | null>(null);

  useLayoutEffect(() => {
    if (!enabled) return;
    const element = ref.current;
    if (!element) return;

    const observer =
      typeof ResizeObserver === "undefined"
        ? null
        : new ResizeObserver((entries) => {
            const next = entries[0]?.contentRect.height;
            if (next && next > 0) setHeight(next);
          });

    observer?.observe(element);

    // Measure immediately so the first paint is already correct.
    const initial = element.clientHeight;
    if (initial > 0) setHeight(initial);

    return () => observer?.disconnect();
  }, [enabled]);

  const count =
    enabled && height != null && rowHeight > 0
      ? clampCount(Math.floor(height / rowHeight), min, max)
      : fallback;

  return { ref, count, height };
}

/**
 * Clamps a page index into range and returns it with its setter.
 */
export function usePagination(totalPages: number) {
  const [page, setPage] = useState(1);
  const clampedPage = Math.min(Math.max(1, page), Math.max(1, totalPages));

  return { page: clampedPage, setPage };
}

/**
 * Splits items into groups of at most `pageSize`, in order.
 */
export function splitPages<T>(items: T[], pageSize: number): T[][] {
  const size = Math.max(1, pageSize);
  const pages: T[][] = [];
  for (let index = 0; index < items.length; index += size) {
    pages.push(items.slice(index, index + size));
  }
  return pages.length > 0 ? pages : [[]];
}
