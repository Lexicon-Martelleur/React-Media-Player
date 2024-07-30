import { ReactElement } from "react";

import { Image } from "../Image";
import { IPlaylistItem } from "../../data";
import styles from "./PlayEntry.module.css"
import { MediaController } from "../MediaController";

interface Props {
  entry: IPlaylistItem
}

export const PlayEntry: React.FC<Props> = ({
  entry
}): ReactElement => {
  return (
    <section className={styles.playEntry}>
      <figure className={styles.playEntryFigure}>
        <Image image={entry.image}></Image>
      </figure>
      <section className={styles.playEntryDescription}>
        <h1 className={styles.playEntryArtist}>{entry.artist}</h1>
        <p className={styles.playEntryTrack}>{entry.track}</p>
      </section>
      <MediaController />
    </section>
  );
}
