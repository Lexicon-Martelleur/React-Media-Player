import { ReactElement } from "react";

import { NavigationHookReturnValue } from "../app/useNavigation";
import { PlaylistServiceHookReturnValue } from "../app/usePlaylistService";
import { pages } from "./routes";
import { MyPlaylists } from "../components/MyPlaylists";
import { Playlist } from "../components";
import { PlayEntry } from "../components/PlayEntry";
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
            onSelectPlayEntry={entry => playlistService.updatePlayEntry(entry.id)}/>
          <PlayEntry
            entry={playlistService.playEntry} />
        </div>
      )}
    </>
  )
}
