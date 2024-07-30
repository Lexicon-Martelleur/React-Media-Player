import play from "./play_circle.svg";
import fastForward from "./fast_forward.svg";
import fastRewind from "./fast_rewind.svg";
import repeat from "./repeat.svg";
import shuffle from "./shuffle.svg";
import moreVertical from "./more_vertical.svg";
import leftArrow from "./left_arrow.svg"


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
  },
  moreVertical: {
    src: moreVertical,
    alt: "More options",
    title: "More optios"
  },
  prevPage: {
    src: leftArrow,
    alt: "Previouse page",
    title: "Previouse page"
  }
} as const;
