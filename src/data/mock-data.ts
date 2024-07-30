import { IPlaylist, IPlaylistItem } from "./types";
import { images } from "../assets";

export const playlistOne: IPlaylist = {
  id: 1,
  description: "Playlist One",
  thumbnail: { src: images.mockSong, alt: "Playlist One" }
};

export const playlistTwo: IPlaylist = {
  id: 2,
  description: "Playlist Two",
  thumbnail: { src: images.mockSong, alt: "Playlist Two" }
}

export const playlistThree: IPlaylist = {
  id: 3,
  description: "Playlist Three",
  thumbnail: { src: images.mockSong, alt: "Playlist One" }
};

export const playlistFour: IPlaylist = {
  id: 4,
  description: "Playlist Four",
  thumbnail: { src: images.mockSong, alt: "Playlist Two" }
}

export const playlistFive: IPlaylist = {
  id: 5,
  description: "Playlist Five",
  thumbnail: { src: images.mockSong, alt: "Playlist One" }
};

export const playlistSix: IPlaylist = {
  id: 6,
  description: "Playlist Six",
  thumbnail: { src: images.mockSong, alt: "Playlist Two" }
}

export const playlistOneData: IPlaylistItem[] = [
  {
    id: 1,
    artist: "The Beatles",
    track: "Hey Jude",
    image: { src: images.mockSong, alt: "Hey Jude album cover" }
  },
  {
    id: 2,
    artist: "Queen",
    track: "Bohemian Rhapsody",
    image: { src: images.mockSong, alt: "Bohemian Rhapsody album cover" }
  },
  {
    id: 3,
    artist: "Michael Jackson",
    track: "Billie Jean",
    image: { src: images.mockSong, alt: "Billie Jean album cover" }
  },
  {
    id: 4,
    artist: "Adele",
    track: "Rolling in the Deep",
    image: { src: images.mockSong, alt: "Rolling in the Deep album cover" }
  },
  {
    id: 5,
    artist: "Nirvana",
    track: "Smells Like Teen Spirit",
    image: { src: images.mockSong, alt: "Smells Like Teen Spirit album cover" }
  },
  {
    id: 6,
    artist: "Beyoncé",
    track: "Halo",
    image: { src: images.mockSong, alt: "Halo album cover" }
  },
  {
    id: 7,
    artist: "Ed Sheeran",
    track: "Shape of You",
    image: { src: images.mockSong, alt: "Shape of You album cover" }
  },
  {
    id: 8,
    artist: "Taylor Swift",
    track: "Love Story",
    image: { src: images.mockSong, alt: "Love Story album cover" }
  },
  {
    id: 9,
    artist: "Linkin Park",
    track: "In the End",
    image: { src: images.mockSong, alt: "In the End album cover" }
  }
];

export const playlistTwoData: IPlaylistItem[] = [
  {
    id: 10,
    artist: "Coldplay",
    track: "Fix You",
    image: { src: images.mockSong, alt: "Fix You album cover" }
  },
  {
    id: 11,
    artist: "Katy Perry",
    track: "Firework",
    image: { src: images.mockSong, alt: "Firework album cover" }
  },
  {
    id: 12,
    artist: "Drake",
    track: "Hotline Bling",
    image: { src: images.mockSong, alt: "Hotline Bling album cover" }
  },
  {
    id: 13,
    artist: "Bruno Mars",
    track: "Uptown Funk",
    image: { src: images.mockSong, alt: "Uptown Funk album cover" }
  },
  {
    id: 14,
    artist: "Imagine Dragons",
    track: "Radioactive",
    image: { src: images.mockSong, alt: "Radioactive album cover" }
  },
  {
    id: 15,
    artist: "Lady Gaga",
    track: "Bad Romance",
    image: { src: images.mockSong, alt: "Bad Romance album cover" }
  },
  {
    id: 16,
    artist: "Maroon 5",
    track: "Sugar",
    image: { src: images.mockSong, alt: "Sugar album cover" }
  },
  {
    id: 17,
    artist: "Rihanna",
    track: "Umbrella",
    image: { src: images.mockSong, alt: "Umbrella album cover" }
  },
  {
    id: 18,
    artist: "Justin Timberlake",
    track: "Can't Stop the Feeling!",
    image: { src: images.mockSong, alt: "Can't Stop the Feeling! album cover" }
  },
  {
    id: 19,
    artist: "Ariana Grande",
    track: "Thank U, Next",
    image: { src: images.mockSong, alt: "Thank U, Next album cover" }
  },
  {
    id: 20,
    artist: "Billie Eilish",
    track: "Bad Guy",
    image: { src: images.mockSong, alt: "Bad Guy album cover" }
  }
];
