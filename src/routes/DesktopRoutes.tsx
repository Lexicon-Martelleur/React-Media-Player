import { ReactElement } from "react";

import { NavigationHookReturnValue } from "../app/useNavigation";
import { PlaylistServiceHookReturnValue } from "../app/usePlaylistService";
import { pages } from "./routes";
import { MyPlaylists } from "../components/MyPlaylists";
import { Playlist } from "../components";
import { PlayUnit } from "../components/PlayUnit";
import styles from "./DesktopRoutes.module.css";

interface Props {
  navigation: NavigationHookReturnValue;
  playlistService: PlaylistServiceHookReturnValue;
}

export const DesktopRoutes: React.FC<Props> = ({
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
      
      {navigation.isPage(pages.playlist) && (
        <div className={styles.playContainer}>
          <Playlist
            className={styles.playlist}
            playlistItems={playlistService.playlist}
            onSelectPlayItem={playItem => playlistService.updatePlayItem(playItem.id)}/>
          <PlayUnit
            playItem={playlistService.playItem}
            nextTrackAction={playlistService.nextTrackAction}/>
        </div>
      )}
    </>
  )
}
