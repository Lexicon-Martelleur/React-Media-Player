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
    <section className={styles["playlist-item"]}>
      <div className={styles["playlist-image"]}>
        <Image image={playlistItem.image}/>
      </div>
      <div>
        <h3 className={styles["playlist-artist"]}>{playlistItem.artist}</h3>
        <p className={styles["playlist-track"]}>{playlistItem.track}</p>
      </div>  
      <div className={styles["playlist-play"]}>
        <span 
          className={`material-symbols-outlined ${styles["navbar-icon"]}`}>
          arrow_right
        </span>
      </div>      
    </section>
  )
}
