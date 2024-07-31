import React, { ReactElement } from "react";

import { IPlaylistItem } from "../../data";
import { PlaylistItem } from "./PlaylistItem";
import styles from "./Playlist.module.css";

interface Props {
  playlistItems: IPlaylistItem[];
  className?: string;
  onSelectPlayItem: (playItem: IPlaylistItem) => void;
}

export const Playlist: React.FC<Props> = ({
  playlistItems,
  className,
  onSelectPlayItem
}): ReactElement => {
  return (
    <section className={`${styles.playlistContainer} ${className}`}>
      {playlistItems.map(playItem => <PlaylistItem
        key={playItem.id}
        playlistItem={playItem}
        onSelectPlayItem={() => onSelectPlayItem(playItem)}
      />)}
    </section>
  )
}