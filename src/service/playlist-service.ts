import * as data from "../data";

export function getPlayLists (): data.IPlaylist[] {
  return [
    data.playlistOne,
    data.playlistTwo,
    data.playlistThree,
    data.playlistFour,
    data.playlistFive,
    data.playlistSix
  ];
}

export function getPlayListsDataByID (id: number): data.IPlaylistItem[] {
    switch(id) {
      case 1: return data.playlistOneData;
      case 2: return data.playlistTwoData;
      case 3: return data.playlistOneData;
      case 4: return data.playlistTwoData;
      case 5: return data.playlistOneData;
      case 6: return data.playlistTwoData;
      default: return data.playlistOneData;  
    }
}

export function getPlayItemByID (
  playItemID: number,
  playlist: data.IPlaylistItem[]
): data.IPlaylistItem {
  return playlist.find(item => item.id === playItemID) ?? getDefaultPlayItem();
}

export function getDefaultPlayList (): data.IPlaylistItem[] {
  return data.playlistOneData;
}

export function getDefaultPlayItem (): data.IPlaylistItem {
  return data.playlistOneData[0];
}
