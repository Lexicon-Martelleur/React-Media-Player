import { ReactElement } from "react";

import { NavigationHookReturnValue } from "../app/useNavigation";
import { PlaylistServiceHookReturnValue } from "../app/usePlaylistService";
import { pages } from "./routes";
import { MyPlaylists } from "../components/MyPlaylists";
import { Playlist } from "../components";
import { PlayEntry } from "../components/PlayEntry";

interface Props {
  navigation: NavigationHookReturnValue;
  playlistService: PlaylistServiceHookReturnValue;
}

export const MobileRoutes: React.FC<Props> = ({
  navigation,
  playlistService 
}): ReactElement => {
  return (
    <>
      {navigation.isPage(pages.start) || navigation.isStartPage() && <MyPlaylists 
        playlists={playlistService.getAllPlaylists()}
        onSelectPlaylist={list => navigation.navigateTo(
          pages.playlist,
          list.description,
          () => playlistService.updatePlayList(list.id))}/>}
      
      {navigation.isPage(pages.playlist) && <Playlist
        playlistItems={playlistService.playlist}
        onSelectPlayEntry={entry => navigation.navigateTo(
          pages.playEntry,
          navigation.getCurrentPageTitle(),
          () => playlistService.updatePlayEntry(entry.id))}/>}

      {navigation.isPage(pages.playEntry) && <PlayEntry
        entry={playlistService.playEntry}/>}
    </>
  )
}
