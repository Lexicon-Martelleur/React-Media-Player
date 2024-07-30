import { ReactElement } from "react";

import { IPlaylistItem } from "../../data";
import { Image } from "../Image";
import styles from "./PlaylistItem.module.css";
import { PlayButton } from "../PlayButton";

interface Props {
  playlistItem: IPlaylistItem;
  onSelectPlayEntry: () => void;
}   

export const PlaylistItem: React.FC<Props> = ({
  playlistItem,
  onSelectPlayEntry
}): ReactElement => {
  return (
    <section className={styles.playlistItem}
      onClick={onSelectPlayEntry}>
      <div className={styles.playlistImage}>
        <Image image={playlistItem.image}/>
      </div>
      <div>
        <h3 className={styles.playlistArtist}>{playlistItem.artist}</h3>
        <p className={styles.playlistTrack}>{playlistItem.track}</p>
      </div>  
      <div className={styles.playlistPlay}>
        <PlayButton />
      </div>   
    </section>
  )
}
