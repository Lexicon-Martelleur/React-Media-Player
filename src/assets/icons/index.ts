import play from "./play_circle.svg";
import fastForward from "./fast_forward.svg";
import fastRewind from "./fast_rewind.svg";
import repeat from "./repeat.svg";
import shuffle from "./shuffle.svg";

export const icons = {
  play: {
    src: play,
    alt: "Play icon",
    title: "Play"
  },
  fastForward: {
    src: fastForward,
    alt: "Fast forward icon",
    title: "Fast forward"
  },
  fastRewind: {
    src: fastRewind,
    alt: "Fast rewind icon",
    title: "Fast rewind"
  },
  repeat: {
    src: repeat,
    alt: "Repeat icon",
    title: "Repeat"
  },
  shuffle: {
    src: shuffle,
    alt: "Shuffle icon",
    title: "Shuffle"
  }
} as const;
