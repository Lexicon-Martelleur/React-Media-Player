import { ReactElement } from "react";

import { Navbar, Playlist } from "../components";
import { MyPlaylists } from "../components/MyPlaylists";
import { useNavigation } from "./useNavigation";
import { usePlaylistService } from "./usePlaylistService";
import { PlayEntry } from "../components/PlayEntry";
import { pages } from "../routes";
import styles from "./App.module.css";

export function App(): ReactElement {
  const navigation = useNavigation()
  const playlistService = usePlaylistService()
  
  return (
    <>
      <Navbar
        title={navigation.getCurrentPageTitle()}
        isStartPage={navigation.isStartPage()}
        onNavigateBack={navigation.prevPage}/>
      <main className={styles.main} >

        {navigation.isPage(pages.start) || navigation.isStartPage() && <MyPlaylists 
          playlists={playlistService.getAllPlaylists()}
          onSelectPlaylist={list => navigation.navigateTo(
            pages.playList,
            list.description,
            () => playlistService.updatePlayList(list.id))}/>}
        
        {navigation.isPage(pages.playList) && <Playlist
          playlistItems={playlistService.playlist}
          onSelectPlayEntry={entry => navigation.navigateTo(
            pages.playEntry,
            navigation.getCurrentPageTitle(),
            () => playlistService.updatePlayEntry(entry.id))}/>}

        {navigation.isPage(pages.playEntry) && <PlayEntry
          entry={playlistService.playEntry}/>}

      </main>
    </>
  );
}
