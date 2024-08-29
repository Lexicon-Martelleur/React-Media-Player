import React, { ReactElement } from "react";

import { IPlaylistItem } from "../../data";
import { PlaylistItem } from "./PlaylistItem";
import styles from "./Playlist.module.css";

interface Props {
  playlistItems: IPlaylistItem[];
  className?: string;
  onSelectPlayItem: (playItem: IPlaylistItem) => void;
  activeTrackIndex?: () => number
}

export const Playlist: React.FC<Props> = ({
  playlistItems,
  className,
  onSelectPlayItem,
  activeTrackIndex
}): ReactElement => {
  return (
    <section className={`${styles.playlistContainer} ${className}`}>
      {playlistItems.map((playItem, index) => <PlaylistItem
        key={playItem.id}
        playlistItem={playItem}
        isActiveTrack={activeTrackIndex != null && activeTrackIndex() === index}
        onSelectPlayItem={() => onSelectPlayItem(playItem)}
      />)}
    </section>
  )
}