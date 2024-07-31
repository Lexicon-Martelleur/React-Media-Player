import { ReactElement } from "react";

import { IPlaylistItem } from "../../data";
import { Image } from "../Image";
import { Icon } from "../Icon";
import { icons } from "../../assets";
import styles from "./PlaylistItem.module.css";

interface Props {
  playlistItem: IPlaylistItem;
  onSelectPlayItem: () => void;
}   

export const PlaylistItem: React.FC<Props> = ({
  playlistItem,
  onSelectPlayItem
}): ReactElement => {
  return (
    <section className={styles.playlistItem}
      onClick={onSelectPlayItem}>
      <div className={styles.playlistImage}>
        <Image image={playlistItem.image}/>
      </div>
      <div>
        <h3 className={styles.playlistArtist}>{playlistItem.artist}</h3>
        <p className={styles.playlistTrack}>{playlistItem.track}</p>
      </div>  
      <div className={styles.playlistPlay}>
      <Icon size="medium" icon={icons.play} />
      </div>   
    </section>
  )
}
