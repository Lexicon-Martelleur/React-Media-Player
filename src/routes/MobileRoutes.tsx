import { ReactElement } from "react";

import { NavigationHookReturnValue } from "../app/useNavigation";
import { PlaylistServiceHookReturnValue } from "../app/usePlaylistService";
import { pages } from "./routes";
import { MyPlaylists } from "../components/MyPlaylists";
import { Playlist } from "../components";
import { PlayUnit } from "../components/PlayUnit";

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
        onSelectPlayItem={playItem => navigation.navigateTo(
          pages.playItem,
          navigation.getCurrentPageTitle(),
          () => playlistService.updatePlayItem(playItem.id))}/>}

      {navigation.isPage(pages.playItem) && <PlayUnit
        playItem={playlistService.playItem}/>}
    </>
  )
}
