import { useState } from "react";
import { getDefaultPlayList, getPlayListsDataByID, getPlayLists, getDefaultPlayEntry, getPlayEntryByID } from "../service";

export const usePlaylistService = () => {
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
