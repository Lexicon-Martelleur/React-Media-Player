import { ReactElement } from "react";

import { Image } from "../Image";
import { IPlaylist } from "../../data";
import styles from "./PlaylistThumbnail.module.css"

interface Props {
  playlist: IPlaylist;
  onSelectPlaylist: () => void;
}

export const PlaylistThumbnail: React.FC<Props> = ({
  playlist,
  onSelectPlaylist
}): ReactElement => {
  return (
    <section className={styles.playlistThumbnail}
      onClick={() => onSelectPlaylist()}>
      <figure>
        <Image image={playlist.thumbnail}/>
      </figure>
      <p>{playlist.description}</p>
    </section>  
  )
}
