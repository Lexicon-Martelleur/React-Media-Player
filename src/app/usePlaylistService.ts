import { useState } from "react";
import { getDefaultPlayList, getPlayListsDataByID, getPlayLists, getDefaultPlayEntry, getPlayEntryByID } from "../service";
import { IPlaylist, IPlaylistItem } from "../data";

export interface PlaylistServiceHookReturnValue {
  playlist: IPlaylistItem[];
  playEntry: IPlaylistItem;
  getAllPlaylists: () => IPlaylist[];
  updatePlayList: (listID: number) => void;
  updatePlayEntry: (entryID: number) => void;
}

export const usePlaylistService = (): PlaylistServiceHookReturnValue => {
  const [playlist, setPlaylist] = useState(getDefaultPlayList());
  const [playEntry, setPlayEntry] = useState(getDefaultPlayEntry());

  const updatePlayList = (listID: number): void => {
    setPlaylist(getPlayListsDataByID(listID));
  }

  const updatePlayEntry = (entryID: number): void => {
    setPlayEntry(getPlayEntryByID(entryID, playlist));
  }

  const getAllPlaylists = () => {
    return getPlayLists();
  }

  return {
    playlist,
    playEntry,
    getAllPlaylists,
    updatePlayList,
    updatePlayEntry
  };
}
