import gratefuleDead from "./Grateful Dead Live at Fillmore East on 1970-07-11.mp3";
import desertRain from "./Desert Rain Live at TRD.mp3";
import philLeshAndFriends from "./Phil Lesh and Friends Live at Warfield Theater.mp3";

export const audioTracks = {
  gratefuleDead: {
    src: gratefuleDead
  },
  desertRain: {
    src: desertRain
  },
  philLeshAndFriends: {
    src: philLeshAndFriends
  }
} as const;
