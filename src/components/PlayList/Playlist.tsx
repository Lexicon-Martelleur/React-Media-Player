import React, { ReactElement } from "react";

import { IPlaylistItem } from "../../data";
import { PlaylistItem } from "./PlaylistItem";
import styles from "./Playlist.module.css"

interface Props {
  playlistItems: IPlaylistItem[];
  onSelectPlayEntry: (item: IPlaylistItem) => void;
}

export const Playlist: React.FC<Props> = ({
  playlistItems,
  onSelectPlayEntry
}): ReactElement => {
  
  return (
    <section className={styles.playlist}>
      {playlistItems.map(entry => <PlaylistItem
        key={entry.id}
        playlistItem={entry}
        onSelectPlayEntry={() => onSelectPlayEntry(entry)}
      />)}
    </section>
  )
}