import { useState } from "react";
import {
  getDefaultPlayList,
  getPlayListsDataByID, getPlayLists, getDefaultPlayItem, getPlayItemByID } from "../service";
import { IPlaylist, IPlaylistItem } from "../data";

export interface PlaylistServiceHookReturnValue {
  playlist: IPlaylistItem[];
  playItem: IPlaylistItem;
  getAllPlaylists: () => IPlaylist[];
  updatePlayList: (playlistID: number) => void;
  updatePlayItem: (playItemID: number) => void;
}

export const usePlaylistService = (): PlaylistServiceHookReturnValue => {
  const [playlist, setPlaylist] = useState(getDefaultPlayList());
  const [playItem, setPlayItem] = useState(getDefaultPlayItem());

  const updatePlayList = (listID: number): void => {
    setPlaylist(getPlayListsDataByID(listID));
  }

  const updatePlayItem = (entryID: number): void => {
    setPlayItem(getPlayItemByID(entryID, playlist));
  }

  const getAllPlaylists = () => {
    return getPlayLists();
  }

  return {
    playlist,
    playItem,
    getAllPlaylists,
    updatePlayList,
    updatePlayItem
  };
}
