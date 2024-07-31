import { useState } from "react";
import * as service from "../service";
import { IPlaylist, IPlaylistItem } from "../data";

export interface PlaylistServiceHookReturnValue {
  playlist: IPlaylistItem[];
  playItem: IPlaylistItem;
  shuffleMode: boolean;
  getAllPlaylists: () => IPlaylist[];
  updatePlayList: (playlistID: number) => void;
  updatePlayItem: (playItemID: number) => void;
  nextTrackAction: () => void;
  activeTrackIndex: () => number;
  toggleShuffleMode: () => void;
}

export const usePlaylistService = (): PlaylistServiceHookReturnValue => {
  const [playlist, setPlaylist] = useState(service.getDefaultPlayList());
  const [playItem, setPlayItem] = useState(service.getDefaultPlayItem());
  const [shuffleMode, setShuffleMode] = useState(false);

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
    if (currIndex + 1 >= playlist.length || currIndex === -1) {
      setPlayItem(playlist[0]);  
    } else if (shuffleMode) {
      const randomIndex = Math.floor(Math.random() * playlist.length);
      setPlayItem(playlist[randomIndex]);
    } else {
      setPlayItem(playlist[currIndex + 1]);
    }
  }

  const activeTrackIndex = () => {
    return playlist.indexOf(playItem);
  }

  const toggleShuffleMode = () => {
    setShuffleMode(preValue => !preValue)
  }

  return {
    playlist,
    playItem,
    shuffleMode,
    getAllPlaylists,
    updatePlayList,
    updatePlayItem,
    nextTrackAction,
    activeTrackIndex,
    toggleShuffleMode
  };
}
