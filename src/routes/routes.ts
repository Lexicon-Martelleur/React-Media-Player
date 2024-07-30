export const pages = {
  start: "start",
  playList: "playList",
  playEntry: "playEntry",
} as const;

export type pageType = typeof pages[
  keyof typeof pages
]
