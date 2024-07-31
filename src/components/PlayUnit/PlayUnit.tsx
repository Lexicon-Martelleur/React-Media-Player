import { ReactElement, useEffect, useState } from "react";

import { Image } from "../Image";
import { IPlaylistItem } from "../../data";
import { PlayController } from "../PlayController";
import { PlayProgressBar } from "../PlayProgressBar";
import { Icon } from "../Icon";
import styles from "./PlayUnit.module.css";
import { icons } from "../../assets";

interface Props {
  playItem: IPlaylistItem;
}

export const PlayUnit: React.FC<Props> = ({
  playItem
}): ReactElement => {
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 144;

  // Dummy change used for demonstrate change in progress bar. 
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentTime >= duration) { 
        return;
      }
      setCurrentTime(prevTime => ++prevTime);
    }, 1000)
    return () => { clearInterval(interval) }
  }, [currentTime])

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
        <PlayProgressBar
          duration={duration}
          currentTime={currentTime}/>
      </div>
      <PlayController />
    </section>
  );
}
