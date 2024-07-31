import { ReactElement } from "react";

import { Image } from "../Image";
import { IPlaylistItem } from "../../data";
import styles from "./PlayUnit.module.css"
import { MediaController } from "../MediaController";

interface Props {
  playItem: IPlaylistItem;
}

export const PlayUnit: React.FC<Props> = ({
  playItem
}): ReactElement => {
  return (
    <section className={`${styles.playUnit} ${styles.container}`}>
      <div className={styles.playUnitFigure}>
        <Image image={playItem.image}></Image>
      </div>
      <div className={styles.playUnitDescription}>
        <h1 className={styles.playUnitArtist}>{playItem.artist}</h1>
        <p className={styles.playUnitTrack}>{playItem.track}</p>
      </div>
      <MediaController />
    </section>
  );
}
