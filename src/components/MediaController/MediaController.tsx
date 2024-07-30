import { ReactElement } from "react";

import { PlayButton } from "../PlayButton";
import { icons } from "../../assets";
import { Icon } from "../Icon";
import styles from "./MediaController.module.css";

export const MediaController: React.FC = (): ReactElement => {
  return (
    <div className={styles.mediaController}>
      <Icon size="medium" icon={icons.repeat} />
      <div className={styles.mediaPlayController}>
        <Icon size="large" icon={icons.fastRewind} />
        <PlayButton size="xlarge" />
        <Icon size="large" icon={icons.fastForward} />
      </div>
      <Icon size="medium" icon={icons.shuffle} />
    </div>
  );
}