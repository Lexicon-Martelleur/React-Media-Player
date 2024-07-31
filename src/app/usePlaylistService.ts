import { useState } from "react";
import * as service from "../service";
import { IPlaylist, IPlaylistItem } from "../data";

export interface PlaylistServiceHookReturnValue {
  playlist: IPlaylistItem[];
  playItem: IPlaylistItem;
  getAllPlaylists: () => IPlaylist[];
  updatePlayList: (playlistID: number) => void;
  updatePlayItem: (playItemID: number) => void;
  nextTrackAction: () => void;
}

export const usePlaylistService = (): PlaylistServiceHookReturnValue => {
  const [playlist, setPlaylist] = useState(service.getDefaultPlayList());
  const [playItem, setPlayItem] = useState(service.getDefaultPlayItem());

  const updatePlayList = (listID: number): void => {
    setPlaylist(service.getPlayListsDataByID(listID));
  }

  const updatePlayItem = (entryID: number): void => {
    setPlayItem(service.getPlayItemByID(entryID, playlist));
  }

  const getAllPlaylists = () => {
    return service.getPlayLists();
  }

  const nextTrackAction = () => {
    const currIndex = playlist.indexOf(playItem);
    const nextIndex = currIndex + 1 >= playlist.length || currIndex === -1
      ? 0
      : currIndex + 1;
    setPlayItem(playlist[nextIndex]);
  }

  return {
    playlist,
    playItem,
    getAllPlaylists,
    updatePlayList,
    updatePlayItem,
    nextTrackAction
  };
}
