import React, { ReactElement } from "react";

import { IPlaylistItem } from "../../data";
import { PlaylistItem } from "./PlaylistItem";
import styles from "./Playlist.module.css";

interface Props {
  playlistItems: IPlaylistItem[];
  className?: string;
  onSelectPlayEntry: (entry: IPlaylistItem) => void;
}

export const Playlist: React.FC<Props> = ({
  playlistItems,
  className,
  onSelectPlayEntry
}): ReactElement => {
  return (
    <section className={`${styles.playlistContainer} ${className}`}>
      {playlistItems.map(entry => <PlaylistItem
        key={entry.id}
        playlistItem={entry}
        onSelectPlayEntry={() => onSelectPlayEntry(entry)}
      />)}
    </section>
  )
}