import { ReactElement } from "react";

import { PlayButton } from "../PlayButton";
import { icons } from "../../assets";
import { Icon } from "../Icon";
import styles from "./PlayController.module.css";

export const PlayController: React.FC = (): ReactElement => {
  return (
    <div className={`${styles.playController} ${styles.container}}`}>
      <Icon size="medium" icon={icons.repeat} className={styles.playControllerIcon} />
      <Icon size="large" icon={icons.fastRewind} className={styles.playControllerIcon} />
      <PlayButton size="xlarge" />
      <Icon size="large" icon={icons.fastForward} className={styles.playControllerIcon} />
      <Icon size="medium" icon={icons.shuffle} className={styles.playControllerIcon} />
    </div>
  );
}