import { IAudio, IImage } from "../types";

export interface IPlaylist {
  id: number;
  description: string;
  thumbnail: IImage;
}

export interface IPlaylistItem {
  id: number;
  artist: string;
  track: string;
  image: IImage;
  audio: IAudio;
}
