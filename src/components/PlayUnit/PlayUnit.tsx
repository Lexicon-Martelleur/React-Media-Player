import { ReactElement } from "react";

import { Image } from "../Image";
import { IPlaylistItem } from "../../data";
import { PlayController } from "../PlayController";
import { PlayProgressBar } from "../PlayProgressBar";
import { Icon } from "../Icon";
import { icons } from "../../assets";
import styles from "./PlayUnit.module.css";

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
      <div className={styles.playUnitLikeCtr}>
        <Icon icon={icons.addCircle} className={styles.likeIcon}/>
        <div className={styles.playUnitDescriptionCtr}>
          <h1 className={styles.playUnitArtist}>{playItem.artist}</h1>
          <p className={styles.playUnitTrack}>{playItem.track}</p>
        </div>
        <Icon icon={icons.heart} className={styles.likeIcon}/>
      </div>
      <div className={styles.playUnitProgressCtr}>
        <PlayProgressBar duration={304} currentTime={12}/>
      </div>
      <PlayController />
    </section>
  );
}
