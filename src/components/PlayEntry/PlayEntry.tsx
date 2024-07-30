import { ReactElement } from "react";

import { Image } from "../Image";
import { IPlaylistItem } from "../../data";
import styles from "./PlayEntry.module.css"

interface Props {
  entry: IPlaylistItem
}

export const PlayEntry: React.FC<Props> = ({
  entry
}): ReactElement => {
  return (
    <section className={styles.playEntry}>
        <figure>
            <Image image={entry.image}></Image>
        </figure>
        <h3>{entry.artist}</h3>
        <p>{entry.track}</p>
    </section>
  );
}
