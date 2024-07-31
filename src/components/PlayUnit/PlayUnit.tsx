import { ReactElement, useRef } from "react";

import { Image } from "../Image";
import { IPlaylistItem } from "../../data";
import { PlayController } from "../PlayController";
import { PlayProgressBar } from "../PlayProgressBar";
import { Icon } from "../Icon";
import { audioTracks, icons } from "../../assets";
import styles from "./PlayUnit.module.css";
import { usePlayUnit } from "./usePlayUnit";

interface Props {
  playItem: IPlaylistItem,
  nextTrackAction: () => void
}

export const PlayUnit: React.FC<Props> = ({
  playItem,
  nextTrackAction
}): ReactElement => {
  const audio = useRef<HTMLAudioElement | null>(null);
  const hook = usePlayUnit(playItem, audio, nextTrackAction);

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
          duration={hook.duration}
          currentTime={hook.currentTime}/>
      </div>
      <PlayController
        isPlaying={hook.isPlaying}
        play={hook.play}
        pause={hook.pause}
        repeat={hook.repeat}
        fastForward={hook.fastForward}
        fastRewind={hook.fastRewind}/>

      <audio
        ref={audio}
        onTimeUpdate={hook.handleTimeUpdate}
        onLoadedData={hook.handleLoadedData}>
        <source {...playItem.audio} />
      </audio>
    </section>
  );
}

// Desert Rain Live at TRD 