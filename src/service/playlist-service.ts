import {
  IPlaylist,
  IPlaylistItem,
  playlistOne,
  playlistOneData,
  playlistTwo,
  playlistTwoData
} from "../data";

export function getPlayLists (): IPlaylist[] {
    return [ playlistOne, playlistTwo ];
}

export function getPlayListsDataByID (id: number): IPlaylistItem[] {
    switch(id) {
      case 1: return playlistOneData;
      case 2: return playlistTwoData;
      default: return playlistOneData;  
    }
}

export function getPlayEntryByID (
  playEntryID: number,
  playlist: IPlaylistItem[]
): IPlaylistItem {
  return playlist.find(item => item.id === playEntryID) ?? getDefaultPlayEntry();
}

export function getDefaultPlayList (): IPlaylistItem[] {
  return playlistOneData;
}

export function getDefaultPlayEntry (): IPlaylistItem {
  return playlistOneData[0];
}
