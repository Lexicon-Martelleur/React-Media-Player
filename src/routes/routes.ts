export const pages = {
  start: "start",
  playlist: "playlist",
  playItem: "playEntry",
} as const;

export type pageType = typeof pages[
  keyof typeof pages
];
