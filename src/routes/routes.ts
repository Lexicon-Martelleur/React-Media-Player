export const pages = {
  start: "start",
  playlist: "playlist",
  playEntry: "playEntry",
} as const;

export type pageType = typeof pages[
  keyof typeof pages
];
