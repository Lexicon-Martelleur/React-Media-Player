export interface IPlaylist {
  id: number
  description: string
  thumbnail: IImage;
}

export interface IPlaylistItem {
  id: number;
  artist: string;
  track: string;
  image: IImage;
}

export interface IImage {
  src: string;
  alt: string;
}
