import { ReactElement } from "react";

import { IPlaylistItem } from "../../data";
import { Image } from "../Image";
import styles from "./PlaylistItem.module.css";

interface Props {
  playlistItem: IPlaylistItem;
}   

export const PlaylistItem: React.FC<Props> = ({
  playlistItem
}): ReactElement => {
  return (
    <section className={styles.playlistItem}>
      <div className={styles.playlistImage}>
        <Image image={playlistItem.image}/>
      </div>
      <div>
        <h3 className={styles.playlistArtist}>{playlistItem.artist}</h3>
        <p className={styles.playlistTrack}>{playlistItem.track}</p>
      </div>  
      <div className={styles.playlistPlay}>
        <span 
          className={`material-symbols-outlined ${styles.navbarIcon}`}>
          arrow_right
        </span>
      </div>      
    </section>
  )
}
