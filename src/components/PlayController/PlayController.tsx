import { ReactElement } from "react";

import { icons } from "../../assets";
import { Icon } from "../Icon";
import styles from "./PlayController.module.css";

interface Props {
  isPlaying: boolean;
  play: () => void;
  pause: () => void;
  repeat: () => void;
  fastForward: () => void;
  fastRewind: () => void;
}

export const PlayController: React.FC<Props> = ({
  isPlaying,
  play,
  pause,
  repeat,
  fastRewind,
  fastForward
}): ReactElement => {
  return (
    <div className={`${styles.playController} ${styles.container}}`}>
      <div onClick={repeat}>
        <Icon size="medium" icon={icons.repeat} className={styles.playControllerIcon} />
      </div>
      <div onClick={fastRewind}>
        <Icon size="large" icon={icons.fastRewind} className={styles.playControllerIcon} />
      </div>
      {!isPlaying ? 
      <div onClick={play}>
        <Icon size="xlarge" icon={icons.play} className={styles.playControllerIcon}/>
      </div>
      :
      <div onClick={pause}>
        <Icon size="xlarge" icon={icons.pause} className={styles.playControllerIcon}/>
      </div>
      }
      <div onClick={fastForward}>
        <Icon size="large" icon={icons.fastForward} className={styles.playControllerIcon} />
      </div>
      <Icon size="medium" icon={icons.shuffle} className={styles.playControllerIcon} />
    </div>
  );
}