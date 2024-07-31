import { ReactElement } from "react";

import { PlayButton } from "../PlayButton";
import { icons } from "../../assets";
import { Icon } from "../Icon";
import styles from "./PlayController.module.css";

export const PlayController: React.FC = (): ReactElement => {
  return (
    <div className={`${styles.playController} ${styles.container}}`}>
      <Icon size="medium" icon={icons.repeat} />
      <Icon size="large" icon={icons.fastRewind} />
      <PlayButton size="xlarge" />
      <Icon size="large" icon={icons.fastForward} />
      <Icon size="medium" icon={icons.shuffle} />
    </div>
  );
}